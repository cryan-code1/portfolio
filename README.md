# Portfólio Carlos Ryan

Aplicação de página única construída com Angular standalone, TypeScript e SCSS. O portfólio apresenta somente dados pessoais e estudos confirmados. A seção de cursos segue oculta enquanto não houver itens para exibir; quando houver cursos ou certificações, a preferência atual é adicioná-los junto à formação. Angular aparece como estudo em andamento.

A identidade visual “Sertão” oferece tema escuro e claro, com preferência salva no navegador e respeito à preferência do sistema. A página exibe o horário de Crateús e tenta obter a temperatura atual via Open-Meteo; quando a rede ou o serviço não responde, o horário continua disponível sem mensagem de erro.

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

O arquivo `public/404.html` contém a página de erro com a mesma identidade visual. Configure o serviço de hospedagem para servir esse arquivo como resposta de status HTTP 404 ao receber uma rota inexistente; o fallback padrão de uma SPA pode responder com status 200 se a hospedagem não for ajustada.

## Atualização do conteúdo

- **Projetos:** adicione registros tipados em `src/app/data/projects.ts`. Cada projeto aceita `id`, `title`, `description`, `image`, `technologies`, `status` e, opcionalmente, `githubUrl`, `demoUrl` e `featured`. Imagens podem ser guardadas em `public/images/projects/`.
- **Cursos/certificações:** ainda não são exibidos. Quando houver registros confirmados, inclua-os junto à formação conforme a preferência atual de conteúdo.
- **Tecnologias:** atualize `src/app/data/skills.ts`. Use `professional` para conhecimentos profissionais informados e `learning` para estudos em andamento. Não atribua níveis arbitrários.
- **Formação:** edite `src/app/data/education.ts`.
- **Informações pessoais:** o nome, resumo e links sociais estão em `src/app/app.html`; o endereço de contato está na seção de contato do mesmo arquivo. Atualize esses dados apenas com informações confirmadas.
- **Fotografia:** coloque a foto autorizada em `public/images/profile.jpg`. Se o arquivo não existir, o portfólio mantém o placeholder com as iniciais.

## SEO e acessibilidade

Título, descrição, Open Graph, idioma da página e favicon estão em `src/index.html`. Os estilos incluem foco visível e respeitam `prefers-reduced-motion`.
