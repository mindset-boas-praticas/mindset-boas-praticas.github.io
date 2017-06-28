---
layout: post
title: "Porque aprender novas tecnologias NÃO te faz um programador melhor"
meta-title: "Porque aprender novas tecnologias NÃO te faz um programador melhor"
meta-description: "Você fica perdido com a quantidade de linguagens, frameworks e bibliotecas novas que surgem a todo momento? Você tem a sensação de estar sempre atrasado em relação as novas tecnologias? Então esse post é pra você"
bigimg: /img/posts/techno.jpg
author: Thomas Alvarenga
date: 2017-06-28 08:00:00
---

Você fica perdido com a quantidade de linguagens, frameworks e bibliotecas novas que surgem a todo momento?

Parece que estamos sempre atrasados com as novas tecnologias que aparecem no mundo do desenvolvimento de software, mas calma, não precisa se desesperar e sair aprendendo tudo que vê pela frente, esse post está aqui pra te ajudar a focar no que realmente importa.

É lógico que temos a obrigação de estar sempre atualizados quanto as novidades na área de desenvolvimento, mas hoje em dia é praticamente impossível conhecer de tudo profundamente.

Muitos se enganam com a ideia de que para melhorar como programadores precisam aprender todas as tecnologias da moda e ao estudarem um pouco sobre aquilo, já querem sair aplicando nos projetos sem nem pensar nas consequências.

> "Se todos estão usando é porque deve ser bom"

Seguir o "hype" já prejudicou diversos projetos em que eu trabalhei, e por esse motivo decidi escrever esse texto, para que você possa dar um passo para trás e pensar duas vezes antes de cometer os mesmos erros.

## Curva de Aprendizado

O primeiro motivo pelo qual você não deve sair aprendendo e aplicando novas tecnologias igual um maluco é a curva de aprendizado, pois sempre que você começa a estudar algo, você é um ignorante sobre aquele assunto.

Quem é ignorante faz besteiras no projeto por não ter conhecimento profundo e nem domínio naquela área, e isso é normal, não tem como fugir, principalmente na área de software.

Tem até um gráfico engraçado (mas bem realista!) que o Ben Nadel fez sobre sua [curva de aprendizado no AngularJS](https://www.bennadel.com/blog/2439-my-experience-with-angularjs---the-super-heroic-javascript-mvw-framework.htm){:target="_blank"}, onde ele teve momentos bons e ruins ao aplicar a tecnologia em seus projetos.

![AngularJS Learning Curve](/img/posts/angularjs-learning-curve.png)

O problema acontece quando isso se torna rotina na equipe, pra cada novo projeto que começa são sugeridas um monte de novas tecnologias que ninguém nunca mexeu, só conhecem por cima, mas como "todo mundo" está usando, não podemos ficar para trás.

Desenvolvedores amam desafios, novidades e fica ansiosos para "inovar" na próxima oportunidade que aparecer, e essa atitude causa uma série de coisas ruins para os projetos de software e consequentemente para as empresas.

A principal consequência disso é a bagunça que gera no código-fonte conforme a aplicação cresce, como ninguém da equipe tem domínio completo sobre a tecnologia, são feitos diversos "experimentos" para as partes funcionarem como deveriam.

Depois que a coisa já está feia, novos desenvolvedores que entram no projeto começam a culpar a equipe que construiu o software porque a manutenção dele é horrível, com um monte de gambiarras e com código sujo.

Até que chega uma hora que ninguém aguenta mais esse projeto e solta a famosa frase: "Não tem mais condições de trabalhar com esse código, vamos ter que refazer tudo do zero!"

![Não aguento mais!](/img/posts/chega.jpg)

## Experiência Própria

Eu tive uma experiência bem recente (2016) em que passei por uma situação parecida com essa, começo de projeto, novas tecnologias que nunca utilizamos sendo sugeridas e acabamos seguindo o bonde do "hype".

Das linguagens e frameworks escolhidos a equipe só tinha conhecimento de uma das tecnologias, o resto era totalmente novidade para todos.

Houveram algumas sugestões para usar mais tecnologias que a equipe tinha dominio, porém essa ideia não foi adiante ofuscada pela empolgação das novidades.

Não vou mentir pra você, por exemplo, eu mesmo fui um grande apoiador do React para o front-end nessa discussão e desprezava esse tal de Vue, não sabia nem falar esse nome, ai se eu pudesse voltar no tempo! rs

Bom, o tempo passou e essa aplicação está no ar, funcionando firme e forte, tivemos muitos ganhos com ela em relação a agilidade, entrega contínua e cobertura de testes, foi um grande aprendizado para a equipe.

Entretanto, se tratando das tecnologias citadas, estamos com alguns problemas de organização do código-fonte, principalmente nas aplicações cliente, pois mesmo trabalhando com desenvolvedores experientes, eramos ignorantes nesses novos frameworks JS.

O código começou a dar sinais de dificuldade para dar manutenção e os desenvolvedores que começaram a trabalhar nesse projeto já reclamam da forma como o mesmo foi criado e organizado.

O que precisa ser feito agora é refatorar o código de acordo com as experiências que tivemos, para que esse projeto não se torne um software legado e de difícil manutenção.

A maior surpresa para nós que desenvolvemos o front-end foi o VueJS e Vuex, que se mostraram bem mais simples, rápido e produtivo para se trabalhar, contrariando a minha aposta inicial no React e Redux, que na nossa opinião é mais verboso e com uma curva de aprendizado maior.

Apesar da experiência ruim, descobrimos um framework muito bom e que se adapta bem as nossas necessidades, mas será que existe uma maneira que seja controlada e efetiva para descobrir novas tecnologias sem prejudicar a qualidade de software?

## Fail Fast, Learn Faster

Traduzindo a frase acima temos o seguinte: "Falhe rápido, Aprenda mais rápido ainda", em outras palavras, aprenda a errar de maneira rápida e pequena para não prejudicar algo maior.

Definitivamente aquele projeto não era o lugar certo para falharmos rápido, o prazo era curto e o valor de negócio era muito grande, eu não penso que erramos na entrega de valor para o usuário final, mas erramos na definição das tecnologias.

O certo a se fazer nesse e na maioria dos casos é escolher o que a equipe tem domínio para focar no início apenas em regras de negócio.

Só depois que a aplicação estiver estável podemos começar a adotar novas tecnologias em pequenas partes do projeto e avaliar se de fato vale a pena uma mudança no software como um todo.

Isso é errar rápido e controlado, não comprometendo o sucesso da empresa com o projeto.

Você pode estar pensando que esse assunto tem mais a ver com gestão de negócios do que com programação, mas na verdade esse assunto trata sobre como ser um profissional responsável na área de software.

Se nós compararmos a engenharia de software com as outras engenharias iremos perder e muito na questão de profissionalismo, você nunca iria permitir que um engenheiro civil fizesse uma gambiarrinha na sua casa, ou que um engenheiro mecânico projetasse seu carro de qualquer maneira, mas fazemos isso nas aplicações que desenvolvemos.

Software é coisa séria, onde são investidos rios de dinheiro e onde os principais trabalhadores estão muitas vezes mais preocupados em seguir a moda e ter novos desafios pessoais do que entregar um software com qualidade.

> Programador bom é programador profissional que não é levado por modinhas

Pra finalizar, pare agora e pense nas suas próprias experiências e como você poderia ser um programador melhor sem associar essa melhoria com novas tecnologias e deixe sua reflexão nos comentários, vai ser muito legal saber sua opinião sobre esse assunto.

Um abraço e até o próximo post!
