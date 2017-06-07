---
layout: post
title: "5 dicas essenciais para manter a qualidade de software e evitar que sua aplicação se torne um sistema legado"
meta-title: "Qualidade de Software: 5 dicas essenciais para manter a qualidade de software e evitar que sua aplicação se torne um sistema legado"
meta-description: "Código ruim pode diminuir a produtividade, veja algumas dicas para que manter o código da sua aplicação organizado e a qualidade de software sempre alta"
bigimg: /img/posts/qualidade-de-software.jpg
author: Vítor Nogueira
date: 2017-06-07 08:00:00
---

Começo de um novo projeto, você e sua equipe ficam animados, decidem quais tecnologias vão utilizar, definem a arquitetura e começam a desenvolver. No início tudo vai bem, entregas realizadas no prazo, sem bugs e a motivação da equipe sempre alta.

Mas nem tudo são flores, algumas coisas começam a dar errado, o prazo vai acabando, a qualidade do projeto cai cada vez mais e com isso a equipe vai perdendo a motivação.

Se isso já aconteceu ou acontece com você, fique tranquilo, não é a único que passa por isso, mas saiba que você pode fazer algumas coisas para que isso não aconteca mais.

Qualidade é um termo subjetivo, mas quando falamos sobre desenvolvimento de software podemos dizer que um código com alta qualidade é um código organizado, testado e de fácil manutenção.

Sendo assim, separei 5 dicas para que você possa manter a qualidade do seu software e não ter medo de mudanças de requisitos, refatorações e mudanças de tecnologia durante o desenvolvimento do sistema.

## 1. Testes de Software

Já falamos aqui no blog sobre a importância de testes e essa é a primeira dica para você manter a qualidade de software sempre alta.

Quando você se pergunta: **O que pode acontecer se eu mexer nesse trecho de código?** Se sua aplicação tem uma boa cobertura de testes (*code coverage*) você não precisa se preocupar com alterações no código, eles irão te avisar se algo "quebrou". Testes te darão a segurança necessária para que você possa dar manutenção no sistema quando necessário.

Mas para que você possa confiar nos testes, é importante ter testes de qualidade. De nada adianta cobertura de testes se eles tem baixa qualidade, isso deixará você com o falso sentimento de que tudo está funcionando.

![piramide de testes](/img/posts/test-pyramid.png)

Testes unitários são mais "baratos", crie o máximo possível desse tipo e garanta uma boa cobertura. Com uma base de testes unitários sólida e confiável, você pode implementar os outros tipos de testes com mais facilidade e segurança, garantindo ainda mais que sua aplicação sobreviverá a qualquer alteração no código.

## 2. Organização e Padronização de Código

Quando você vê um lugar desorganizado uma das coisas que você pensa é que ninguém cuida dele, certo?

Uma mesa de trabalho desorganizada pode diminuir a produtividade de quem a utiliza, correto?

![mesa organizada](/img/posts/organized-desk.jpg)

Com software acontece o mesmo, código desorganizado é sinônimo de falta de cuidado da equipe que trabalha nele e trabalhar com um código assim é muito ruim.

Implemente um *code style* e procure validar de maneira automatizada se as regras que foram definidas estão sendo seguidas. *Code style* é um conjunto de regras que guia como os desenvolvedores devem escrever o código.

