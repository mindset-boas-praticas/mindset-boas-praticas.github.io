---
layout: post
title: "Atitudes para melhorar estimativas de entrega de software e a entrega dentro prazo"
meta-title: "Prazos e Estimativas: Atitudes para melhorar a entrega de software"
meta-description: ""
bigimg: /img/posts/clock-and-computer.jpg
author: Vítor Nogueira
date: 2017-06-21 08:00:00
---

Você já teve dificuldade em dar prazo para a entrega de uma funcionalidade no seu projeto? Você já deu o prazo para um projeto e chegando perto da data percebeu que não daria pra entregar? Você já recebeu um projeto e quando olhou para o prazo disse: **huuuuum, não vai dar para entregar...**

Se sua resposta para uma das perguntas, ou todas as perguntas, foi sim, não se preocupe, dificuldade em lidar com prazos é um problema que a maioria dos programadores tem. Mas existem algumas atitudes que podem diminuir seu sofrimento.

Essas atitudes vão te ajudar a trabalhar melhor com prazos seja quando você e sua equipe precisarem dar o prazo para entrega de um produto ou quando você e sua equipe começarem um projeto com prazo determinado.

## Entenda bem o projeto antes de começar o desenvolvimento

É até meio óbvio a necessidade de entender o projeto antes de dar um prazo para entrega, não é? Mas quando você e sua equipe sabem que entederam todo o projeto antes de estimar uma data para entrega?

Entender todo o projeto, esclarecer todas as dúvidas e definir todos os requisitos é o primeiro passo para começar a estimar prazos. Existem algumas técnicas que podem te ajudar a entender o projeto de um jeito mais simples e eficaz, como por exemplo *Inception* e *Design Sprint*.

Por experiência própria posso te garantir que se você dedicar mais tempo entendendo o problema que você precisa resolver você economizará um tempo valioso no futuro com possíveis refatorações e mudanças no projeto por não ter entendido bem suas funcionalidades.

Outro ponto importante é envolver todas as pessoas que participam do projeto nesse processo de *descoberta*, quanto menos dúvidas e quanto mais claro é o projeto fica mais fácil estimar uma data para a entrega ou descobrir se o projeto será entregue na data já estipulada pelo cliente.

## Divida o software em pequenas partes

Depois de entender bem o projeto, divida em pequenas partes. Trabalhar com *backlog* e *sprints* pode te ajudar a acompanhar o progresso, fica mais fácil saber o quanto já foi entregue e o quanto ainda falta ser entregue.

Dividir o projeto em pequenas partes permite que você e sua equipe entreguem valor para o cliente antes do prazo final. Assim que vocês concluirem uma parte mostrem para o cliente, quando ele ver algo funcionando ele vai ficar mais feliz, a pressão das entregas vai diminui e vocês vão ficar mais motivados vendo o sucesso do projeto, com isso é natural que vocês produzam mais e não deixem a qualidade do software cair.

Com o projeto dividido fica mais fácil identificar qual parte é mais importante. Você e sua equipe podem começar o desenvolvimento pelas partes mais importantes para o cliente e se chegar no prazo final sem todas as funcionalidades entregues o impacto para o negócio será menor.

![quadro com planejamento de um projeto](/img/posts/board-planning.jpg)

Dividir o projeto também pode fazer com que o escopo do projeto diminua, o cliente pode identificar que alguma parte é irrelevante para a entrega final e fica mais fácil para negociar a remoção de partes do projeto.

## Não use tempo como medida para execução de tarefas

Nós somos ruins em estimar quanto tempo algo vai levar até que fique pronto. No livro *Scrum: A Arte de Fazer o Dobro do Trabalho em Metade do Tempo*, Jeff Sutherland cita exemplos e mostra mais dados que confirmam isso.

Mas então como saber quanto tempo algo vai levar para ficar pronto? No livro, Sutherland diz que somos melhores em comparar o tamanho de uma coisa com o tamanho de outra (dimensionamento relativo), como por exemplo, diferenciar o tamanho entre camisetas (P, M, G) ou cachorros (Poodle, Labrador, Dogue Alemão).

![um cachorro grande e um cachorro pequeno](/img/posts/small-and-big-dogs.jpg)

