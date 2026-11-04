# SPEC.md
# Portfólio Profissional - Carlos Ryan

**Versão:** 1.0  
**Tipo:** Single Page Application (SPA)  
**Status:** Em desenvolvimento  
**Responsável:** Carlos Ryan

---

# 1. Visão geral

## 1.1 Objetivo

Desenvolver um portfólio profissional para apresentar a trajetória, experiência, habilidades técnicas, projetos, formação acadêmica e canais de contato de Carlos Ryan.

O projeto deverá ser uma aplicação web Single Page, moderna, responsiva, de fácil manutenção e com identidade visual própria.

O portfólio deverá transmitir profissionalismo, domínio técnico e evolução contínua na área de desenvolvimento de software.

## 1.2 Público-alvo

- Recrutadores de tecnologia.
- Empresas de desenvolvimento de software.
- Tech leads e desenvolvedores.
- Clientes interessados em soluções web.

## 1.3 Identificação profissional

**Nome:** Carlos Ryan  
**Cargo:** Desenvolvedor de Software Web  
**Experiência:** Mais de 4 anos  
**Especialidade:** Backend com C# e .NET.

### Apresentação

Sou Desenvolvedor Web com mais de 4 anos de experiência, especializado em backend com .NET Core e C#. Tenho forte domínio em construção de APIs RESTful, microsserviços e testes automatizados com xUnit.

Trabalho com princípios sólidos de engenharia de software (SOLID, POO, Design Patterns) e utilizo Git e metodologias ágeis (Scrum) no dia a dia.

Tenho experiência com bancos de dados SQL Server e MongoDB, além de ferramentas como Azure DevOps e BenchmarkDotNet. No frontend, atuei em melhorias de interface usando HTML, CSS, JavaScript e Bootstrap.

Atualmente curso Análise e Desenvolvimento de Sistemas e estou em constante evolução, com foco em arquitetura de sistemas escaláveis e entrega de soluções de alto valor.

---

# 2. Stack tecnológica

## 2.1 Tecnologias da aplicação

| Tecnologia | Finalidade |
|---|---|
| Angular | Framework frontend |
| TypeScript | Linguagem principal |
| HTML5 | Estrutura |
| SCSS | Estilização |
| Lucide Icons | Ícones |
| Git | Versionamento |

Utilizar Angular com componentes standalone e boas práticas da versão estável utilizada na criação do projeto.

## 2.2 Backend

Não haverá backend nesta versão.

Os dados serão armazenados em arquivos TypeScript locais, sem necessidade de banco de dados ou API externa.

A arquitetura deverá permitir uma futura integração com backend, sem exigir grandes alterações na interface.

---

# 3. Identidade visual

## 3.1 Direção de design

Criar uma interface dark, minimalista e tecnológica.

A aparência deverá ser profissional e moderna, evitando elementos exagerados.

## 3.2 Paleta de cores

| Elemento | Cor |
|---|---|
| Fundo principal | #10151E |
| Fundo secundário | #151D29 |
| Cards | #1B2533 |
| Azul principal | #4798FF |
| Azul secundário | #2878DB |
| Texto principal | #F5F7FA |
| Texto secundário | #AAB5C5 |
| Bordas | #2B3748 |

Utilizar variáveis CSS/SCSS para centralizar as cores.

## 3.3 Características visuais

- Foto de perfil circular.
- Tipografia moderna.
- Espaçamento consistente.
- Cards com bordas discretas.
- Botões com destaque azul.
- Ícones relacionados às tecnologias.
- Animações sutis.
- Transições suaves.
- Layout responsivo.

## 3.4 Restrições visuais

Evitar:

- Gradientes exagerados.
- Efeitos neon excessivos.
- Animações desnecessárias.
- Barras de progresso arbitrárias para tecnologias.
- Poluição visual.
- Textos excessivamente longos.
- Elementos decorativos sem função.

---

# 4. Estrutura da aplicação

A aplicação será composta por uma única página, dividida em seções.

Ordem de apresentação:

1. Navbar.
2. Hero.
3. Sobre mim.
4. Tecnologias.
5. Projetos.
6. Formação acadêmica.
7. Cursos.
8. Aprendizado.
9. Contato.
10. Footer.

A navegação deverá ocorrer por âncoras internas.

---

# 5. Requisitos funcionais

## RF01 - Navbar

Criar uma barra de navegação contendo:

- Identificação Carlos Ryan.
- Início.
- Sobre.
- Tecnologias.
- Projetos.
- Formação.
- Aprendizado.
- Contato.

Comportamentos:

- Navegação por âncoras.
- Scroll suave.
- Menu sticky.
- Menu mobile.
- Indicação visual da seção ativa.
- Fechamento do menu mobile após selecionar uma seção.

