# SPEC-DESIGN.md
# Redesign Visual - Portfólio Carlos Ryan

**Versão:** 1.0  
**Tipo:** Refatoração visual e experiência do usuário  
**Referência estética:** Davide Inola  
**Direção:** Editorial / Experimental / Minimalista  
**Tecnologia:** Angular + TypeScript + SCSS

---

# 1. Objetivo da reformulação

O objetivo é transformar a identidade visual atual do portfólio em uma experiência mais autoral, sofisticada e memorável.

A versão atual apresenta características comuns de templates gerados por inteligência artificial, como excesso de cards, gradientes, elementos decorativos, ícones e estruturas previsíveis.

Quero abandonar essa estética.

O novo design deverá transmitir a identidade de um desenvolvedor de software com experiência profissional, personalidade visual e atenção aos detalhes.

O site não deverá parecer um dashboard, uma landing page comercial ou um template pronto de portfólio.

Deverá parecer um projeto desenvolvido com decisões de design intencionais.

## 1.1 Referência estética

Utilizar como referência conceitual o portfólio de Davide Inola.

Não copiar diretamente seu layout, conteúdo, identidade visual ou elementos exclusivos.

O objetivo é estudar e aplicar princípios de design semelhantes:

- Composição visual diferenciada.
- Tipografia expressiva.
- Hierarquia visual bem definida.
- Uso inteligente de espaços negativos.
- Layouts assimétricos.
- Transições e interações cuidadosamente construídas.
- Personalidade visual.
- Apresentação de conteúdo sem depender de cards convencionais.

Caso o endereço da referência seja fornecido posteriormente, analisar sua estrutura visual antes de implementar.

Não inventar características específicas do site de referência sem analisá-lo.

---

# 2. Conceito visual

## 2.1 Direção criativa

Criar uma identidade visual que combine:

- Design editorial.
- Minimalismo contemporâneo.
- Brutalismo moderado.
- Estética de estúdio digital independente.
- Elementos gráficos inspirados em engenharia de software.

A interface deverá ser visualmente interessante mesmo quando estiver estática, sem depender de animações para parecer sofisticada.

## 2.2 Personalidade

O site deverá transmitir:

- Profissionalismo.
- Criatividade.
- Maturidade técnica.
- Organização.
- Personalidade.
- Atenção aos detalhes.

Evitar uma apresentação excessivamente corporativa ou impessoal.

---

# 3. Identidade visual

## 3.1 Paleta de cores

Manter uma base escura, mas reduzir a presença do azul.

Paleta sugerida:

| Elemento | Cor |
|---|---|
| Fundo principal | #111111 |
| Fundo secundário | #191919 |
| Texto principal | #F2F0EB |
| Texto secundário | #929292 |
| Destaque azul | #6B91D6 |
| Bordas | #333333 |

As cores deverão ser centralizadas em variáveis SCSS.

O azul será utilizado pontualmente em links, indicadores, detalhes e elementos interativos.

Não utilizar gradientes azuis como recurso visual predominante.

## 3.2 Tipografia

A tipografia deverá ser um dos principais elementos da identidade.

Utilizar uma combinação de:

- Fonte sans-serif expressiva para títulos.
- Fonte sans-serif neutra para textos.
- Fonte monoespaçada para pequenos detalhes técnicos.

Sugestões:

- Manrope.
- Inter.
- Space Grotesk.
- IBM Plex Mono.

Não utilizar todas simultaneamente. Escolher uma combinação coerente.

Os títulos poderão ter tamanhos expressivos, quebras de linha intencionais e alinhamentos assimétricos.

## 3.3 Elementos gráficos

Utilizar quando fizer sentido:

- Numeração de seções.
- Linhas horizontais e verticais.
- Pequenos indicadores.
- Coordenadas ou metadados visuais.
- Elementos tipográficos.
- Separadores editoriais.
- Microinterações.

Esses elementos deverão ter função estética ou estrutural.

Não adicionar elementos apenas para preencher espaço.

---

# 4. Layout e composição

## 4.1 Grid

Abandonar a estrutura tradicional de seções centralizadas e cards repetidos.

Utilizar um grid editorial responsivo.

Características:

- Composição assimétrica.
- Diferentes proporções entre colunas.
- Conteúdo alinhado com intenção.
- Espaços negativos.
- Seções com ritmos visuais diferentes.
- Alternância entre áreas mais densas e áreas mais abertas.

Não utilizar o mesmo layout em todas as seções.

## 4.2 Espaçamento

Trabalhar com espaçamentos generosos.

Evitar elementos excessivamente próximos.

