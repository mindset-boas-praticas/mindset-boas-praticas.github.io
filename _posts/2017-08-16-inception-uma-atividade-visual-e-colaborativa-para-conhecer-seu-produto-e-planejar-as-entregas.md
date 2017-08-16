---
layout: post
title: "Inception: Uma atividade visual e colaborativa para conhecer seu produto e planejar as entregas"
meta-title: "Inception: Uma atividade visual e colaborativa para conhecer seu produto e planejar as entregas"
meta-description: "Inception"
bigimg: /img/posts/inception-cover.jpg
author: Vítor Nogueira
date: 2017-08-16 08:00:00
---

Você já chegou no meio de um projeto sem saber mais o que estava fazendo? Já ficou perdido entre as muitas funcionalidades necessárias para implementar no seu software? Já teve aquela sensação de que o projeto não está "andando"?

Se você respondeu sim para qualquer dessas perguntas fique calmo, existe uma solução.

Já falei aqui no blog sobre [6 atitudes para acertar nas estimativas e entregar software dentro do prazo]({% post_url 2017-06-21-prazos-e-estimativas-atitudes-para-melhorar-a-entrega-de-software %}){:target="_blank"} e a primeira atitude era **Entenda bem o projeto antes de começar o desenvolvimento**. Nesse tópico citei duas técnicas e vou falar hoje sobre uma delas: a **Inception**.

A **Inception** é uma sequência de atividades realizadas focando o entendimento e planejamento da criação de *MVP* (*Minimum Viable Product* - Produto Mínimo Viável).

O objetivo da Inception é que a equipe saia com um bom entendimento e com um plano para a execução do projeto. Em uma semana de muito trabalho colaborativo todos do time entendem o objetivo do produto, identificam seus usuários e o escopo do projeto, com isso a duração da construção do produto pode ser estimada e as etapas para o lançamento do MVP são definidas.

Recentemente realizamos essa atividade na equipe que eu trabalho, fizemos de forma remota e conseguimos um bom resultado, mas recomendo que se possível a Inception seja realizada com todos no mesmo local físico, vai facilitar uma das coisas mais importantes da Inception: **a interação entre as pessoas**.

Agora, vamos falar sobre algumas das atividades da Inception ;)

## Visão do Produto

O objetivo dessa atividade é que de forma colaborativa a equipe defina a visão do produto. A visão deve passar uma mensagem clara para seus clientes. Ela ajuda a equipe a percorrer o caminho inicial entre a ideia do produto e seu lançamento.

O template para a visão do produto é esse:

> **Para** [cliente]
>
> **cujo** [problema]
>
> **o** [nome do produto]
>
> **é um** [categoria do produto]
>
> **diferentemente de** [produtos concorrentes]
>
> **o nosso produto** [diferencial]

Em grupo ou cada participante (depende do tamanho da equipe) preenche um dos espaços separadamente, no final junte o resultado e discutam para chegar em uma única frase que defina a visão do produto.

## O produto É ou Não É, Faz ou Não Faz

Divida uma folha de papel ou um quadro branco (se a empresa deixar vale usar a parede também, hehe) em quatro partes, cada participante deve colocar o que acha que o produto é/não é/faz/não faz em sua respectiva parte.

Após todos descreverem o produto conversem sobre cada item. Depois dessa conversa vocês vão sair com uma visão mais detalhada sobre o produto. O interessante aqui nem sempre é o que o produto **é** e **faz**, mas sim o que ele **não é** e **não faz**.

Esses itens vão te ajudar a focar as discussões apenas em funcionalidades que fazem parte do produto.

## Personas

Entender o objetivo dos usuários é muito importante para começar a pensar nas funcionalidades do produto, a persona vai te ajudar nesse entendimento através da identificação de suas necessidades.

Essa atividade pode ser feita em grupo ou individualmente e pode seguir o seguinte template:

> Nome da persona
>
> Perfil:
>
> Comportamento:
>
> Necessidades:

Dica: dê um nome engraçado para cada persona, assim fica mais difícil esquecer e a atividade fica mais divertida.

## Descobrindo as Funcionalidades

Em um gráfico coloque os objetivos do produto no eixo horizontal priorizados da esquerda para direita e no eixo vertical as personas também em ordem de prioridade mas de cima para baixo.

Pensem no que determinada persona precisa para chegar em determinado objetivo. Faça isso para todos os objetivos.

