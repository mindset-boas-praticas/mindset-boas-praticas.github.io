---
layout: post
title: "BDD na prática com TestCafe e Cucumber"
meta-title: "BDD na prática com TestCafe e Cucumber"
meta-description: "Um pouco sobre BDD e um exemplo prático para rodar testes end-to-end com TestCafe e Cucumber"
bigimg: /img/posts/usertesting.jpg
author: Vitor Nogueira
date: 2017-07-05 08:00:00
code-hightlight: true
---

Se você acompanha nosso blog, sabe que já falamos várias vezes sobre a importância de testes de software para manter a qualidade do código. O assunto de hoje é: BDD, o que é e como podemos escrever testes para validar o comportamento do software de uma maneira simples.

Venho estudando sobre o assunto há algum tempo e também pesquisando e testando algumas ferramentas para testes end-to-end automatizados. Resolvi compartilhar um pouco da experiência com você.

No post de hoje não foquei muito na teoria, se quiser saber mais sobre BDD e testes end-to-end, deixei algumas referências no final do post que podem te ajudar a se aprofundar mais no assunto.

## O que é BDD?

*Behavior Driven Development*, em português **Desenvolvimento Guiado por Comportamento**, é uma técnica para criar testes com foco no comportamento do software.

De maneira resumida, quem escreve as funcionalidades do software também escreve os cenários para testes e então quem implementar a funcionalidade usa esses cenários para criação dos testes.

O objetivo do BDD é facilitar a comunicação entre as pessoas envolvidas no projeto - programadores, testadores, product owners, clientes, etc - com a utilização de uma *linguagem ubíqua* (linguagem comum) para escrita dos testes, o nome dessa linguagem é *Gherkin*.

*Gherkin* foi criada para descrever os comportamentos do software de uma maneira fácil por pessoas que não são programadores. Semelhante a um Caso de Uso, um documento escrito com *Gherkin* pode seguir esse padrão:

```
Funcionalidade: Título

  Como uma persona
  Eu quero fazer algo
  Para acontecer alguma coisa

  Cenário: Título do Cenário 1
    Dado um contexto
    Quando alguma coisa acontecer
    Então esperamos o resultado

  Cenário: Título do Cenário 2
    Dado um outro contexto
    Quando outra coisa acontecer
    Então esperamos outro resultado
```

Na primeira linha você escreve um título pequeno descrevendo a funcionalidade, logo depois a narrativa da funcionalidade, que como no exemplo acima pode seguir o padrão de uma *User Story*, e em seguida os cenários dos testes.

## E como fica isso na prática?

