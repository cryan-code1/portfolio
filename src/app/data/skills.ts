import { Skill } from '../models/portfolio.model';

export const skills: Skill[] = [
  ...['C#', '.NET Framework', '.NET Core', 'APIs RESTful', 'Microsserviços'].map((name, i) => ({ id: `backend-${i}`, name, category: 'Backend', experienceType: 'professional' as const })),
  ...['SQL Server', 'MongoDB', 'Entity Framework Core'].map((name, i) => ({ id: `database-${i}`, name, category: 'Banco de dados', experienceType: 'professional' as const })),
  ...['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap'].map((name, i) => ({ id: `frontend-${i}`, name, category: 'Frontend', experienceType: 'professional' as const })),
  { id: 'frontend-angular', name: 'Angular', category: 'Frontend', experienceType: 'learning' },
  ...['SOLID', 'POO', 'Design Patterns'].map((name, i) => ({ id: `principles-${i}`, name, category: 'Princípios', experienceType: 'professional' as const })),
  ...['xUnit', 'nUnit', 'BenchmarkDotNet'].map((name, i) => ({ id: `testing-${i}`, name, category: 'Testes e performance', experienceType: 'professional' as const })),
  ...['Git', 'Azure DevOps', 'Scrum'].map((name, i) => ({ id: `tools-${i}`, name, category: 'Ferramentas e processo', experienceType: 'professional' as const }))
];