## RF02 - Hero

A primeira seção deverá apresentar:

- Foto de perfil circular.
- Nome completo.
- Cargo profissional.
- Breve apresentação.
- Destaque para C# e .NET.
- Experiência superior a quatro anos.
- Indicação de estudos em Angular.

Botões:

- Ver projetos.
- Entrar em contato.

Links:

- GitHub.
- LinkedIn.

A fotografia deverá utilizar um arquivo local:

public/images/profile.jpg

Caso a imagem não exista, apresentar um placeholder visual adequado, sem utilizar fotografias aleatórias.

## RF03 - Sobre mim

Apresentar a trajetória profissional e os principais conhecimentos.

Destacar:

- Desenvolvimento backend.
- APIs RESTful.
- Microsserviços.
- Testes automatizados.
- SOLID.
- Programação Orientada a Objetos.
- Design Patterns.
- SQL Server.
- MongoDB.
- Experiência frontend.
- Análise e Desenvolvimento de Sistemas.

Utilizar parágrafos curtos e uma organização visual agradável.

## RF04 - Tecnologias

Apresentar as tecnologias organizadas por categorias.

### Backend
- C#
- .NET
- .NET Core
- APIs RESTful
- Microsserviços

### Banco de dados
- SQL Server
- MongoDB

### Frontend
- HTML5
- CSS3
- JavaScript
- jQuery
- Bootstrap
- Angular (em aprendizado)
- TypeScript (em aprendizado, caso confirmado)

### Ferramentas
- Git
- Azure DevOps
- BenchmarkDotNet

### Engenharia de software
- SOLID
- POO
- Design Patterns
- xUnit
- Scrum

As tecnologias deverão ser carregadas dinamicamente de skills.ts.

Diferenciar tecnologias com experiência profissional daquelas em aprendizado.

Não inventar níveis de conhecimento.

## RF05 - Projetos

Criar uma seção para apresentação dos projetos desenvolvidos.

Cada card deverá apresentar:

- Nome.
- Imagem.
- Descrição.
- Tecnologias utilizadas.
- Link GitHub.
- Link de demonstração.
- Status.

Os dados deverão ser carregados de projects.ts.

Permitir adicionar projetos sem alterar os componentes visuais.

Quando não existirem projetos cadastrados, exibir um estado vazio elegante.

Não criar projetos fictícios.

## RF06 - Formação acadêmica

Apresentar a formação acadêmica:

- Análise e Desenvolvimento de Sistemas (em andamento).

Não inventar instituição, período ou previsão de conclusão.

Os dados deverão ser organizados em education.ts.

## RF07 - Cursos

Criar uma seção independente para cursos e certificações.

Cada registro poderá possuir:

- Nome do curso.
- Instituição.
- Descrição.
- Data.
- Carga horária.
- Certificado.
- Status.

Os dados deverão ser armazenados em courses.ts.

Permitir campos opcionais.

## RF08 - Aprendizado

Criar uma seção para apresentar assuntos em estudo.

Exemplos:

- Angular.
- TypeScript.
- Arquitetura de software.
- Desenvolvimento frontend.
- Boas práticas de engenharia de software.

Apresentar os registros em formato de timeline ou cards.

Os dados deverão ser armazenados em learning.ts.

Não confundir aprendizado atual com experiência profissional consolidada.

## RF09 - Contato

Apresentar:

**E-mail:** cryan.code@gmail.com  
**GitHub:** https://github.com/cryan-code1  
**LinkedIn:** https://www.linkedin.com/in/c-ryan-macedo/

Implementar:

- Botão de envio de e-mail via mailto.
- Link para GitHub.
- Link para LinkedIn.

Não criar formulário que simule envio de mensagens sem integração real.

## RF10 - Footer

Apresentar:

- Nome.
- Cargo.
- Links sociais.
- Copyright com ano dinâmico.

---

# 6. Arquitetura e organização

Estrutura sugerida:

src/
  app/
    components/
      navbar/
      hero/
      about/
      skills/
      projects/
      education/
      courses/
      learning/
      contact/
      footer/

    data/
      projects.ts
      skills.ts
      courses.ts
      education.ts
      learning.ts

    models/
      project.model.ts
      skill.model.ts
      course.model.ts
      education.model.ts
      learning.model.ts

    app.ts
    app.config.ts
    app.routes.ts

  styles.scss
  index.html

public/
  images/
    profile.jpg
    projects/

A estrutura poderá ser adaptada à convenção da versão atual do Angular.

## 6.1 Separação de responsabilidades

Os componentes serão responsáveis pela apresentação e interação.