Dependendo da quantidade de objetivos e personas identificados é natural que você e sua equipe passe muito tempo nessa atividade, para economizar tempo e focar no que realmente importa limite o número de personas e objetivos tendo a seguinte questão em mente: *Temos um orçamento baixo, qual objetivo devemos focar?*

## Entendimento Técnico e Entendimento de Negócio

Essa atividade é muito interessante e nela surgem várias discussões importantes sobre cada funcionalidade, no final todos tem um maior entendimento de cada funcionalidade.

Crie um gráfico seguindo o template abaixo:

![Gráfico Entendimento Técnico X Entendimento de Negócio](/img/posts/inception-canvas-business-agreement-tech-certainty.jpg)

No eixo X o objetivo é identificar o entendimento relacionado as desafios e dependências técnicas e no eixo Y o objetivo é verificar a clareza do seu objetivo e o que deve ser feito.

Um por um, cada membro da equipe deve pegar uma funcionalidade e colocá-la no gráfico segundo o seu entendimento. Depois todos devem discutir tecnologias e requisitos relacionados a funcionalidade até chegar em um acordo. Anote tudo que for citado e que seja relevante para melhorar o entendimento de cada feature.

Procure quebrar as funcionalidades posicionadas nas áreas vermelhas com um **X** no meio até que fiquem mais claras e saiam dessas áreas, isso vai ajudar no momento da criação das ondas de entregas.

## Esforço e Valor do Negócio

De forma semelhante a atividade anterior, crie um gráfico dessa forma:

![Gráfico Esforço X Valor de Negócio](/img/posts/inception-canvas-effort-business-value.jpg)

Assim como foi feito na atividade acima, cada membro da equipe deve pegar uma funcionalidade e posicioná-la em um dos quadros segundo seu entendimento sobre o esforço X valor de negócio da funcionalidade, discutam e cheguem em um consenso sobre cada uma.

Anote em cada funcionalidade o nível de esforço e o valor de negócio, por exemplo: **EEE $$$** para uma atividade que precise de muito esforço para ser feito e tenha um alto valor para o negócio.

## Planejando MVPs

Nessa atividade você vai usar as marcações feitas nas funcionalidades pelas duas atividades anteriores: cores relacionadas ao entendimento técnico X entendimento do negócio e os E's e $'s relacionados ao esforço X valor do negócio.

Crie um canvas parecido com isso:

![Canvas para Ondas de Entrega](/img/posts/inception-canvas-mvp.jpg)

Cada coluna dessa se chama *onda de entrega*, organize as funcionalidades em cada onda de forma que faça sentido para a criação do produto.

Existem 6 regras para criar uma onda de entrega:

1. Uma onda pode conter no máximo 3 funcionalidades
2. Uma onda não pode conter mais de uma funcionalidade na cor vermelha
3. Uma onda não pode conter três funcionalidades, somente em car-
tões amarelos e vermelho
4. A soma de esforço das funcionalidades não pode ser mais que 5 E's
5. A soma de valor das funcionalidades não pode ser menos de 4 $'s
6. Uma onda tem de conter no mínimo 2 funcionalidades

Essas regras vão te ajudar a criar ondas de entregas balanceadas entre o valor de negócio X esforço e entendimento técnico X entendimento do negócio aumentando assim a chance de entrega de cada onda.

Depois de criar cada onda de entrega, defina em que momento e quantos MVPs serão entregues, o resultado final será mais ou menos esse:

![Canvas para Ondas de Entrega e Definição dos MVPs](/img/posts/inception-canvas-mvp-done.jpg)

Obs.: Crie quantas ondas de entrega e MVPs forem necessários para seu produto.

Essa atividade é sensacional, quando nossa equipe concluiu essa atividade ficamos mais motivados e focados com a entrega do produto pois ficou muito claro para todos o que deveria ser feito.

---

E aí, curtiu? Se você gostou sugiro fortemente que compre o livro [Direto ao Ponto](https://www.casadocodigo.com.br/products/livro-direto-ao-ponto){:target="_blank"}, que veja esse [vídeo falando sobre Inception](https://www.youtube.com/watch?v=-6YpMvkKhuo){:target="_blank"} e leia os conteúdos sobre Inception (e sobre outros assuntos) no [blog do Paulo Caroli](http://www.caroli.org/pt/){:target="_blank"}

Até a próxima!