Criar uma hierarquia clara entre:

- Títulos.
- Subtítulos.
- Textos.
- Metadados.
- Elementos interativos.

---

# 5. Reformulação das seções

## 5.1 Navbar

Criar uma navegação discreta.

Características:

- Identificação CR ou Carlos Ryan.
- Links de navegação simples.
- Sem aparência de botão para cada item.
- Indicador discreto da seção ativa.
- Menu mobile elegante.
- Comportamento sticky apenas se contribuir para a experiência.

A navbar não deverá competir visualmente com o conteúdo.

## 5.2 Hero / Apresentação

A seção inicial deverá ter forte personalidade visual.

Elementos obrigatórios:

- Nome Carlos Ryan.
- Cargo Desenvolvedor de Software Web.
- Fotografia pessoal circular ou integrada à composição.
- Destaque para C# e .NET.
- Mais de quatro anos de experiência.
- Indicação de que Angular está em aprendizado.
- Links de contato e redes profissionais.

Direção visual:

- Nome como elemento tipográfico de destaque.
- Composição assimétrica.
- Fotografia integrada naturalmente.
- Textos curtos.
- Poucos elementos interativos.
- Espaços negativos.

Evitar:

- Hero genérico com texto à esquerda e card à direita.
- Botões gigantes.
- Gradientes de fundo.
- Ícones decorativos.
- Frases genéricas de marketing.

A apresentação deverá parecer uma introdução pessoal, não uma propaganda comercial.

## 5.3 Sobre mim

Apresentar a trajetória profissional em formato editorial.

Utilizar:

- Títulos expressivos.
- Parágrafos curtos.
- Destaques tipográficos.
- Metadados discretos.
- Organização assimétrica.

Não colocar toda a apresentação dentro de um card.

Preservar integralmente as informações profissionais verdadeiras.

## 5.4 Tecnologias

Abandonar os grids tradicionais de cards com ícones e barras de progresso.

Apresentar as tecnologias de maneira mais editorial.

Organizar em categorias:

- Backend.
- Banco de dados.
- Frontend.
- Ferramentas.
- Engenharia de software.

Cada categoria deverá possuir hierarquia própria.

As tecnologias poderão ser apresentadas como listas tipográficas, grupos de texto ou elementos alinhados em grid.

Diferenciar visualmente experiência profissional e tecnologias em aprendizado.

Não inventar níveis de conhecimento.

## 5.5 Projetos

Esta seção deverá receber atenção especial.

Não quero uma vitrine genérica de cards.

Os projetos deverão ser apresentados como trabalhos de desenvolvimento, com contexto técnico.

Cada projeto poderá conter:

- Número de identificação.
- Nome.
- Descrição.
- Imagem.
- Tecnologias utilizadas.
- Desafio ou objetivo.
- Link do GitHub.
- Demonstração.
- Status.

Direção visual:

- Imagens em destaque.
- Composição assimétrica.
- Diferentes proporções de imagem.
- Textos bem organizados.
- Metadados técnicos.
- Separadores editoriais.

Não utilizar necessariamente o mesmo formato para todos os projetos.

A estrutura de dados atual deverá ser preservada e poderá ser ampliada quando necessário.

Os projetos continuarão sendo carregados dinamicamente de projects.ts.

Não criar projetos fictícios para preencher a interface.

Quando não existirem projetos cadastrados, apresentar um estado vazio com a mesma identidade visual.

## 5.6 Formação e cursos

Criar uma apresentação visual inspirada em publicações editoriais.

Evitar cards convencionais.

Utilizar:

- Linha do tempo discreta.
- Separadores.
- Datas.
- Nome do curso.
- Instituição.
- Status.
- Certificado, quando disponível.

A formação em Análise e Desenvolvimento de Sistemas deverá ser apresentada como em andamento.

Não inventar instituições, datas ou certificados.

## 5.7 Aprendizado

Apresentar os estudos atuais como uma linha do tempo ou registro de evolução profissional.

Destacar Angular e demais assuntos que estiverem efetivamente em estudo.

A seção deverá possuir visual próprio, mas manter coerência com a identidade geral.

Não confundir aprendizado com experiência profissional.

## 5.8 Contato

Criar uma seção de encerramento marcante.

Apresentar:

- E-mail.
- GitHub.
- LinkedIn.
- Cargo profissional.

O contato poderá utilizar tipografia grande, linhas e links destacados.

Evitar formulário genérico dentro de um card.

O e-mail deverá utilizar mailto.

## 5.9 Footer

Rodapé minimalista.

Apresentar:

