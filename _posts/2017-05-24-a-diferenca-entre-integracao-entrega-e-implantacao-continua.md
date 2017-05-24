---
layout: post
title: A diferença entre integração, entrega e implantação contínua
meta-description: Qual a diferença, importância e benefícios que esses processos trazem ao desenvolvimento de software?
bigimg: /img/posts/continuous-delivery-versus-continuous-deployment.jpg
author: Vítor Nogueira
date: 2017-05-24 08:00:00
---

> "Entregar frequentemente software funcionando, de poucas semanas a poucos meses, com preferência à menor escala de tempo."

A frase acima é um dos [princípios do manifesto ágil](http://agilemanifesto.org/iso/ptbr/principles.html){:target="_blank"} e para que possamos **entregar software de qualidade funcionando** a implementação de processos de integração, entrega e implantação contínua é essencial, mas antes de explicarmos a diferença entres esses processos é necessário entender a importância deles no desenvolvimento de software.

> "Nossa maior prioridade é satisfazer o cliente através da entrega contínua e adiantada de software com valor agregado."

Esse é outro princípio ágil que sintetiza muito bem a importância da **entrega contínua** de software: **satisfazer o cliente**, e para que nossos produtos se mantenham vivos em um mercado cada vez mais competitivo, é essencial que possamos entregar software de qualidade em curtos espaços de tempo.

Já trabalhei em projetos onde deploys para produção deveriam ser agendados, o que impedia a entrega rápida de valor para o usuário.

A implementação desses processos trouxe mais agilidade para o time e o deixou mais feliz e motivado, pois viram o resultado do seu trabalho causando um impacto mais rápido na experiência do usuário.

Para realizarmos essas entregas de uma forma segura é necessário implementarmos alguns processos, e como falamos no [post anterior]({% post_url 2017-05-17-porque-cobrir-sua-aplicacao-com-testes-e-importante %}){:target="_blank"}, nós temos problemas com tarefas repetitivas, logo, **automatizar** esses scripts é a primeira coisa que devemos fazer.

Então, vamos detalhar cada um desses processos.

## 1 - Integração Contínua (*Continuous Integration*)

Esse processo consiste em juntar o seu trabalho, seja uma nova feature ou correção de bug, com o restante da aplicação. Um exemplo prático é fazer o *merge* de um *pull request* no repositório git da sua aplicação.

![git merge](/img/posts/git-merge.gif)

Cada integração roda um processo de *build* automatizado (compilação do código, testes unitários, testes de integração e etc), possibilitando que o time possa visualizar possíveis problemas gerados pelo novo código e corrigí-los o mais rapidamente possível, trazendo agilidade e garantindo a qualidade do software.

Para garantir que realmente o novo código integrado ao já existente é confiável, é extremamente importante que os testes que verificam o funcionamento correto do software estejam atualizados e tenham boa cobertura.

Com testes confiáveis e o código devidamente integrado podemos ir para o próximo processo.

## 2 - Entrega Contínua (*Continuous Delivery*)

Esse processo consiste na constante entrega das alterações para um ambiente específico, seja ele de teste, homologação ou até mesmo produção para que usuários possam validar a entrega.

Assim como no processo anterior, nesse processo também rodamos testes, mas dessa vez testes relacionados ao comportamento, como por exemplo: testes de aceitação, testes de performance e testes de segurança. Aqui também entram os testes manuais e visuais do pessoal de *QA*.

![testes de usuário](/img/posts/user-tests.jpg)

O objetivo da entrega contínua é assegurar que o código integrado pode ser implantado em produção, o que nos leva ao próximo processo.

## 3 - Implantação Contínua (*Continuous Deployment*)

Com os testes passando nos processos de integração contínua e entrega contínua, garantimos que o software está pronto para ser publicado. O processo de enviar o código para produção deve ser simples e automatizado.

![deploy para produção](/img/posts/winter-is-coming-brace-yourselves-a-deploy-to-production-is-coming.jpg)

A implantação contínua visa garantir a entrega para os usuários finais impedindo o acúmulo de código em ambientes de homologação.

Os testes realizados no processo de entrega contínua podem ser utilizados para garantir que o que foi publicado está de acordo com o esperado.

Vale ressaltar que para que todos os processos funcionem bem, é extremamente importante garantir que todos os ambientes tenham as mesmas configurações, mas esse é um assunto para um próximo post.

Em um cenário onde nenhum desses processos é implementado, existe um fenômeno chamado **"Medo de Deploy"** que gera insegurança nos desenvolvedores e uma aplicação que não é atualizada constantemente, prejudicando o usuário e até a própria empresa. 

O ideal é que esses processos sejam adicionados aos poucos no seu projeto, afinal, é melhor **dividir para conquistar**. A cada implementação avalie e adapte o fluxo e tarefas executadas em cada processo.

Lembre-se também da importância dos testes automatizados, para assegurar a qualidade do software e para que ele continue funcionando como esperado.

Ficou interessado e quer aplicar esses processos? Existem várias soluções prontas que podem te ajudar, dentre elas:

- [Jenkins](https://jenkins.io/){:target="_blank"}
- [Travis CI](https://travis-ci.org/){:target="_blank"}
- [Go CD](https://www.gocd.io/){:target="_blank"}
- [CircleCI](https://circleci.com/){:target="_blank"}
- [Codeship](https://codeship.com/){:target="_blank"}
- [GitLab CI](https://about.gitlab.com/features/gitlab-ci-cd/){:target="_blank"}
- [Bitbucket Pipelines](https://bitbucket.org/product/features/pipelines){:target="_blank"}

Converse com seu time, estudem, avaliem e planejem cada processo, afinal, **se quiser ir rápido, vá sozinho, se quiser ir longe, vá em grupo**.

Tem aplicado esses processos nos seus projetos? Gostaria de começar a aplicá-los? Deixe um comentário :)

Até o próximo post!