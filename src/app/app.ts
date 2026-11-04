import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { skills } from './data/skills';
import { projects } from './data/projects';
import { education } from './data/education';

@Component({ selector: 'app-root', standalone: true, imports: [CommonModule], templateUrl: './app.html', styleUrl: './app.scss' })
export class AppComponent implements OnInit, OnDestroy {
  readonly skills = skills;
  readonly projects = projects;
  readonly education = education;
  readonly currentYear = new Date().getFullYear();
  theme: 'dark' | 'light' = this.readInitialTheme();
  readonly navItems = [
    { id: 'inicio', label: 'Início' }, { id: 'sobre', label: 'Sobre' }, { id: 'formacao', label: 'Formação' },
    { id: 'tecnologias', label: 'Tecnologias' }, { id: 'projetos', label: 'Projetos' }, { id: 'contato', label: 'Contato' }
  ];
  menuOpen = false;
  activeSection = 'inicio';
  localTime = this.formatLocalTime();
  temperature: number | null = null;
  private clockHandle?: number;
  private scrollSettleHandle?: number;
  private pendingActiveSection?: string;
  private static weatherCache: { temperature: number; fetchedAt: number } | null = null;

  ngOnInit(): void {
    this.clockHandle = window.setInterval(() => this.localTime = this.formatLocalTime(), 30_000);
    void this.loadWeather();
  }

  ngOnDestroy(): void {
    if (this.clockHandle !== undefined) window.clearInterval(this.clockHandle);
    if (this.scrollSettleHandle !== undefined) window.clearTimeout(this.scrollSettleHandle);
  }

  get skillCategories(): string[] { return [...new Set(this.skills.map(skill => skill.category))]; }

  @HostListener('window:scroll') onScroll(): void {
    if (this.pendingActiveSection) {
      if (this.scrollSettleHandle !== undefined) window.clearTimeout(this.scrollSettleHandle);
      this.scrollSettleHandle = window.setTimeout(() => {
        this.pendingActiveSection = undefined;
        this.updateActiveSection();
      }, 180);
      return;
    }
    this.updateActiveSection();
  }

  private updateActiveSection(): void {
    const marker = window.scrollY + 140;
    for (const item of [...this.navItems].reverse()) {
      const section = document.getElementById(item.id);
      if (section && section.offsetTop <= marker) { this.activeSection = item.id; return; }
    }
    this.activeSection = 'inicio';
  }

  navigateTo(id: string, event: MouseEvent): void {
    event.preventDefault();
    this.menuOpen = false;
    this.activeSection = id;
    this.pendingActiveSection = id;
    if (window.location.hash !== `#${id}`) window.history.pushState(null, '', `#${id}`);

    const section = document.getElementById(id);
    if (!section) return;
    const target = section;
    const headerHeight = document.querySelector('.site-header')?.getBoundingClientRect().height ?? 72;
    const top = window.scrollY + target.getBoundingClientRect().top - headerHeight;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });

    if (this.scrollSettleHandle !== undefined) window.clearTimeout(this.scrollSettleHandle);
    this.scrollSettleHandle = window.setTimeout(() => {
      this.pendingActiveSection = undefined;
      this.updateActiveSection();
    }, 1000);
  }

  toggleTheme(): void {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    if (typeof document !== 'undefined') document.documentElement.dataset['theme'] = this.theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', this.theme === 'light' ? '#f3e8d2' : '#1a1512');
    try { window.localStorage.setItem('portfolio-theme', this.theme); } catch { /* Keep the current theme for this session. */ }
  }

  private readInitialTheme(): 'dark' | 'light' {
    if (typeof document === 'undefined') return 'dark';
    return document.documentElement.dataset['theme'] === 'light' ? 'light' : 'dark';
  }

  private formatLocalTime(): string {
    return new Intl.DateTimeFormat('pt-BR', {
      timeZone: 'America/Fortaleza', hour: '2-digit', minute: '2-digit'
    }).format(new Date());
  }

  private async loadWeather(): Promise<void> {
    const cache = AppComponent.weatherCache;
    if (cache && Date.now() - cache.fetchedAt < 10 * 60_000) {
      this.temperature = cache.temperature;
      return;
    }

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 4_000);
    try {
      const query = new URLSearchParams({
        latitude: '-5.178', longitude: '-40.68', current: 'temperature_2m', timezone: 'America/Fortaleza'
      });
      const response = await fetch(`https://api.open-meteo.com/v1/forecast?${query}`, { signal: controller.signal });
      if (!response.ok) return;
      const result = await response.json() as { current?: { temperature_2m?: unknown } };
      const temperature = result.current?.temperature_2m;
      if (typeof temperature === 'number' && Number.isFinite(temperature)) {
        this.temperature = Math.round(temperature);
        AppComponent.weatherCache = { temperature: this.temperature, fetchedAt: Date.now() };
      }
    } catch {
      // Weather is optional; the local time remains visible when the request fails.
    } finally {
      window.clearTimeout(timeout);
    }
  }
}
