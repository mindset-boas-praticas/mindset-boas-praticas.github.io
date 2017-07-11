---
layout: post
title: "Como aplicar 5S no desenvolvimento de software"
meta-title: "Como aplicar 5S no desenvolvimento de software"
meta-description: ""
bigimg: /img/posts/5s.jpg
author: Thomas Alvarenga
date: 2017-07-12 08:00:00
code-hightlight: true
---

> "A melhor maneira de nos prepararmos para o futuro é concentrar toda a imaginação e entusiasmo na execução perfeita do trabalho de hoje." - Dale Carnegie

Você já ouviu falar de 5S? Já pensou em praticar 5S no desenvolvimento de software?

Pra quem não tem a mínima ideia do que eu estou falando, o 5S surgiu nas empresas do Japão, durante a reconstrução do país depois da segunda guerra mundial.

O papel do 5S é cuidar da base, facilitando o aprendizado e prática de conceitos e ferramentas para a qualidade. Isso inclui cuidar dos ambientes, equipamentos, materiais, métodos, medidas, e, especialmente, pessoas.

Esses princípios são muito utilizados hoje em dia em empresas multinacionais para organização dos escritórios, oficinas e até o chão de fábrica.

![Antes e Depois do 5S](img/posts/5s-antes-depois.png)

Mas o que significa 5S? É um conjunto de cinco palavras japonesas que começam com a letra *'S'*:

* **Seiri:** Senso de Utilização
* **Seiton:** Senso de Ordenação
* **Seisou:** Senso de Limpeza
* **Seiketsu:** Senso de Saúde
* **Shitsuke:** Senso de Autodisciplina

O que significa cada uma dessas palavras? Como aplicar isso no desenvolvimento de software?

Vamos responder essas perguntas em cada item desse post, bora lá?

## 1S - Seiri - Senso de Utilização

> Separar o que é útil do que não é. Melhorar o uso do que é útil.

Quantas vezes você criou uma classe, método ou variável, depois viu que não precisava mais daquilo mas não apagou do código-fonte? E quando você instala uma dependência no projeto e acaba não utilizando ela.

Essas partes do código não utilizadas vão contra o Senso de Utilização(Seiri) pois são inúteis para a aplicação. Isso prejudica a organização do projeto e deve ser excluido para evitar distrações desnecessárias.

Pra que serve essa variável? Onde está sendo utilizada? São perguntas comuns em códigos que não seguem o Seiri.

