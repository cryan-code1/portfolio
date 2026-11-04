export interface Project { id: string; title: string; description: string; image: string; technologies: string[]; githubUrl?: string; demoUrl?: string; status: string; featured?: boolean; }
export interface Skill { id: string; name: string; category: string; experienceType: 'professional' | 'learning'; }
export interface Course { id: string; title: string; institution: string; description?: string; completionDate?: string; workload?: string; certificateUrl?: string; status: string; }
export interface Education { id: string; title: string; institution?: string; startDate?: string; endDate?: string; status: string; description?: string; }
