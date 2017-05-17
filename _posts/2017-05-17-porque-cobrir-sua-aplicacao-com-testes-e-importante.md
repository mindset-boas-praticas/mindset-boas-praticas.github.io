---
layout: post
title: Porque cobrir sua aplicação com testes é importante?
meta-description: Em algum momento da sua vida como desenvolvedor você teve medo de trabalhar com algum código? Bom, se a sua resposta para essas perguntas foi sim, esse post é para você!
bigimg: /img/posts/jest-test-coverage.png
author: Thomás Alvarenga
date: 2017-05-17 00:00:00
---

Em algum momento da sua vida como desenvolvedor você teve medo de trabalhar com algum código? Você já se sentiu inseguro ao dar manutenção em uma aplicação e não saber se vai quebrar alguma coisa?

Bom, se a sua resposta para essas perguntas foi sim, esse post é para você!

![programador estressado com a aplicação](/img/posts/cansado-pc.jpg)

Essa falta de confiança é um sentimento muito ruim para qualquer profissional, pois leva ao desânimo, stress e a perda de credibilidade no mercado de trabalho. Perdemos muito tempo apenas "caçando" onde está o erro ao invés de focar nas melhorias e incrementos do software.

A solução para esse problema é muito simples, mas não é tão fácil quanto parece, posso contar nos dedos os poucos projetos que já vi aplicando testes a ponto de acabar com essa falta de confiança do desenvolvedor.

## O simples que não é fácil

Testes são um assunto bem antigo na área de desenvolvimento de software, desde o começo quando se programava fazendo buracos em um cartão já haviam programadores que esperavam horas e horas para ver se a aplicação funcionou como esperado.

A tecnologia evoluiu e hoje podemos rodar testes em milisegundos, mas será que nossa mentalidade como desenvolvedores evoluiu junto?

Ainda é comum não dar a importância devida aos testes, "vamos entregar primeiro e depois criar os testes" e "o prazo está apertado" são as desculpas mais usadas para esconder a preguiça ou falta de maturidade da equipe.

E como dizem por ai "amanhã, é nunca!", esses testes provavelmente nunca serão feitos, pelo menos não com a qualidade, quantidade e detalhamento que deveriam.

O meu objetivo com esse post é mudar seu mindset para que você nunca mais aceite fazer nenhum projeto sem uma cobertura de pelo menos 90% de testes.

Sendo assim, separei 3 principais motivos para cobrir sua aplicação com testes, vamos lá!

### 1 - Testes dão segurança e tranquilidade aos desenvolvedores

A medida que uma aplicação cresce, ela começa a ter dezenas de funcionalidades, tantas que um ser humano não é capaz de testar tudo a cada nova implementação, para isso temos os testes automatizados, que podem ser classificados como:

- Unitários
- Integração
- Aceitação (E2E)
- Performance
- Carga
- Segurança

Quanto mais desses testes produzirmos para nossa aplicação, mais segurança e tranquilidade para trabalhar vamos ter como desenvolvedores, porque se acontecer qualquer problema em uma nova versão será detectado antes de chegar em produção e não incomodará o usuário final.

É lógico que precisamos dedicar muito tempo e esforço pra criar tantos testes, e isso quer dizer mais gasto para a empresa, mas quanto será que vale ter um software estável e uma equipe segura para trabalhar nele?

Quantas aplicações você já trabalhou que mais pareciam um "frankenstein" e que davam até medo de trabalhar com "aquilo"? Valeu a pena?

![software frankenstein](/img/posts/frankenstein-software.png)

Uma ótima maneira de se cobrir a aplicação com testes é criando eles antes de escrever o código em si, mas isso já é o próximo tópico.

### 2 - Testes mudam o mindset dos desenvolvedores

Se você quer garantir a máxima qualidade nos testes você deve fazê-los antes mesmo de codar cada nova funcionalidade, isso porque a nossa concentração vai estar totalmente focada no problema que temos que resolver.

Se você já tentou fazer o teste antes do código (TDD) você deve ter reparado que essa prática causou um pequeno bug na sua mente, isso acontece devido a mudança de mentalidade na hora de desenvolver.

Muito provavelmente você não aprendeu TDD na prática nos cursos de desenvolvimento que fez, nós aprendemos a sair escrevendo o código direto, testar na mão pra ver se ta funcionando e pronto.

![programador digitando muito rápido](/img/posts/fast-typing.gif)

Quando testamos antes de codar a solução, nossa mente foca na resolução do problema e paramos de programar na base da tentativa e erro.

Além disso, produzirmos um código muito mais enxuto para criar determinada funcionalidade, pois no teste já pensamos em tudo, no input, processamento e output de cada parte.

Na minha experiência, quando eu faço o código antes dos testes, gasto energia e foco para produzir a solução e quando chega a hora de escrever os testes, estou mentalmente exausto em relação aquela parte do código e acabo produzindo testes ruins.

### 3 - Testes sem automação não são verdadeiros

Automação é um negócio mágico, nós seres humanos temos problemas com tarefas repetitivas - por isso que a idéia de carros sem motorista está crescendo tanto hoje em dia - e não é diferente em relação aos testes de software.

Em muitos projetos que trabalhei haviam muitos testes, mas eles eram completamente inúteis, por mais esforço que fazíamos pra cobrir a aplicação com testes, era só descuidar um pouco e pronto, mais de 20 testes quebrando.

Isso acontece porque não existe testes sem automação, se os seus testes não estão "plugados" em algum processo de implantação do software eles não valem de nada, sempre vão continuar desatualizados e muitas vezes quebrando.

Quando você coloca os testes para rodar no script que faz deploy da sua aplicação, nesse momento ele vira um teste automatizado de verdade, porque se uma `spec` estiver quebrando ninguém vai conseguir fazer deploy parando todo processo de entrega do software.

![testes falhando não passarão](/img/posts/shall-not-pass.jpg)

Se além disso você adicionar uma validação de coverage mínimo de 90% para testes unitários, você será um programador mais feliz, mas isso é assunto para outro post!

> "Testes são como seus amigos, não os ignore se quiser ser feliz."

Então é isso, deixe seu comentário aqui embaixo sobre as suas opiniões e experiências com testes.

Um abraço e até o próximo post!