---
layout: post
title: "7 passos para construir uma aplicação com TDD e Integração Contínua"
meta-title: "7 passos para construir uma aplicação com TDD e Integração Contínua"
meta-description: "Parece impossível pra você ter uma aplicação com uma boa cobertura de testes e com deploy automatizado? Com esses 7 passos simples você vai aprender como colocar TDD e Integração Contínua em prática"
bigimg: /img/posts/ci-circle.png
author: Thomas Alvarenga
date: 2017-07-25 08:00:00
code-hightlight: true
---

No primeiro post desse blog eu falei sobre ["porque cobrir sua aplicação com testes é importante?"]({% post_url 2017-05-17-porque-cobrir-sua-aplicacao-com-testes-e-importante %}){:target="_blank"} e o pessoal gostou bastante.

Sendo assim, nesse texto vamos por em prática o que falamos no ultimo item daquele post, que foi **"Testes sem automação não são verdadeiros"**

Nesse item eu expliquei que apenas ter testes automatizados no ambiente local de cada desenvolvedor não é o bastante, pois tendem a quebrar facilmente quando é necessário fazer uma entrega na "correria".

A solução pra esse problema é configurar um script de teste e deploy automatizados e parar de fazer esses processos manualmente para não burlar a si mesmo.

Esse script também é chamado de pipeline, onde cada comando depende do sucesso do anterior para rodar, garantindo assim que se uma linha do script quebrar o deploy não será executado.

Quando colocamos isso em prática forçamos os desenvolvedores a corrigir os testes que podem estar quebrando e até a aumentar a cobertura de testes da aplicação como veremos daqui a pouco.

Além de garantir a qualidade do software e evitar bugs causados pelas alterações frequentes de códigos sem uma boa cobertura de testes.

Então vamos para a prática, criar uma aplicação, seus testes e deploy automatizados!

### 1º Passo - Iniciando o Projeto

Nesse post vou criar uma aplicação bem simples que será uma API que soma dois números e retorna o resultado, só para termos algo para testar e fazer deploy, para isso vamos utilizar as seguintes tecnologias:

- **NodeJS + ExpressJS:** para construir a API;
- **Jest + Supertest:** para criar os testes unitários com requests para a API;
- **TravisCI:** para configurar o pipeline que irá rodar os testes e deploy;
- **Heroku**: para hospedar nossa aplicação em um ambiente fictício de produção;

Lembrando que o mais importante aqui não são as tecnologias utilizadas, e sim os testes e deploy automatizados, que podem ser feitos com diversas tecnologias e linguagens, só estou utilizando essas porque são as que eu mais domino e são gratuitas.

Vamos começar então inicializando um projeto com NodeJS, para isso basta criar uma pasta para a aplicação e rodar o seguinte comando dentro dessa pasta:

```shell
npm init
```
*É necessário ter o NodeJS instalado*

Ao rodar esse comando ele vai pedir algumas informações do projeto, como nome, descrição, autor e etc, basta preencher ou deixar tudo com o valor default, ele usa essas informações para gerar o arquivo `package.json`, que vai parecer mais ou menos igual ao meu abaixo:

```json
{
  "name": "ci-config-sample",
  "version": "1.0.0",
  "description": "A sample to show how to configure a CI in node applications",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Thomas Alvarenga (thomas@mindsetboaspraticas.com.br)",
  "license": "MIT"
}
```

Em seguida vamos instalar as dependências do nosso projeto, que são o ExpressJS, BodyParser, Jest e Supertest, para isso basta rodar os seguintes comandos:

```shell
npm install --save express body-parser
npm install --save-dev jest supertest
```

*Utilizamos o `--save` para salvar as dependêcias do projeto no arquivo `package.json` e `--save-dev` para dependências que são apenas utilizadas no ambiente de desenvolvimento, como testes unitários*.

Se tudo der certo as seguintes linhas serão adicionadas no seu `package.json`:

```json
"dependencies": {
    "express": "^4.15.3",
    "body-parser": "^1.17.2",
},
"devDependencies": {
    "jest": "^20.0.4",
    "supertest": "^3.0.0"
}
```