Os arquivos da pasta data serão responsáveis pelas informações exibidas.

Os arquivos da pasta models definirão as interfaces e os tipos utilizados.

Não colocar grandes conjuntos de dados diretamente dentro dos componentes.

## 6.2 Modelos de dados

### Project

- id: string
- title: string
- description: string
- image: string
- technologies: string[]
- githubUrl?: string
- demoUrl?: string
- status: string
- featured?: boolean

### Course

- id: string
- title: string
- institution: string
- description?: string
- completionDate?: string
- workload?: string
- certificateUrl?: string
- status: string

### Skill

- id: string
- name: string
- category: string
- icon?: string
- experienceType: 'professional' | 'learning'

### Education

- id: string
- title: string
- institution?: string
- startDate?: string
- endDate?: string
- status: string
- description?: string

### Learning

- id: string
- title: string
- description?: string
- status: string
- date?: string

Os modelos poderão ser adaptados conforme a implementação, mantendo os campos e responsabilidades essenciais.

---

# 7. Requisitos não funcionais

## RNF01 - Responsividade

Garantir compatibilidade com:

- Desktop.
- Notebook.
- Tablet.
- Smartphone.

## RNF02 - Performance

- Evitar bibliotecas desnecessárias.
- Otimizar imagens.
- Utilizar carregamento eficiente.
- Evitar animações pesadas.
- Evitar renderizações desnecessárias.

## RNF03 - Acessibilidade

- HTML semântico.
- Contraste adequado.
- Navegação por teclado.
- Textos alternativos.
- Estados de foco visíveis.
- Respeitar prefers-reduced-motion.

## RNF04 - SEO

Implementar:

- Title.
- Meta description.
- Open Graph.
- Favicon.
- Estrutura semântica.

## RNF05 - Manutenção

A inclusão de projetos, cursos e tecnologias deverá ocorrer exclusivamente por meio dos respectivos arquivos de dados, sempre que não houver necessidade de adicionar novos tipos de conteúdo.

---

# 8. Animações e interações

Implementar:

- Scroll suave.
- Entrada sutil das seções.
- Hover nos cards.
- Transições nos botões.
- Feedback visual nos links.
- Animação discreta na apresentação inicial.

Todas as animações deverão respeitar prefers-reduced-motion.

---

# 9. Critérios de aceitação

O projeto somente será considerado concluído quando:

- [ ] A aplicação Angular compilar sem erros.
- [ ] Todas as seções estiverem implementadas.
- [ ] A navegação por âncoras funcionar.
- [ ] O menu mobile funcionar corretamente.
- [ ] A foto possuir placeholder quando não fornecida.
- [ ] Os projetos forem carregados dinamicamente.
- [ ] Os cursos forem carregados dinamicamente.
- [ ] As tecnologias forem carregadas dinamicamente.
- [ ] A formação acadêmica estiver apresentada.
- [ ] A timeline de aprendizado estiver funcional.
- [ ] Os links externos estiverem corretos.
- [ ] O contato via e-mail funcionar.
- [ ] O layout for responsivo.
- [ ] Não existirem erros relevantes no console.
- [ ] Os estados vazios estiverem tratados.
- [ ] O SEO básico estiver implementado.
- [ ] O README estiver documentado.

---

# 10. Documentação

Criar README.md contendo:

- Apresentação do projeto.
- Tecnologias utilizadas.
- Requisitos para execução.
- Instalação das dependências.
- Comando para executar localmente.
- Organização de diretórios.
- Como adicionar projetos.
- Como adicionar cursos.
- Como atualizar tecnologias.
- Como atualizar informações pessoais.
- Como substituir a fotografia.

---

# 11. Diretrizes para o Codex

Antes de implementar:

1. Analisar o workspace.
2. Identificar se já existe um projeto Angular.
3. Verificar a versão do Angular instalada.
4. Verificar os arquivos existentes.
5. Apresentar um plano resumido.

Durante a implementação:

1. Seguir esta especificação.
2. Priorizar componentes standalone.
3. Manter os dados separados da interface.
4. Não inventar informações profissionais.
5. Não criar projetos ou certificados fictícios.
6. Não adicionar dependências sem necessidade.
7. Não sobrescrever arquivos existentes sem avaliar seu conteúdo.
8. Manter o código organizado e tipado.

Após implementar:

1. Executar o projeto.
2. Verificar a compilação.
3. Corrigir erros.
4. Testar navegação.
5. Testar responsividade.
6. Verificar links e interações.
7. Atualizar o README.

O resultado deverá ser um portfólio profissional, moderno, responsivo e fácil de manter, representando corretamente a experiência e a evolução profissional de Carlos Ryan.