A maioria das linguagens de programação já tem *code styles* e ferramentas que garantem que o código siga as regras definidas. Atualmente tenho trabalhado muito com JavaScript, nossa equipe utiliza o [ESLint](http://eslint.org/){:target="_blank"} como ferramenta para checar o estilo do nosso código.

Com o ESLint é possível criar suas regras de estilo de código ou até mesmo utilizar um conjunto de regras criado por outras pessoas. Nossa equipe, por exemplo, tem utilizado o estilo de código definido pelo pessoal do [Airbnb](https://www.npmjs.com/package/eslint-config-airbnb){:target="_blank"}.

A aplicação de um *code style* traz a sensação de que o código foi escrito por uma pessoa apenas independentemente do número de integrantes da equipe.

Validar de maneira automatizada se o *code style* está sendo seguido é muito importante, dessa forma você e sua equipe terão liberdade para quando estiver revisando um código você possa focar sua análise em outros pontos, como por exemplo, regras de negócio e segurança.

## 3. Sempre Arrume a Casa

Você já ouviu falar da teoria das janelas quebradas? Essa é uma teoria de política de segurança pública que afirma que pequenos delitos quando não punidos acarretam a atitudes criminosas mais graves.

![janelas quebradas](/img/posts/break-windows.jpg)

Essa teoria pode ser aplicada em várias áreas, como por exemplo, no desenvolvimento de software. Um projeto onde pequenas partes de código não seguem os padrões e boas práticas definidas pela equipe ou pelo mercado e que ninguém se atenta a corrigí-las tende a se tornar um sistema legado com o passar do tempo.

Quando você encontrar algum papel jogado no chão, tente pegar e jogar no lixo, assim você ajuda a manter o local sempre limpo. Na sua casa, ao ver algo fora do lugar, procure deixá-lo no seu devido local, dessa forma você ajuda a manter sua casa organizada.

![armário organizado](/img/posts/home-organization.jpg)

Faça o mesmo com o código em que você está trabalhando, é normal que com o passar do tempo features ou correções sejam feitas com pressa por conta do prazo, mas sempre que possível procure fazer pequenas correções no código em que você está trabalhando.

Quando você encontrar algo que não é mais utilizado remova aquela parte, quando encontrar aquela função ou váriavel que não está no lugar correto, mude para o local certo, dessa forma o código tende a sempre se manter organizado.

## 4. Não tenha medo de refatoração

![refatoração de código antigo](/img/posts/refactoring-fox.gif)

Ao longo do projeto, determinadas funcionalidades do projeto podem sofrer mudanças, bibliotecas podem ser atualizadas e bugs podem ser encontrados, acarretando assim possíveis refatorações. Mas refatoração de código não precisa ser sinônimo de dor de cabeça.

Se seguir as três dicas acima você e sua equipe terão um código testado, organizado e padronizado, trazendo dessa maneira mais segurança quando precisar realizar alguma refatoração.

> *"Refatoração é uma técnica controlada para melhorar o design de uma base de código existente."* - Martin Fowler

Outro ponto é que se no decorrer do projeto você seguir essas dicas grandes refatorações passam a não existir mais, restando apenas pequenas alterações conforme o software e tecnologias utilizadas evoluam.

## 5. Comunicação

![comunicação](/img/posts/communication.png)

Por fim, a última mas não menos importante dica desse post: **Comunicação**.

Ter uma boa comunicação com sua equipe, seja por e-mail, chat ou cara a cara é a chave para o sucesso de um projeto. Quando iniciar um projeto garanta que todos estão cientes da importância em manter a qualidade do software. Faça o mesmo para pessoas que entram no projeto já em andamento.

Documente todas as boas práticas, padrões e regras definidas pela equipe. Sempre mantenha essa documentação atualizada, com isso vocês terão uma sólida base de conhecimento.

É muito importante que todos os envolvidos no projeto estejam engajados na manutenção da qualidade do software.

Siga essas dicas e garanta a qualidade do software, pois um projeto com qualidade e que cumpra seu objetivo torna todos os envolvidos mais felizes e orgulhosos do resultado alcançado.

Até o próximo post!

Referências:

- [TestPyramid](https://martinfowler.com/bliki/TestPyramid.html){:target="_blank"}
- [Refactoring](https://martinfowler.com/books/refactoring.html){:target="_blank"}
- [Janelas quebradas: uma teoria do crime que merece reflexão](https://daniellixavierfreitas.jusbrasil.com.br/artigos/146770896/janelas-quebradas-uma-teoria-do-crime-que-merece-reflexao){:target="_blank"}