Podemos também associar esse senso com o princípio de programação DRY(Don't Repeat Yourself) que fala sobre não criar o mesmo código em lugares diferentes, ou seja, melhorar o uso do que já é útil e não fazer cópias e cópias da mesma implementação.

Uma dica valiosa para seguir esse senso é ter um lint configurado na sua aplicação para te avisar quando algo não está sendo utilizado, falamos mais sobre isso [nesse post](http://mindsetboaspraticas.com.br/qualidade-de-software-5-dicas-para-nao-tornar-seu-sistema-legado){:target="_blank"}.

## 2S - Seiton - Senso de Ordenação

> Um lugar para cada coisa. Cada coisa no seu lugar.

Separação de responsabilidades(SRP) é a palavra chave desse senso, que determina que cada parte do código seja responsável apenas por uma implementação, sem misturar os conceitos.

O padrão MVC é um bom exemplo do uso do Senso de Ordenação(Seiton), que separa as responsabilidades de mapeamento do banco de dados e regras de negócio para as Models, interface de usuários na View e a comunicação entre essas partes é feita pelo Controller.

No seu código existe funções fazendo mais de uma operação? Se sim, provavelmente ele não está seguindo o Seiton.

Isso é ruim pois começam a existir muitas dependências entre as partes do código e comportamentos inesperados ao chamar uma simples função.

Crie funções pequenas, separe as que estiverem grandes, deixe cada parte do projeto focado em apenas uma implementação, se começar a crescer quebre em mais partes, é melhor ter muitos arquivos pequenos do que um gigante.

## 3S - Seisou - Senso de Limpeza

> Limpar e evitar sujar.

Você já conseguiu identificar uma parte do código que poderia ser melhor escrito ou melhor organizado?

Refatorar código é como fazer uma limpeza, algo que está sujo ou fora do lugar deve ser corrigido, tem até um livro que eu curto muito chamado [Código Limpo](https://www.amazon.com.br/C%C3%B3digo-Limpo-Habilidades-Pr%C3%A1ticas-Software/dp/8576082675){:target="_blank"}, que tem como principal objetivo seguir o Senso de Limpeza (Seisou).

A limpeza tambem pode ser aplicada em comentários inúteis no código, arquivos de logs gigantes que não tem como achar o que precisa, dados de usuários inativos por mais de 10 anos salvos no banco de dados.

O índice de cobertura de testes unitários te ajuda na busca por encontrar o que pode ser limpo na aplicação, pois com ele você pode descobrir potenciais partes da aplicação que não estão sendo utilizadas de verdade ou que possuem sujeiras.

Procure sempre escrever o código mais limpo possível, para não precisar de refatorações futuras.

## 4S - Seiketsu - Senso de Saúde

> Padronizar as práticas saudáveis.

Cada parte do seu código parece seguir um padrão diferente dependendo do desenvolvedor que implementou?

Isso é falta de padronização da equipe, pois cada um aprendeu a codar de uma forma diferente, em uma escola diferente, portanto é necessário que todos concordem com um padrão e sigam ele a risca, para que o código não fique confuso e cheio de partes esquisitas.

O Style Guide é uma otima maneira de *'forçar'* que todos sigam o mesmo padrão ao codificar, pois ele determina regras a serem seguidas e alguns até não permitem a aplicação rodar se essas regras forem quebradas.

Existem Style Guides para diversas linguagens, procure uma para a que você utiliza e comece a aplicar os padrões nos seus projetos. Eu gosto muito dos [Style Guides do Airbnb](http://airbnb.io/projects/styleguides/){:target="_blank"}, eles tem um pra Javascript, um pra Ruby e um para CSS + SASS.

Quando implementamos um Style Guide da Airbnb em um projeto na empresa que trabalho, houve muita reclamação no começo, pois ele não deixava a aplicação rodar se estive uma vírgula fora de lugar, mas depois todos entenderam a necessidade e hoje parece que o código foi todo escrito por uma pessoa só.

## 5S - Shitsuke - Senso de Autodisciplina

> Assumir a responsabilidade de seguir os padrões saudáveis.

Você é um desenvolvedor disciplinado ou deixa algumas práticas de lado por causa do prazo para entregar o projeto?

Acho que todo mundo sabe da importância de testes automatizados para a qualidade da aplicação, mas muito de nós não praticamos isso nos projetos que trabalhamos, é muito difícil, hoje em dia, achar um software com 90% de cobertura de testes.

Isso acontece pela falta de disciplina e pela mentalidade de *"vou gastar tempo que poderia estar trabalhando em mais funcionalidades"*, mas na verdade os testes são um investimento no futuro da aplicação e que sem eles começam a aparecer muito mais bugs conforme o codigo cresce.

Os testes são a maior causa de indisciplina de programadores, mas podemos associar esse Senso a outras práticas como criar gambiarras para resolver um problema por preguiça de implementar do jeito certo ou até deixar o repositório todo bagunçado.

Uma maneira de disciplinar a equipe a fazer a coisa certa é adotar a validação do código com Pull Requests(PR), onde cada desenvolvedor precisa da aprovação de um ou mais membros do time para que seu código seja mergeado no repositório principal da aplicação.

Essa solução funciona muito bem para equipes que utilizam o Git para controle de versões, mas existem soluções com o mesmo princípio para quem usa SVN(Subversion) ou TFS(Team Foundation Server).

E você tem aplicado o 5S nos projetos que trabalha? Qual *'S'* está faltando pra você? E qual você já segue a risca?

Responde ai nos comentários, pode ser que alguém tenha mais dicas pra te dar além das que eu escrevi aqui.

Um abraço e até o próximo post!

Referências:

- [5s aplicado ao desenvolvimento de software - Dayvson Lima](https://pt.slideshare.net/dayvsonlima1/5s-aplicado-ao-desenvolvimento-de-software){:target="_blank"}
- [Site Oficial 5S do Brasil](http://5s.com.br/){:target="_blank"}