Com tudo instalado, vamos partir pro código!

### 2º Passo - Criar testes unitários

Seguindo a prática do TDD, vamos criar os testes unitários antes de criar o código em si, é só criar um arquivo na raiz do projeto, chamar ele de `server.spec.js` e escrever o seguinte código:

```javascript
const request = require('supertest');

describe('server test',  () => {
  let server;
  
  beforeAll(() => {
    server = require('./server');
  });

  afterAll(() => {
    server.close();
  });

  describe('POST /sum', () => {
    let response;
  
    beforeAll((done) => {
      request(server)
        .post('/sum')
        .send({ a: 2, b: 3})
        .then(data => {
          response = data;
          done();
        });
    });

    it('return status code 200', () => {
      expect(response.statusCode).toBe(200);
    });

    it('return the sum of a and b', () => {
      expect(response.body).toEqual({ result: 5 });
    });
  });

  describe('Any other route', () => {
    let response;
  
    beforeAll((done) => {
      request(server)
        .post('/anyotherroute')
        .send({ a: 2, b: 3})
        .then(data => {
          response = data;
          done();
        });
    });

    it('return status code 404', () => {
      expect(response.statusCode).toBe(404);
    });
  });
});
```

Para que possamos rodar os testes unitários com Jest precisamos inserir o comando dele no arquivo `package.json` dentro de scripts, conforme abaixo:

```json
"scripts": {
  "test": "jest"
},
```

Agora basta rodar o comando abaixo para rodar os testes unitários que acabamos de criar:

```shell
npm test
```

Lógico que todos dos testes vão quebrar, porque não criamos o código ainda, mas esse é o objetivo do TDD, primeiro ver os testes falhando para depois implementá-lo, provavelmente você vai ter uma resposta parecida com essa:

![testes falhando](/img/posts/failing-tests.png)

Agora só falta implementar o código para que esses testes passem!

### 3º Passo - Implementar API

Para construirmos a API basta criar um novo arquivo na raiz do projeto chamado `server.js` e escrever o seguinte código:

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/sum', (req, res) => {
  const { a, b } = req.body;
  const result = a + b;

  res.status(200).send({ result });
});

const server = app.listen(process.env.PORT || 3000, () => console.log('Server running!'));

module.exports = server;
```

E pronto, rodando os testes novamente com `npm test` veremos que todos os testes estão passando agora:

![testes passando](/img/posts/sucessful-tests.png)

Só falta configurar um comando para rodar a API independente dos testes unitários, para isso basta inserir o comando `start` na seção de scripts do arquivo `package.json`:

```json
"scripts": {
  "start": "node server",
  "test": "jest"
},
```

Para ver o comando em ação é só rodar `npm start` no terminal e você verá a mensagem *Server Running!*.

Agora vem a parte mais legal, configurar o TravisCI para a nossa aplicação, mas primeiro vamos subir nosso código para o Github.

### 4º Passo - Criar repositório no Github

Esse passo é bem simples, apenas criar um repositório no Github, conforme a imagem abaixo:

![Criando repositório no Github](/img/posts/github-new-repository.png)

Depois copie o link SSH do repositório criado:

![Copiar SSH do repositório](/img/posts/github-ssh-repository.png)

Adicione um arquivo chamado `.gitignore` na raiz da sua aplicação e coloque a seguinte linha para que o codigo das dependencias do projeto não seja versionado:

```
node_modules
```

E por último rode os seguintes comandos na pasta do seu projeto:

```shell
git init
git add .
git commit -m "Initial commit"
git remote add origin "<coloque-aqui-o-link-ssh-do-seu-repositorio>"
git push origin master
```
*Para que esses comandos funcionem você deve ter instalado Git e com suas credenciais do Github configuradas.*

### 5º Passo - Configurar o TravisCI para seu repositório

Agora vamos configurar o TravisCI para acessar nosso repositório, para fazer isso basta logar no site [https://travis-ci.org/](https://travis-ci.org/){:target="_blank"} com sua conta do Github e liberar o acesso ao seu projeto, como mostra a figura abaixo:

![Habilitar TravisCI no seu repositório](/img/posts/enable-travis-repository.png)

Depois disso vamos adicionar o arquivo `.travis.yml` na raiz do nosso projeto para começar a configurar nosso pipeline e adicionar essas linhas no arquivo:

```yml
language: node_js
node_js:
  - "7"