- Carlos Ryan.
- Ano dinâmico.
- GitHub.
- LinkedIn.

---

# 6. Animações e interações

As animações deverão reforçar a identidade visual.

Não utilizar animações apenas porque estão disponíveis em bibliotecas.

Priorizar:

- Transições suaves.
- Entrada discreta de conteúdo.
- Microinterações nos links.
- Feedback de navegação.
- Pequenos efeitos tipográficos.
- Interações sutis nos projetos.

Evitar:

- Animações exageradas.
- Elementos flutuando sem propósito.
- Efeitos de partículas.
- Cursor personalizado sem necessidade.
- Animações que dificultem a leitura.

Respeitar prefers-reduced-motion.

Manter boa performance em dispositivos móveis.

---

# 7. Responsividade

A identidade visual deverá ser preservada em diferentes resoluções.

Desktop:

- Aproveitar o espaço horizontal.
- Composição editorial.
- Grid assimétrico.
- Títulos expressivos.

Tablet:

- Adaptar colunas.
- Reduzir espaços.
- Preservar hierarquia.

Mobile:

- Reorganizar a composição.
- Manter tipografia legível.
- Evitar rolagem horizontal.
- Garantir navegação funcional.
- Não simplesmente reduzir o layout desktop.

---

# 8. Diretrizes de implementação

## 8.1 Preservar a aplicação existente

Antes de modificar:

1. Analisar toda a estrutura atual.
2. Identificar componentes existentes.
3. Identificar estilos globais.
4. Identificar modelos e arquivos de dados.
5. Identificar funcionalidades implementadas.

Não recriar o projeto do zero.

Não alterar a arquitetura Angular sem necessidade.

Não remover funcionalidades existentes.

## 8.2 SCSS

Organizar os estilos de maneira consistente.

Criar variáveis para:

- Cores.
- Tipografia.
- Espaçamentos.
- Breakpoints.
- Bordas.
- Transições.

Evitar CSS duplicado.

Evitar estilos globais excessivamente abrangentes.

## 8.3 Componentes

Preservar a separação de componentes.

Os componentes deverão manter suas responsabilidades.

A reformulação deverá ocorrer prioritariamente na camada visual.

## 8.4 Dependências

Não adicionar bibliotecas desnecessárias.

Preferir CSS e SCSS nativos para animações e layouts.

Caso uma biblioteca seja realmente necessária, justificar sua utilização.

---

# 9. Critérios de qualidade visual

O resultado deverá atender aos seguintes critérios:

- [ ] Identidade visual própria.
- [ ] Ausência de aparência genérica de template.
- [ ] Tipografia consistente.
- [ ] Composição visual intencional.
- [ ] Uso equilibrado de espaços negativos.
- [ ] Menos cards convencionais.
- [ ] Azul utilizado como detalhe.
- [ ] Projetos apresentados com personalidade.
- [ ] Fotografia integrada ao design.
- [ ] Seções visualmente distintas.
- [ ] Responsividade preservada.
- [ ] Animações discretas.
- [ ] Boa legibilidade.
- [ ] Coerência entre todas as seções.

---

# 10. Processo de execução

Antes de iniciar a refatoração:

1. Ler o SPEC.md original.
2. Ler este SPEC-DESIGN.md.
3. Analisar a implementação visual existente.
4. Identificar os principais problemas estéticos.
5. Apresentar uma proposta de direção visual.
6. Identificar quais componentes e estilos precisarão ser alterados.

Durante a execução:

- Trabalhar com a aplicação existente.
- Preservar funcionalidades.
- Preservar os dados.
- Evitar refatorações técnicas desnecessárias.
- Implementar a nova identidade visual de forma consistente.

Após a execução:

- Executar a aplicação.
- Verificar a compilação.
- Testar todas as seções.
- Validar o menu mobile.
- Testar diferentes resoluções.
- Verificar acessibilidade.
- Corrigir inconsistências visuais.

---

# 11. Resultado esperado

Um portfólio profissional com uma identidade visual marcante, inspirado em design editorial e experimental.

O resultado deverá fugir da estética comum de portfólios gerados por IA.

A interface deverá parecer cuidadosamente desenhada, com personalidade, consistência e atenção aos detalhes.

O visitante deverá conseguir identificar rapidamente:

- Quem é Carlos Ryan.
- Qual é sua especialidade.
- Quais tecnologias domina.
- Quais projetos desenvolveu.
- Como entrar em contato.

**Prioridade absoluta: personalidade visual, qualidade de composição e acabamento profissional.**

Não sacrificar usabilidade, acessibilidade ou performance em nome da estética.