Dentre as tecnologias que testei a que mais me chamou a atenção foi o [TestCafe](https://devexpress.github.io/testcafe/){:target="_blank"}. Ela é uma solução para testes de aplicações web feita em NodeJS e o que mais me chamou a atenção foi o fato dela ser simples, não é preciso criar arquivos de configuração e nem instalar plugins para rodar os testes em navegadores, com poucos comandos já é possível rodar os testes.

> "**Automated browser testing for the modern web development stack.**"
>
> "TestCafe is a pure node.js end-to-end solution for testing web apps. It takes care of all the stages: starting browsers, running tests, gathering test results and generating reports. TestCafe doesn’t need browser plugins - it works in all popular modern browsers out-of-the-box."
>
> https://devexpress.github.io/testcafe/

![exemplo de testes autotizados com TestCafe](/img/posts/install-and-run-test-with-testcafe.gif)

### Criando o package.json e instalando o testcafe

Para começar nosso projeto vamos criar uma pasta e nosso `package.json`, esse arquivo terá várias informações sobre o projeto e é nele que vamos salvar as dependências utilizadas. Para saber mais sobre esse arquivo, acesse a [documentação no site do npm](https://docs.npmjs.com/files/package.json){:target="_blank"}.

```shell
mkdir bdd-example
cd bdd-example
npm init
```

Após responder algumas perguntas, seu `package.json` vai ficar mais ou menos assim:

```
{
  "name": "bdd-example",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Vitor Nogueira <vnweb.contato@gmail.com>",
  "license": "MIT"
}
```

Se você deixou as respostas em branco vai notar que no script "test" foi adicionado um comando para informar que não foi especificado nada e retornar um erro, já já a gente chega lá.

Agora vamos instalar o testcafe:

```shell
npm install testcafe --save
```

Perceba o uso do `--save`, ele é utilizado para que o módulo instalado seja adicionado nas dependências do projeto, depois de rodar esse comando nosso package vai ficar assim:

```
{
  "name": "bdd-example",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Vitor Nogueira <vnweb.contato@gmail.com>",
  "license": "MIT",
  "dependencies": {
    "testcafe": "0.16.2"
  }
}
```

O módulo testcafe foi adicionado na lista de dependências e a versão que foi instalada foi a 0.16.2.

Duas observações:

- Se você está utilizando a versão do npm maior ou igual a 5 não é necessário passar o `--save` como parametro, apenas rodando `npm install testcafe` instala o módulo e o adiciona na lista de dependências;
- Você também pode utilizar o yarn para gerenciar os módulos do seu projeto, com ele basta apenas digitar `yarn add testcafe` que o módulo e instalado e adicionado a lista de dependências. Se você quiser saber mais sobre o yarn, no final do post deixei alguns links como referência.

### Criando e rodando os testes

Observação: os exemplos a seguir utilizam algumas features das novas versões do JavaScript, caso você tenha dificuldades nas referências você pode encontrar alguns links para saber mais sobre essas novas features.

Crie uma pasta chamada `tests` dentro do projeto e um arquivo chamado `example.js`:

```shell
mkdir tests
touch example.js
```

Feito isso a estrutura de pastas vai ficar mais ou menos assim:

```
bdd-example/
  package.json
  tests/
    example.js
```

Abra o arquivo `example.js` e cole o seguinte teste:

```javascript
fixture('Example page').page('https://devexpress.github.io/testcafe/example');

test('Emulate user actions and perform a verification', async t => {
  await t
    .setNativeDialogHandler(() => true)
    .click('#populate')
    .click('#submit-button');

  const location = await t.eval(() => window.location);

  await t.expect(location.pathname).eql('/testcafe/example/thank-you.html');
});
```

Esse é o teste utilizado como exemplo na página inicial do TestCafe, nele é utilizado a página de exemplo do TestCafe para rodar alguns comandos: confirmar a ação do dialog que é exibido após clicar no botão que popula o formulário: 

```javascript
setNativeDialogHandler(() => true)
```

e cliques para popular e enviar o formulário:

```javascript
click('#populate')

click('#submit-button')
```

Após executar esse comandos o teste espera que o caminho da página que o navegador é redirecionado seja igual a **/testcafe/example/thank-you.html**.

```javascript
const location = await t.eval(() => window.location);

await t.expect(location.pathname).eql('/testcafe/example/thank-you.html');
```

Você pode ler mais sobre a API do testcafe na documentação da ferramenta: [https://devexpress.github.io/testcafe/documentation/getting-started/](https://devexpress.github.io/testcafe/documentation/getting-started/), ela é bem completa e tem vários exemplos de uso.

Para rodar o teste adicione o seguinte comando no script test do nosso package.json: `testcafe chrome tests/`, ele deve ficar assim:

```
{
  "name": "bdd",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "testcafe chrome tests/"
  },
  "author": "Vitor Nogueira <vnweb.contato@gmail.com>",
  "license": "MIT",
  "dependencies": {
    "testcafe": "0.16.2"
  }
}
```

Agora basta rodar o comando `npm test` no seu terminal para rodar os testes, se estiver tudo certo você terá um resultado semelhante a esse:

![resultado do comando testcafe no terminal](img/posts/testcafe-command-result.jpg)

### Instalando o Cucumber

Mas Vitor, você tinha falado sobre uma tal de linguagem ubiqua que facilita a comunicação entre todos da equipe e até agora só vi código JavaScript, #comofaz?

Para que você possa descrever as features e seus cenários de teste vamos utilizar outro módulo chamado [cucumber](https://github.com/cucumber/cucumber-js){:target="_blank"}. Rode o mesmo comando que você utilizou para instalar o testcafe, mas agora troque o nome do módulo instalado para cucumber:

```shell
npm install cucumber --save
```

> "Cucumber is a tool for running automated tests written in plain language. Because they're written in plain language, they can be read by anyone on your team. Because they can be read by anyone, you can use them to help improve communication, collaboration and trust on your team." - Cucumber

Por padrão, os testes agora devem ficar em uma pasta chamada `features`, dentro dela vamos criar os arquivos que vão servir como base para rodar os testes, as definições dos passos e claro, os testes.

Como exemplo vamos criar um teste simulando uma pesquisa no google, a estrutura de pastas ficará assim:

```
bdd-example/
  package.json
  features/
    google.feature
    step_definitions/
      google.js
      hooks.js
    support/
      testControllerHolder.js
      world.js
```

Os arquivos que servirão como base para o teste são o `world.js` que serve como um contexto isolado para cada cenário:

```javascript
const { defineSupportCode } = require('cucumber');
const testControllerHolder = require('./testControllerHolder');

function CustomWorld () {
  this.waitForTestController = testControllerHolder.get;
}

defineSupportCode(({ setWorldConstructor }) => {
  setWorldConstructor(CustomWorld);
});
```

E o `testControllerHolder.js` que é o *controller* utilizado nos testes:

```javascript
const testControllerHolder = {
  testController: null,
  captureResolver: null,
  getResolver: null,
  capture(testController) {
    testControllerHolder.testController = testController;

    if (testControllerHolder.getResolver) {
      testControllerHolder.getResolver(t);
    }

    return new Promise(function (resolve) {
      testControllerHolder.captureResolver = resolve;
    });
  },
  free() {
    testControllerHolder.testController = null;

    if (testControllerHolder.captureResolver) {
      testControllerHolder.captureResolver();
    }
  },
  get() {
    return new Promise(function (resolve) {
      if (testControllerHolder.testController) {
        resolve(testControllerHolder.testController);
      }
      else {
        testControllerHolder.getResolver = resolve;
      }
    });
  }
};

module.exports = testControllerHolder;
```

Outro arquivo necessário para rodar os testes com o cucumber em conjunto com o testcafe é o `hooks.js` que fica na pasta step_definitions. Esse arquivo é utilizado para construir e destruir o ambiente para os testes antes e depois de cada cenário:

```javascript
const { defineSupportCode } = require('cucumber');
const fs = require('fs');
const createTestCafe = require('testcafe');
const testControllerHolder = require('../support/testControllerHolder');

const DELAY  = 5000;

function createTestFile () {
  fs.writeFileSync('test.js',
    'import testControllerHolder from "./features/support/testControllerHolder.js";\n\n' +

    'fixture("")\n' +

    'test("test", testControllerHolder.capture);');
}

function runTest () {
  let runner = null;

  createTestCafe('localhost', 1337, 1338)
    .then((testController) => {
      runner = testController.createRunner();

      return runner
        .src('./test.js')
        .browsers('chrome')
        .run()
        .catch((error) => {
          console.log(error);
        });
    })
    .then((report) => {
      if (report) {
        console.log(report);
      }
    });
}

defineSupportCode(function ({ registerHandler }) {
  registerHandler('BeforeFeatures', (features, callback) => {
    createTestFile();
    runTest();

    setTimeout(callback, DELAY);
  });

  registerHandler('AfterFeatures', (features, callback) => {
    testControllerHolder.free();
    fs.unlinkSync('test.js');
    setTimeout(callback, DELAY);
  });
});
```

Com esses arquivos base para o teste podemos começar a escrever os testes utilizando uma linguagem mais comum, veja como fica o arquivo que descreve o teste da pesquisa:

```
Feature: Google search

  As a developer
  I want to find github repositories by Google search
  so that fork it

  Scenario: Searching for Mindset Boas Práticas repository by Google
    Given I am open Google's search page
    When I am typing my search request "mindsetboaspraticas github" on Google
    Then I am pressing "enter" key on Google
    Then I should see that the first Google's result is "mindsetboaspraticas · GitHub"
```

Bem mais simples e fácil de entender né? Agora só falta escrever o arquivo que contem os passos necessário para executar os cenários, lembrando que um passo pode ser reaproveitado entre os cenários. Esse arquivo é o `google.js` que fica dentro da pasta step_definitions:

```
const { defineSupportCode } = require('cucumber');
const Selector = require('testcafe').Selector;

defineSupportCode(({ Given, When, Then }) => {
  let testController = null;

  Given('I am open Google\'s search page', function () {
    return this.waitForTestController()
      .then((controller) => {
        testController = controller;

        return testController.navigateTo('http://google.com');
      });
  });

  When('I am typing my search request {stringInDoubleQuotes} on Google', (text) => {
    const input = Selector('#lst-ib').with({ boundTestRun: testController });

    return testController.typeText(input, text);
  });

  Then('I am pressing {stringInDoubleQuotes} key on Google', (text) => {
    return testController.pressKey(text);
  });

  Then('I should see that the first Google\'s result is {stringInDoubleQuotes}', (text) => {
    const firstLink = Selector('#rso > div:nth-child(1) > div > div > div > div > h3 > a').with({ boundTestRun: testController });

    return testController.expect(firstLink.innerText).contains(text);
  });
});
```

Mude o script test no package.json para: `cucumber`, ele deve ficar assim:

```
{
  "name": "bdd",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "cucumber-js"
  },
  "author": "Vitor Nogueira <vnweb.contato@gmail.com>",
  "license": "MIT",
  "dependencies": {
    "cucumber": "2.3.1",
    "testcafe": "0.16.2"
  }
}
```

E novamente rode o comando `npm test` no seu terminal, se tudo estiver correto novamente você terá um resultado parecido com esse:

![resultado do comando cucumber no terminal](img/posts/cucumber-command-result.jpg)

E é isso :)

Você pode encontrar todo o código utilizado no exemplo nesse repositório do github: [https://github.com/mindsetboaspraticas/bdd-example](https://github.com/mindsetboaspraticas/bdd-example).

Existem várias outras ferramentas que para rodar testes automatizados, inclusive em outras linguagens, mas das ferramentas em JavaScript que eu testei essa fui a que eu tive menos trabalho para rodar os testes automatizados, com apenas 3 arquivos foi possível integrar o cucumber com o testcafe.

E você? Quais ferramentas já utilizou para esse tipo de teste? Deixe seu comentário abaixo e vamos trocar ideia ;)

Referências:

- [Desenvolvimento orientado por comportamento (BDD)](http://www.devmedia.com.br/desenvolvimento-orientado-por-comportamento-bdd/21127){:target="_blank"}
- [Behavior Driven Development](https://pt.wikipedia.org/wiki/Behavior_Driven_Development){:target="_blank"}
- [BDD com Cucumber – Parte 1](http://agiletesters.com.br/topic/20/bdd-com-cucumber-parte-1){:target="_blank"}
- [Cucumber Documentation - Reference](https://cucumber.io/docs/reference){:target="_blank"}
- [Yarn](https://yarnpkg.com/pt-BR/){:target="_blank"}
- [Yarn: A evolução do NPM](https://tableless.com.br/yarn-evolucao-do-npm/){:target="_blank"}
- [Yarn: A new package manager for JavaScript](https://code.facebook.com/posts/1840075619545360){:target="_blank"}
- [ECMAScript 6: New Features: Overview and Comparison](http://es6-features.org){:target="_blank"}
- [2ality – JavaScript and more](http://2ality.com/index.html){:target="_blank"}
- [Learn ES2015 - Babel](https://babeljs.io/learn-es2015/){:target="_blank"}
- [An example of using TestCafe and CucumberJS ](https://github.com/helen-dikareva/testcafe-cucumber-demo){:target="_blank"}