```

Agora é só enviar esse arquivo para o repositório no Github com os seguintes comandos:

```shell
git add .travis.yml
git commit -m "Add file travis.yml to configure pipeline"
git push origin master
```

Assim que você executar o ultimo comando o TravisCI já vai rodar os testes automatizados e se tudo estiver certo, vai exibir um resultado como esse: 

![Build passando no TravisCI](/img/posts/travis-build-passed.png)

Agora só falta hospedar nosso código no heroku para simular um ambiente de produção, bora lá?

### 6º Passo - Fazer deploy para o Heroku

A primeira coisa a fazer é criar um app no Heroku no botão *New* e dar um nome pra ele:

![Criar app no Heroku](/img/posts/heroku-new-app.png)

Com o app criado, você precisa agora da API Key da sua conta, para encontrar ela basta clicar no seu avatar, depois em Account settings, procurar a API Key e clicar em Revel:

![API Key Heroku](/img/posts/heroku-api-key.png)

Copie essa API Key porque agora vamos colocar ela no arquivo `.travis.yml` para fazer nosso deploy inserindo as linhas abaixo:

```yml
language: node_js
node_js:
  - "7"
deploy:
  provider: heroku
  api_key: <coloque-aqui-sua-API-Key-do-heroku>
  app: <coloque-aqui-o-nome-da-app-do-heroku>
```

Não é recomendado você colocar sua API Key fixada no código porque é uma falha de segurança, mas vamos fazer agora para aprendizado, o ideal seria colocar isso nas variáveis de ambiente.

Adicionadas essas linhas no `.travis.yml` basta subirmos essas alterações novamente para o repositório do Github rodando os seguintes comandos:

```shell
git add .travis.yml
git commit -m "Add heroku configuration to .travis.yml"
git push origin master
```

Logo que rodarmos o último comando o TravisCI já vai começar a executar o pipeline, rodando os testes unitários e se todos passarem vai agora fazer deploy para o heroku.

![Deploy do TravisCI para o Heroku](/img/posts/travis-deploy-heroku.png)

Terminamos!

Temos uma API em produção com um CI configurado, vamos testar?

Gosto de usar o [Postman](https://www.getpostman.com/apps){:target="_blank"} para enviar requests e testar minhas API's, olha como ficou:

![Request feita no Postman](/img/posts/postman-request.png)

Tudo certo, funcionando, mas acho que faltou eu falar sobre como forçar os desenvolvedores a manter a cobertura de testes da aplicação, certo?

### 7º Passo - Validar a cobertura de testes

É bem simples validar a cobertura de testes com o Jest, basta incluirmos algumas linhas no arquivo `package.json` que são as seguintes:

```json
"scripts": {
  "test": "jest --coverage",
  "start": "node server"
},
"jest": {
  "coverageThreshold": {
    "global": {
      "branches": 100,
      "functions": 100,
      "lines": 100,
      "statements": 100
    }
  }
}
```
Pronto, agora todos os desenvolvedores vão ter que manter 100% de cobertura de testes nessa aplicação, esse valor é bem alto para projetos do mundo real, mas creio que acima de 85% é um valor aceitável.

Rodando o comando `npm test` novamente vemos que agora ele está exibindo as porcentagens de cobertura de testes e validando se as mesmas estão sendo atendidas:

![Cobertura de 100% nos testes](/img/posts/jest-coverage-100.png)

Bom é isso, esse foi um post mais mão na massa pra mostrar que agente sabe programar além de escrever! rs

Teve alguma dificuldade pra aplicar os 7 passos, deixe ai nos comentários que agente te ajuda.

O código da aplicação que utilizamos nesse post está nesse [repositório do Github](https://github.com/mindsetboaspraticas/ci-config-sample){:target="_blank"}, se tiver alguma dúvida é só acessar o gabarito!

Um abraço e até o próximo post!