---
layout: post
title: "Como o Flux pode facilitar a criação de testes unitários e ajudar na manutenção do seu software"
meta-title: "Como o Flux pode facilitar a criação de testes unitários e ajudar na manutenção do seu software"
meta-description: "Saiba como aplicar o principio de responsabilidade única utilizando o Flux e facilite a manutenção do seu código"
bigimg: /img/posts/flux-diagram-white-background.jpg
author: Vitor Nogueira
date: 2017-08-02 08:00:00
code-hightlight: true
---

Há duas semanas escrevi um post em resposta a uma [issue no nosso github](https://github.com/mindsetboaspraticas/mindsetboaspraticas.github.io/issues/18){:target="_blank"} e o feedback foi bem positivo :)

Ainda na mesma issue o [Felipe Luiz](https://github.com/filipeluiz){:target="_blank"} pediu para que falassemos sobre TDD com Vue, e como pedido de post no nosso repositório é uma ordem, hoje vamos falar sobre isso :)

Porém como o [objetivo desse blog é te ensinar boas práticas de desenvolvimento de software que resolvem cerca de 80% dos problemas do seu dia a dia como programador]({% link sobre.md %}) vamos utilizar o Vue (e Vuex) como a parte prática desse post.

Antes da parte prática vamos falar um pouco sobre teoria, bora lá?

## Single Responsability Principle - O "S" do SOLID

SOLID é uma sigla para os cinco primeiros princípios da [programação orientada a objetos](http://butunclebob.com/ArticleS.UncleBob.PrinciplesOfOod){:target="_blank"} identificados por Robert C. Martin, também conhecido como Uncle Bob. O "S" significa ["*Single Responsability Principle*"](https://drive.google.com/file/d/0ByOwmqah_nuGNHEtcU5OekdDMkk/view){:target="_blank"}, em português: **Princípio da Responsabilidade Única**.

O *SRP* diz que uma classe tem uma, e apenas uma, razão para existir. Uma responsabilidade no contexto de *SRP* é definido como "um motivo de mudança", logo, se você acha que uma classe tem mais de um motivo para mudar ela tem mais do que uma responsabilidade.

A seguir temos uma classe com mais de uma responsabilidade, veja:

```javascript
class Product {
  add(params) {} // Insert a product in database
  addToShoppingCart(params) {} // Add a product to shopping cart
  updateStockQuantity(params) {} // Update the stock count of the product
}
```

Essa classe tem três responsabilidades: adicionar um produto no banco de dados, adicionar um produto ao carrinho de compras e atualizar a quantidade do produto no estoque. Três responsabilidades, três motivos que você tem para alterar classe.

Se, por exemplo, você precisar adicionar alguma validação para cada método a classe ficaria cada vez maior, ficaria cada vez mais difícil de testá-la e com isso mais bugs poderiam acontecer.

Como podemos melhorar isso? Separando as responsabilidades em classes diferentes, veja:

```javascript
class Product {
  add(params) {}
}
```

```javascript
class ShoppingCart {
  addProduct(params) {}
}
```

```javascript
class Stock {
  update(params) {}
}
```

Perceba que conseguimos melhorar até o nome dos métodos com essa simples refatoração, utilizar `ShoppingCart.addProduct` no lugar de `Product.addToShoppingCart` ou `Stock.update` no lugar de `Product.updateStockQuantity` deixa o código muito mais semântico.

Esse exemplo é bem simples, mas se você aplicar esse princípio no código que você escreve vai ver que seu código ficará muito mais legível e os testes unitários vão ficar mais simples.

Podemos aplicar esse princípio também para outras coisas no desenvolvimento de software, como para o caso dos exemplos desse post, funções e componentes.

Agora vamos ver o que é o *Flux* e como podemos aplicar o *SRP* em funções.

## Flux

O Flux é uma arquitetura criada pelo Facebook para criar aplicações front-end. Muitos frameworks implementam a arquitetura MVC no lado do cliente e isso trouxe alguns problemas que o Flux consegue resolver. Um colega escreveu um [post interessante onde você pode saber mais sobre o Flux](https://medium.com/@dayvsonlima/flux-a-arquitetura-javascript-que-funciona-1197857464b8){:target="_blank"}.

No repositório do Vuex tem vários exemplos de implementação, falando nisso, nosso amigo Thomas (que também escreve aqui no blog) abriu um [PR atualizando um dos exemplos](https://github.com/vuejs/vuex/pull/890){:target="_blank"}, da uma conferida lá depois ;)

![diagrama que mostra como o flux trabalha](/img/posts/flux-diagram-white-background.jpg)

Existem várias bibliotecas que facilitam a implementação do Flux em aplicações front-end, umas das mais famosas é o [Redux](http://redux.js.org/){:target="_blank"}. Nos projetos que estou trabalhando no momento tenho utilizado o [Vuex](https://github.com/vuejs/vuex), ela é a biblioteca utilizada pelo Vue.js para gerenciar o estado da aplicação.

### Como o Vuex funciona

Peguei a imagem abaixo na [documentação do Vuex](https://vuex.vuejs.org/en/intro.html){:target="_blank"}, você pode entender facilmente como funciona o conceito do fluxo unidirecional:

![vuex](/img/posts/vuex-flow.jpg)

A **View**, que no View é representado por um componente, dispara uma **Action** que faz uma alteração no **State**, o Vue.js por sua natureza reativa *reage* a essa alteração no estado e atualiza a **View** (componente).

Quando trabalhamos com vuex organizamos o gerenciamento dos dados utilizados na aplicação em *stores* e em cada *store* por padrão trabalhamos basicamente com quatro arquivos:

- `actions.js`: é nele onde vamos escrever nossas ações que serão chamadas pelos componentes;
- `getters.js`: nesse arquivo vamos escrever as funções para retornar os valores que estão no estado da *store*;
- `mutations.js`: aqui é onde podemos definir o estado inicial da store e criamos as funções que vão alterar o estado da *store*;
- `types.js`: nesse arquivo escrevemos os nomes das *mutations*;

![vuex](/img/posts/vuex.jpg)

## Na prática

Como aplicação de exemplo vamos criar uma listagem simples de usuários, o resultado será isso aqui:

![listagem de usuários utilizando vue e vuex](/img/posts/simple-vuex-application.jpg)

Para simular uma rota que retorne uma listagem de usuários utilizamos um serviço chamado [JSONPlaceholder](https://jsonplaceholder.typicode.com/){:target="_blank"}, ele é uma API fake que você pode utilizar para teste e prototipação.

Lembra dos arquivos que utilizamos para criação de uma *store*? Vamos começar com o teste do nosso `getter.js`:

```javascript
import getters from './getters';

describe('store user getters', () => {
  let state;

  beforeEach(() => {
    state = {
      list: [
        { name: 'Vitor Nogueira', website: 'http://mindsetboaspraticas.com.br', phone: 123456 },
        { name: 'Thomas Alvarenga', website: 'http://mindsetboaspraticas.com.br', phone: 654321 },
      ],
    };
  });

  describe('list', () => {
    it('return the user list in state', () => {
      expect(getters.list(state)).toEqual(state.list);
    });
  });
});
```

Simulamos uma lista no estado da aplicação, passamos esse lista para o método `list` e para testar esperamos que ele retorne a lista definida no estado. 20 linhas, muito simples né? Essa simplicidade nos testes é explicada pela simplicidade do método que testamos, saca só:

```javascript
const getters = {};

getters.list = state => state.list;

export default getters;
```

O método está na linha 3, ele usa uma funcionalidade do ES6 chamada arrow function, caso você não conheça, veja como ficaria quando escrevemos no formato de uma função normal:

```javascript
function list(state) {
    return state.list;
}
```

Nosso método `list` só tem uma responsabilidade: retornar a lista de usuários do estado. Isso faz com que o método fique simples, facilita o teste e melhora a manutenção do código.

Agora vamos para nosso teste do arquivo `mutations.js`:

```javascript
import { mutations } from './mutations';

describe('store user mutations', () => {
  let state;
  let list;

  beforeEach(() => {
    state = {
      list: [],
    };

    list = [
      { name: 'Vitor Nogueira', website: 'http://mindsetboaspraticas.com.br', phone: 123456 },
      { name: 'Thomas Alvarenga', website: 'http://mindsetboaspraticas.com.br', phone: 654321 },
    ];
  });

  describe('SET_LIST', () => {
    it('set the user list in state', () => {
      mutations.SET_LIST(state, list);

      expect(state.list).toEqual(list);
    });
  });
});
```

Muito simples também: simulamos o estado inicial (uma lista vazia) e criamos uma lista para atualizar o estado, veja como nosso arquivo também é bem pequeno e o método `SET_LIST` tem apenas uma responsabilidade também:

```javascript
import types from './types';

export const state = {
  list: [],
};

export const mutations = {
  [types.SET_LIST](state, list) {
    state.list = list;
  },
};
```

Nesse arquivo temos o estado inicial da aplicação e nosso método `SET_LIST`, perceba que ele também tem apenas uma responsabilidade: adicionar a lista passada como parametro para o estado.

Vamos ver agora como ficou o teste do nosso arquivo `actions.js` (esse é um pouco maior):

```javascript
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import actions from './actions';

describe('store user actions', () => {
  let mock;
  let commit;

  beforeEach(() => {
    mock = new MockAdapter(axios);

    commit = jest.fn();
  });

  describe('getList', () => {
    let response;

    beforeEach(() => {
      response = [
        { name: 'Vitor Nogueira', website: 'http://mindsetboaspraticas.com.br', phone: 123456 },
        { name: 'Thomas Alvarenga', website: 'http://mindsetboaspraticas.com.br', phone: 654321 },
      ];
    });

    it('call commit with users list', (done) => {
      mock.onGet('https://jsonplaceholder.typicode.com/users').reply(200, response);

      actions.getList({ commit }).then(() => {
        expect(commit).toHaveBeenCalledWith('SET_LIST', response);
        done();
      });
    });
  });
});
```

Esse teste ficou um pouco maior por que testamos a requisição para a API, como usei uma biblioteca chamada axios para realizar as requisições, vamos utilizar um módulo chamado axios-mock-adapter para simulá-las. Mesmo esse teste ficando um pouco maior, veja como nosso arquivo `actions.js` é bem simples e o método `getList` só tem uma responsabilidade:

```javascript
import axios from 'axios';
import types from './types';

const actions = {};

actions.getList = ({ commit }) => axios.get('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    commit(types.SET_LIST, response.data);
  });

export default actions;
```

Por fim, vamos testar nosso arquivo `types.js`, ele é o mais simples de todos pois ele exporta apenas um objeto com `strings` utilizadas para nomear as *mutations*:

```javascript
import types from './types';

describe('store user types', () => {
  it('SET_LIST', () => {
    expect(types.SET_LIST).toEqual('SET_LIST');
  });
});
```

Ao rodar os testes temos o seguinte resultado:

![resuldo dos testes da aplicação utilizando vue e vuex](/img/posts/simple-vuex-application-test-report.jpg)

Todos os testes passando, 100% de cobertura e de quebra o lint validando o padrão de escrita do código ;)

Você pode ver e baixar o código fonte dessa aplicação nesse repositório: [https://github.com/mindsetboaspraticas/simple-vuex-app](https://github.com/mindsetboaspraticas/simple-vuex-app){:target="_blank"}

---

Nos projetos que trabalho não tenho validado os input de dados para os métodos, como por exemplo, validar se a lista passada para a *mutation* atualizar a lista de usuários no estado é uma lista válida. Como trabalho com o front-end separado do back-end espero que a API entregue o valor que esperamos para a aplicação cliente.

Como eu e minha equipe também testamos de forma unitária a API garantimos a entrega correta dos dados. Trabalhar com uma equipe multifuncional e ter boa comunicação é extremamente importante para que isso funcione bem, pois nesses casos é essencial que todos estejam por dentro de como a aplicação funciona de ponta a ponta.

Mas os testes unitários são apenas a base da pirâmide de testes:

![pirâmide de testes](/img/posts/test-pyramid.png)

Testes para validar o funcionamento completo da aplicação também são importantes, testar apenas de forma unitária pode não garantir o funcionamento da aplicação quando integramos todas as partes envolvidas.

![Testes Unitários VS Testes de Integração](/img/posts/unit-vs-integration-test.gif)

Nessa aplicação que utilizamos como exemplo é bem simples mas serve justamente para mostrar a simplicidade que o Flux e a utilização do vuex proporciona, conforme o projeto começa a crescer nossas actions, mutations e getters também crescem, mas se você seguir o SRP para seus métodos, ter uma [boa organização de pastas e arquivos]({% post_url 2017-06-14-como-organizar-as-pastas-do-projeto-para-melhorar-a-manutencao-do-codigo-fonte %}){:target="_blank"} nos seus projetos e uma boa cobertura de testes, a manutenção do código ficará muito mais fácil e a chance de aparecer um bug será cada vez menor.

Até o próximo post :)