Utilize os números da sequência de Fibonacci para dar "pontos" as tarefas do projeto, sempre comparando quanto uma tarefa é "maior" ou "menor" que outra.

Em um projeto recente em que trabalhei pontuamos todas as tarefas referentes a determinadas funcionalidades e com base na velocidade da equipe (falo sobre velocidade mais pra frente) demos o prazo para a entrega. Sabe o que aconteceu? Conseguimos entregar as funcionalidades na data prevista :)

## Utilize *user stories*

Pode parecer meio bobo, mas utilizar *user stories* (histórias de usuário) no lugar de simples tarefas na hora de montar o backlog do projeto faz uma grande diferença.

Em um projeto recente eu e minha equipe reescrevemos começamos a escrever as tarefas como *user stories*. De cara percebemos que melhoramos a forma como pontuamos, o processo ficou mais rápido por que tinhamos menos *cards* para pontuar. Em primeiro lugar é por que faz com que a equipe entenda a necessidade do cliente só de ler a descrição da story. Em segundo lugar, uma *user story* é mais fácil de pontuar, e em terceiro lugar poder ver o real valor entregue no final da sprint deixou a equipe mais motivada.

Faça um teste e comece a utilizar *user stories*, se puder escrever critérios de aceitação melhor ainda, mas só mudando o título das tarefas você já vai começar a sentir a diferença.

## Acompanhe a velocidade da equipe

![pessoas correndo](/img/posts/running.jpg)

O que você e sua equipe consegue entregar no período de um sprint? Pontuar *user stories* vai te ajudar a responder essa pergunta. É simples, some a quantia de pontos executados em todos os sprints e divida pela quantidade de sprints. Exemplo:

- Sprint 1: 30 pontos
- Sprint 2: 36 pontos
- Sprint 3: 34 pontos
- Sprint 4: 32 pontos

(30 + 36 + 34 + 32) / 4 = 33

Nesse cenário podemos afirmar que por sprint a equipe pode entregar 33 pontos.

Mas no primeiro sprint? Como faço para saber quantos pontos eu e minha equipe consegue entregar? Defina uma quantidade de pontos para o primeiro sprint e vá ajustando nos próximos sprints, com três ou quatro sprints você já consegue dizer com mais certeza quantos pontos a equipe pode entregar.

Mais uma vez, por experiência própria, posso afirmar que você não vai atrasar e vai entregar todos os sprints do projeto.

Você ainda pode utilizar outras medidas, como *lead time* e *throughput* para saber o quanto a equipe pode produzir, mas a explicação dessas duas métricas fica pra outro post :)

## Comunique possíveis atrasos em entregas

Então chega a data de entrega e não foi possível concluir o projeto, todos ficam frustrados: cliente por que não recebeu o produto e os desenvolvedores por não ter entregue na data.

Mesmo seguindo boas práticas e fazendo um bom planejamento, coisas que você não esperava pode acontecer: alguém da sua equipe pode ficar doente, uma tarefa pode ter sido subestimada, surgiu outra demanda mais urgente e parte da equipe teve que ser realocada.

> *"Nenhum plano de batalha sobrevive ao contato com o inimigo"* - Helmuth von Moltke

Apenas comunique todos os envolvidos sobre os problemas e o possível atraso na entrega, com isso vocês podem rever as prioridades, planejar novamente as entregas ou simplesmente jogar a data de entrega mais pra frente.

Ser ágil tem mais a ver com *adaptação* do que com *antecipação*.

E você? Tem dificuldade em dar estimativas? Tem outra dica para deixar mais fácil a estimativa de prazos? Escreve aí nos comentários ;)

Até o próximo post!

Referências:

- [Inception; O quê? Quem? Onde? Quando? Como?](http://www.caroli.org/inception-o-que-quem-onde-quando-como/){:target="_blank"}
- [The Design Sprint](http://www.gv.com/sprint/){:target="_blank"}
- [Scrum: a arte de fazer o dobro do trabalho na metade do tempo](https://www.amazon.com.br/Scrum-fazer-dobro-trabalho-metade-ebook/dp/B01N0QKCL5){:target="_blank"}
- [Antecipação ou adaptação?](http://www.fabiocruz.com.br/antecipacao-ou-adaptacao/){:target="_blank"}