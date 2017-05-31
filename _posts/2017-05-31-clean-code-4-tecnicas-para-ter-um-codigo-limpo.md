---
layout: post
title: "4 técnicas infalíveis para dar bons nomes e ter um código limpo"
meta-title: "Clean Code: 4 técnicas infalíveis para dar bons nomes e ter um código limpo"
meta-description: Você já ficou travado muito tempo tentando achar um nome para aquela variável ou método? Parece algo besta, mas isso é fundamental no clean code (código limpo)
bigimg: /img/posts/words-cloud.jpg
author: Thomas Alvarenga
date: 2017-05-31 00:00:00
code-hightlight: true
---

> "Existem duas coisas muito difíceis no mundo da ciência da computação: invalidação de cache e **nomear coisas**." - Phil Karlton

Você já ficou travado muito tempo tentando achar um nome para aquela variável, método ou classe? Parece algo muito besta, mas às vezes se torna uma coisa muito difícil e se escolhermos errado, depois de um tempo sem mexer naquele projeto, você vai acabar esquecendo pra que serve aquela parte do código.

Eu já trabalhei em uma aplicação onde tinha variáveis com nome **goku** e até **pikachu**, esse código estava em produção e eu fiquei muito assustado, porque se os nomes das variáveis estavam daquele jeito, imagina o resto.

![goku](/img/posts/goku.gif)

Dar nomes corretos para cada pequena parte na sua aplicação é uma das coisas mais importantes para a manutenção, entendimento e comunicação entre todos os desenvolvedores da equipe, pois deixa o código limpo e de rápida compreensão.

Sendo assim, não tem como você dar nomes que não façam sentido no contexto ou que as pessoas não consigam pronunciar, porque isso vai atrapalhar a comunicação da equipe.

Nesse momento você deve estar se perguntando:

* O que eu devo fazer então?

* Será que existe uma regra ou um padrão para dar nomes quando eu estiver desenvolvendo?

* Como eu vou saber se o nome que eu estou dando será entendido pelos meus colegas de trabalho?

Existem regras e padrões que podem te ajudar a dar um bom nome e fazer com que todos entendam o sentido das variáveis, métodos e classes que você batizou.

Isso pode ser aplicado a qualquer contexto de programação, seja em nomes de arquivos, pastas, funções, constantes, módulos, gems e por ai vai.

*"Eu não acredito, isso só pode ser magia!"*

![mágica do codigo limpo](/img/posts/magic.gif)

Pode acreditar, porque agora eu vou te mostrar 4 técnicas infalíveis para você começar a dar bons nomes para tudo na sua aplicação, ter um código limpo e não ficar mais travado sem conseguir decidir como chamar cada coisa.

## 1 - Use Nomes que Revelem a Intenção

Olha só o seguinte trecho de código:

```
var t = 0; // quantidade total em estoque
```

O nome *"t"* não revela a verdadeira intenção dessa variável e nem adianta colocar um comentário porque fica pior ainda. Devemos dar nomes de modo que qualquer pessoa que ler esse código vai entender exatamente o objetivo dessa variável.

O código deve ser escrito de uma maneira que não seja necessário adicionar comentários para que as pessoas entendam, comentários não servem pra isso, mas isso é assunto para outro post.

```
var totalQuantityInStock = 0;
```

Substituindo o nome da variável de *"t"* para *"totalQuantityInStock"* fica muito mais fácil entender e dar manutenção nesse código. Eu prefiro sempre escrever os nomes em inglês, porque melhoram a compreensão do código junto com as palavras reservadas da linguagem (if, for, class e etc).

Não tenha medo de colocar nomes grandes, priorize a facilidade de compreensão ao invés de nomes pequenos.

Vamos ver outro exemplo, dessa vez um pouco mais complexo:

```
var t = 0;

for (var i = 0; i < list.length; i++) {
    t += list[i].qty;
}
```

Você consegue saber exatamente qual o objetivo desse FOR nessa parte do código?

É lógico que ele está iterando pelo array *list* e somando o atributo *qty* na variável *t*. Ok entendi, mas por que esse código está ai? Qual o contexto? Pra que serve essa iteração?

Sendo sincero, acho que todos nós já escrevemos códigos como este, mas olha a diferença que faz se apenas trocarmos alguns nomes:

```
var totalQuantityInStock = 0;

for (var i = 0; i < products.length; i++) {
    totalQuantityInStock += products[i].quantity;
}
```

Alterando apenas o nome da variável *t*, do array *list* e do atributo *qty* conseguimos entender o funcionamento desse código sem precisarmos do contexto. Está bem claro agora que essa é uma iteração que faz a soma da quantidade de todos os itens da lista de produtos.

