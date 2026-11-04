import { Skill } from '../models/portfolio.model';

export const skills: Skill[] = [
  ...['C#', '.NET', '.NET Core', 'APIs RESTful', 'Microsserviços'].map((name, i) => ({ id: `backend-${i}`, name, category: 'Backend', experienceType: 'professional' as const })),
  ...['SQL Server', 'MongoDB'].map((name, i) => ({ id: `database-${i}`, name, category: 'Banco de dados', experienceType: 'professional' as const })),
  ...['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap'].map((name, i) => ({ id: `frontend-${i}`, name, category: 'Frontend', experienceType: 'professional' as const })),
  { id: 'frontend-angular', name: 'Angular', category: 'Frontend', experienceType: 'learning' },
  ...['Git', 'Azure DevOps', 'BenchmarkDotNet'].map((name, i) => ({ id: `tools-${i}`, name, category: 'Ferramentas', experienceType: 'professional' as const })),
  ...['SOLID', 'Programação Orientada a Objetos', 'Design Patterns', 'xUnit', 'Scrum'].map((name, i) => ({ id: `engineering-${i}`, name, category: 'Engenharia de software', experienceType: 'professional' as const }))
];
