import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { skills } from './data/skills';
import { projects } from './data/projects';
import { courses } from './data/courses';
import { education } from './data/education';

@Component({ selector: 'app-root', standalone: true, imports: [CommonModule], templateUrl: './app.html', styleUrl: './app.scss' })
export class AppComponent {
  readonly skills = skills;
  readonly projects = projects;
  readonly courses = courses;
  readonly education = education;
  readonly currentYear = new Date().getFullYear();
  readonly navItems = [
    { id: 'inicio', label: 'Início' }, { id: 'sobre', label: 'Sobre' }, { id: 'tecnologias', label: 'Tecnologias' },
    { id: 'projetos', label: 'Projetos' }, { id: 'formacao', label: 'Formação' }, { id: 'contato', label: 'Contato' }
  ];
  menuOpen = false;
  activeSection = 'inicio';

  get skillCategories(): string[] { return [...new Set(this.skills.map(skill => skill.category))]; }

  @HostListener('window:scroll') onScroll(): void {
    const marker = window.scrollY + 140;
    for (const item of [...this.navItems].reverse()) {
      const section = document.getElementById(item.id);
      if (section && section.offsetTop <= marker) { this.activeSection = item.id; return; }
    }
    this.activeSection = 'inicio';
  }

  closeMenu(id: string): void { this.menuOpen = false; this.activeSection = id; }
}
