# Portfólio Carlos Ryan

Aplicação de página única construída com Angular standalone, TypeScript e SCSS. O portfólio apresenta a experiência e os estudos informados na especificação do projeto. Projetos, cursos e fotografia permanecem vazios até que dados/arquivos reais sejam fornecidos.

## Tecnologias

- Angular 20 e TypeScript
- SCSS
- Ícones e elementos visuais implementados com recursos nativos, sem dependências extras.

## Requisitos e execução

Requer Node.js compatível com Angular 20 (Node.js 20.19+ ou 22.12+) e npm.

```bash
npm install
npm start
```

A aplicação será servida em `http://localhost:4200`. Para gerar a versão de produção, use `npm run build`.

## Organização

```text
src/app/
  data/       # informações editáveis do portfólio
  models/     # interfaces TypeScript
  app.ts      # estado de navegação e composição da página
  app.html    # seções e marcação semântica
  app.scss    # estilos responsivos dos componentes
public/       # favicon e imagens locais
```

## Atualização do conteúdo

- **Projetos:** adicione registros tipados em `src/app/data/projects.ts`. Cada projeto aceita `id`, `title`, `description`, `image`, `technologies`, `status` e, opcionalmente, `githubUrl`, `demoUrl` e `featured`. Imagens podem ser guardadas em `public/images/projects/`.
- **Cursos:** adicione dados confirmados em `src/app/data/courses.ts`. Instituição é obrigatória no modelo; descrição, data, carga horária e certificado são opcionais.
- **Tecnologias:** atualize `src/app/data/skills.ts`. Use `professional` para conhecimentos profissionais informados e `learning` para estudos em andamento. Não atribua níveis arbitrários.
- **Formação:** edite `src/app/data/education.ts`.
- **Informações pessoais:** o nome, resumo e links sociais estão em `src/app/app.html`; o endereço de contato está na seção de contato do mesmo arquivo. Atualize esses dados apenas com informações confirmadas.
- **Fotografia:** coloque a foto autorizada em `public/images/profile.jpg`. Se o arquivo não existir, o portfólio mantém o placeholder com as iniciais.

## SEO e acessibilidade

Título, descrição, Open Graph, idioma da página e favicon estão em `src/index.html`. Os estilos incluem foco visível e respeitam `prefers-reduced-motion`.
