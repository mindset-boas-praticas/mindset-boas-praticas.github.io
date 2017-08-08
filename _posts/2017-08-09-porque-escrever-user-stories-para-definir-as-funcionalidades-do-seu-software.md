---
layout: post
title: "Porque escrever User Stories para definir as funcionalidades do seu software?"
meta-title: "Porque escrever User Stories para definir as funcionalidades do seu software?"
meta-description: "Você já teve problemas ao escrever os requisitos do software? Quando outra pessoa vai ler parece que sempre falta algum detalhe ou não era aquilo que o usuário queria de verdade? Se você sofre com esses problemas esse post é pra você!"
bigimg: /img/posts/user-stories.png
author: Thomas Alvarenga
date: 2017-08-09 08:00:00
---

Você já teve problemas ao escrever os requisitos do software? Quando outra pessoa vai ler parece que sempre falta escrever algum detalhe ou não era aquilo que o usuário queria de verdade?

Se você está na área de software há algum tempo com certeza já passou por esses problemas, documentos gigantes com uma lista enorme de requisitos que ninguém tem coragem de ler pra no final descobrir que não era nada disso que o cliente queria.

![Documento Grande](/img/posts/documento-grande.jpg)

Isso acontece porque nós esperamos que um documento gigante vai ser o suficiente para gerar uma comunicação entre os desenvolvedores e os clientes, mas isso acaba nunca acontecendo.

É exatamente esse problema que as User Stories se propõe a resolver, mas antes precisamos definir exatamente o que é isso

## O que são User Stories?

A User Story (história de usuário) é uma frase composta de 3 partes:

1. Como um **usuario**
2. Quero **algo**
3. Para **objetivo**

Ela serve para descrever uma funcionalidade do software na visão do usuário, ou seja, sem termos técnicos, e assim dar uma visão mais clara sobre o objetivo do cliente com cada parte da aplicação.

Agora que vimos o que é uma User Story, vamos descobrir o que ela não é.

## User Stories não são requisitos de software

User Stories não são tão detalhadas como um requisito de software porque esse não é o objetivo delas.

Ao contrário dos requisitos, as Stories tem a função de estimular a comunicação entre todas as pessoas envolvidas no projeto, justamente por não serem detalhadas elas precisam de complementos que são a conversa e os critérios de aceitação.

E porque escrever User Stories para o meu projeto? Quais as vantagens?

## User Stories facilitam a comunicação

Por ser apenas uma frase, não há nenhuma dificuldade de ler e consequentemente conversar sobre cada User Story do projeto, facilitando a comunicação entre os membros da equipe e até o cliente.

As User Stories são pequenas de propósito para que a equipe converse mais e escreva menos, pois nem o maior documento do mundo poderia ter todos os detalhes de uma funcionalidade, e se for possível fazer isso ninguém vai querer ler ele todo!

Além disso, não há termos técnicos, portanto gerentes, programadores, testers e clientes conseguem "falar a mesma língua" quando conversam sobre o projeto.

Quando começamos a escrever User Stories na empresa que trabalho, percebemos muita diferença na comunicação principalmente com os testers, pois eles não eram desenvolvedores e antes tinhamos muitos termos técnicos escritos nas tarefas.

Se as pessoas reclamam de falta de comunicação nos projetos que você trabalha tente usar Histórias de Usuários ao invés de criar mais documentos detalhados.

## User Stories dão uma visão mais clara do problema do usuário

Qual a diferença das duas frases abaixo?

- Cadastrar produto no banco de dados
- Como um vendedor, quero cadastrar um produto, para disponibilizá-lo para venda na minha loja online

Parece não ter diferença se tratando de um exemplo tão simples como cadastro de produtos, mas com certeza em projetos reais isso vai trazer uma grande mudança na visão sobre o verdadeiro problema que o usuário quer resolver.

As 3 partes da User Story se complementam de uma forma que quem lê consegue se colocar na pele do usuário.

A primeira parte identifica a persona, o papel ou o tipo de usuário que precisa daquela funcionalidade, e cada um deles tem um objetivo diferente com o seu software, só nesse pequeno exemplo de loja online conseguimos identificar diversas personas:

- **Administrador:** Pessoa que cuida de toda a parte técnica da loja
- **Vendedor:** Pessoa que quer vender seus produtos na loja
- **Comprador:** Pessoa que quer comprar produtos na loja

Identificar as personas que utilizam sua aplicação é um bom exercício para se fazer antes de começar a escrever suas histórias, pois isso ajuda os desenvolvedores a entenderem os problemas que precisam resolver.

A segunda parte da Story mostra o que o usuário espera fazer no sistema para atingir o objetivo descrito na terceira parte, ou seja, como ele vai interagir com a aplicação.

Por fim, a terceira parte é o que ele realmente quer, a principal meta, o porque ele está utilizando o software.

![Histórias de Usuário](/img/posts/user-stories.png)

Consegue perceber agora a diferença entre apenas *"Cadastrar produto no banco de dados"* e sua respectiva User Story?

## User Stories estimulam desenvolvedores

Esse ponto é bem subjetivo e eu nunca vi nenhuma pessoa que seja referência no assunto falar sobre isso, mas eu e a minha equipe nos sentimos mais estimulados para trabalhar quando utilizamos User Stories ao invés de requisitos ou tasks escritas "Cadastrar produto..." como vimos no item passado.

Parece que somos apenas digitadores de código quando escrevemos tasks técnicas e parece também que o trabalho nunca tem fim, só ficamos colocando tasks em DONE pra sempre sem nenhum objetivo.

Com User Stories esse sentimento é completamente diferente, há uma sensação de "Resolvi um problema do usuário" e "Finalizei uma funcionalidade da aplicação" e isso nos estimula demais para pegar a próxima história e começar o processo novamente.

Tivemos ganhos de produtividade devido a esse estimulo e a equipe se sente mais realizada com o seu trabalho, parece muito louco isso, mas é o que a experiência nos mostra.

![Time Feliz](/img/posts/happy-team.jpg)

Enfim, já passou da hora de você começar a escrever User Stories para os projetos que trabalha, mostre esse post pra sua equipe para convencê-los a mudar e esqueça aqueles documentos gigantes de requisitos.

Nesse texto eu falei sobre os critérios de aceitação de uma User Story, nós já explicamos um pouco sobre isso no post [BDD na prática com TestCafe e Cucumber]({% post_url 2017-07-05-bdd-na-pratica-com-testcafe-e-cucumber %}){:target="_blank"}, dá uma conferida lá!

Um abraço e até o próximo post!