Esse código fala por sí, não precisa de comentários para ajudar na compreensão. Esse código revela a intenção, o objetivo dele estar ali.

## 2 - Use Nomes Pronunciáveis

Tente pronunciar o nome da variável abaixo:

```
var flnm;
```

Usar nomes impronunciáveis é um erro comum entre programadores e isso é terrível porque o trabalho de desenvolvimento de software é pura comunicação, principalmente com sua equipe.

Portanto, simplesmente use nomes pronunciáveis no seu código, para se comunicar melhor com sua equipe e não ficar falando: "essa variável aqui, a éfe éle enê emê".

```
var fullName;
```

Olha como fica muito mais fácil, ninguém imaginaria que aquela variável *"flnm"* seria na verdade *"fullName"* (talvez alguns! rs), mas não fica bem melhor para pronunciar e para se comunicar desse jeito?

Não crie mais problemas para você e para quem for dar manutenção nessa aplicação, fazendo isso você será um profissional melhor e mais reconhecido.

## 3 - Use Substantivos para Classes e Verbos para Métodos

Tenho certeza que você já viu algumas classe ou módulo com nome parecido com esse:

```
class ConnectDB {}
```

Isso é claramente uma classe para comunicação com o banco de dados, porém é a classe que faz isso ou os métodos da classe?

É lógico que são os métodos, mas o nome da classe confunde a nossa mente porque possui um verbo, imagina como ficaria a utilização dessa classe?

```
var connectDB = new ConnectDB();

connectDB.connect('connectionString');
connectDB.insert('values');
```

Não fica estranho? Parece que algo está errado ou fora de lugar?

Isso é simples de resolver, basta tirar o verbo e deixar apenas o substantivo: 

```
class Database {}
```

```
var database = new Database();

database.connect('connectionString');
database.insert('values');
```

Bem melhor não? 

Nunca use um verbo para nomear uma classe, como *"Connect"*, classes são entidades que não executam nenhuma ação e podem ser confundidas com métodos se nomeadas dessa maneira. Use sempre substantivos, esse é um padrão no desenvolvimento de software.

E com os métodos o que temos que fazer é o oposto disso, porque métodos ou funções realizam uma ação e então devem ser nomeados com verbos.

```
function connection() {}
```

*"Connection"* não significa nada, não provoca nenhuma ação, portanto não deve ser usado para um método ou função, ao invés disso use o verbo *"Connect"*.

```
function connect() {}
```

É claro que esse é um exemplo bem simples para ser mais didático, mas com certeza você conseguirá aplicar em situações mais complicadas no mundo real.

## 4 - Utilize a Convenção sobre Configuração

Convenção sobre configuração é um paradigma de desenvolvimento de software que tem como objetivo diminuir a quantidade de decisões que os programadores precisam tomar quando estão desenvolvedo uma aplicação.

![what the fuck?](/img/posts/wtf.jpg)

Isso é útil para muitas coisas, como por exemplo, poupar tempo na hora de decidir nomes para cada parte da aplicação e fazer com que o sistema siga um padrão convencional de muitos outros do mundo inteiro.

O mais legal da *Convenção sobre Configuração* é que ela permite que programadores novos na empresa e que tenham conhecimento da convenção se adaptem rapidamente ao projeto.

Esse paradigma é bem comum em empresas que utilizam Ruby on Rails e Spring MVC, pois são frameworks que aplicam muito esses princípios.

Na prática, podemos citar o padrão para nomeclatura de tabelas do banco de dados, se a classe modelo chama *"Product"*, a tabela do banco deve se chamar *"products"*, no plural, pois essa é a convenção, por isso é fácil dar manutenção no projeto mesmo sem conhecê-lo a fundo.

```
class Product() {
    id: integer;
    description: string;
}
```

```
table products (
    id INTEGER NOT_NULL PRIMARY_KEY AUTO_INCREMENT,
    description VARCHAR(200) NOT_NULL
);
```

Caso algo não esteja previsto na convenção, então o desenvolvedor deve criar o padrão que achar melhor para determinada parte da aplicação, por exemplo, uma tabela no banco que ele queira armazenar os produtos em estoque poderia ter o nome *"productsInStock"*.

Então é isso, mude o seu mindset a respeito dos nomes das suas variáveis, métodos e classes, pois eles tem muita importância na manutenção da sua aplicação e na comunicação com sua equipe.

Aplique essas 4 técnicas para acabar com o sofrimento de ter que investigar o código-fonte pra descobrir o que aquela variável está fazendo ali, assim você terá um código limpo e será um programador mais feliz e realizado.

Um abraço e até o próximo post!

Referências:

* [Convention over Configuration](http://softwareengineering.vazexqi.com/files/pattern.html){:target="_blank"}

