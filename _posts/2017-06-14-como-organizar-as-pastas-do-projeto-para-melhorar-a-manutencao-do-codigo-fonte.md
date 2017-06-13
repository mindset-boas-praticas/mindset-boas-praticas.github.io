---
layout: post
title: "Como organizar as pastas do seu projeto para melhorar a manutenção do código-fonte"
meta-description: "Quem já trabalhou com um código-fonte grande com certeza já sofreu do que eu chamo de 'rolagem frenética' que acontece quando o programador precisa rolar o mouse diversas vezes para encontrar os arquivos que ele precisa alterar para corrigir um bug ou desenvolver uma nova funcionalidade"
bigimg: /img/posts/writing-code.jpg
author: Thomas Alvarenga
date: 2017-06-14 08:00:00
code-hightlight: true
---

Quem já trabalhou com um código-fonte grande com certeza já sofreu do que eu chamo de **"rolagem frenética"** que acontece quando o programador precisa rolar o mouse diversas vezes para encontrar os arquivos que ele precisa alterar para corrigir um bug ou desenvolver uma nova funcionalidade.

Meu objetivo com esse post é simplificar a estrutura de pastas da sua aplicação para que você sofra cada vez menos desse mal, mas para isso eu tenho que quebrar alguns paradigmas na sua maneira de desenvolver.

Por isso, antes ter algum pré-conceito, leia esse texto até o final com a mente aberta, tire suas próprias conclusões e deixe sua opinião nos comentários, será um prazer debater sobre esse assunto com você.

> A mente que se abre a uma nova ideia jamais voltará ao seu tamanho original - Albert Einstein

Antes de te mostrar a solução, preciso que você entenda melhor o problema que existe na estrutura de pastas que maioria dos projetos de software utiliza.

### O problema da má organização do código-fonte

Nós como desenvolvedores temos a tendência de seguir um padrão de pastas sugerido pelos frameworks ou bibliotecas que utilizamos, e essa divisão normalmente é baseada nos tipos de arquivos.

Um estrutura bem comum é a MVC onde os arquivos são separados em Models, Views e Controllers:

```
/meu-projeto
    /controllers
        product.xx
        client.xx
        orders.xx
        ...
    /models
        product.xx
        client.xx
        orders.xx
        ...
    /views
        product.xx
        client.xx
        orders.xx
        ...
```

O problema dessa estrutura é que a quantidade de arquivos dentro das pastas model, controller e view tende ao infinito, quanto mais a aplicação cresce, mais os arquivos relacionados ficam longe um dos outros.

Por exemplo, há uma relação óbvia entre todos os arquivos que lidam com o produto, que são a controller, a model e a view **product**. Sendo assim, quando eu precisar fazer qualquer alteração na entidade produto eu vou ter que abrir cada uma destas pastas e procurar pelo arquivo product.xx

Isso se agrava mais quando a aplicação possui testes unitários para cada um desses arquivos, pois serão mais pastas para abrir e procurar pelo product_spec.xx de cada tipo.

```
/meu-projeto
    /controllers
        product.xx
        ...
    /models
        product.xx
        ...
    /views
        product.xx
        ...
    /specs
        /controllers
            product_spec.xx
            ...
        /models
            product_spec.xx
            ...
        /views
            product_spec.xx
            ...
```

Já deu pra perceber que isso é uma má ideia né?

Ainda não? Vamos ver outro exemplo então, um que está na moda no desenvolvimento front-end hoje em dia, a estrutura de components, utilizadas nos frameworks React, VueJS, entre outros.

A forma de organizar as pastas segue o mesmo princípio do exemplo anterior, que é separar os arquivos por seu tipo, a única mudança são os tipos utilizados.

```
/meu-projeto-front-end
    /assets
        /images
            logo.png
            ...
        /scss
            main.scss
            _product.scss
            ...
    /components
        /product
            Index.vue
            Button.vue
            List.vue
        /client
            Index.vue
            Button.vue
            List.vue
            ...
```

Mais uma vez, quando eu precisar dar manutenção na entidade produto, vou ter que caçar todas os arquivos relacionados que precisam ser alterados, lembrando que essa estrutura tende ao infinito igual ao MVC e piora se tiver testes unitários.

Além disso, muitos projetos que utilizam esses frameworks, adicionam libs para gerenciamento do estado da aplicação, que é a arquitetura flux, por exemplo, Redux para React ou Vuex para VueJS.

A arquitetura flux adiciona ainda mais tipos de arquivos na estrutura e consequentemente mais pastas para armazenar esses novos tipos, o que deixa os arquivos relacionados ainda mais distantes.

```
/meu-projeto-front-end
    /assets
        ...
    /components
        /product
            Index.vue
            Button.vue
            List.vue
        /client
            Index.vue
            Button.vue
            List.vue
            ...
    /store
        /product
            actions.js
            mutations.js
            getters.js
            ...
        /client
            actions.js
            mutations.js
            getters.js
            ...
```

Agora imagina se criarmos testes unitários para cada um destes arquivos? Nem vou colocar um exemplo aqui porque vai ficar gigantesco.

Perceba que eu não estou falando mal dessas tecnologias e nem dessas arquiteturas, eu gosto muito de trabalhar com elas e particularmente sou um grande fã de VueJS + Vuex. 

O que eu estou confrontando aqui é a estrutura de pastas sugerida como padrão para esses frameworks e arquiteturas, porque conforme o projeto cresce, você começa a gastar muito tempo apenas para procurar os arquivos que precisa alterar.

No começo do projeto, nós achamos que o nosso software será sempre pequeno, que nunca vai crescer e por isso não damos a devida atenção a uma organização de pastas escalável a longo prazo.

Alguns podem dizer que eu não sei usar o editor de texto direito, que basta pressionar **[Ctrl]** + **[P]** e digitar o nome do arquivo, mas existe uma solução melhor que essa, com menos ações e mais eficaz.

### A solução para a má organização do código-fonte

A solução para esse problema é muito simples, mas requer uma mudança de mentalidade do desenvolvedor, pois estamos doutrinados na estrutura padrão do framework ou da arquitetura.

Para resolver isso basta diminuir a distância entre os arquivos relacionados, juntando os mesmos em uma só pasta, onde todos estarão próximos e não serão dificeis de serem encontrados.

Os arquivos de testes unitários também devem estar nessa mesma pasta, pois sempre que alterar um código você vai precisar alterar os testes.

Sendo assim, vamos ver como fica essa solução na arquitetura MVC:

```
/meu-projeto
    /product
        controller.xx
        controller_spec.xx
        model.xx
        model_spec.xx
        view.xx
        view_spec.xx
        ...
    /client
        controller.xx
        controller_spec.xx
        model.xx
        model_spec.xx
        view.xx
        view_spec.xx
        ...
```

E agora para a estrutura front-end de components com a arquitetura flux:

```
/meu-projeto-front-end
    /product
        /components
            _product.scss
            Index.vue
            Index.spec.vue
            Button.vue
            Button.spec.vue
            List.vue
            List.spec.vue
        actions.js
        actions.spec.js
        mutations.js
        mutations.spec.js
        getters.js
        getters.spec.js
    ...
```

Percebe como tudo fica mais próximo e organizado?

Com essa solução, você vai diminuir drasticamente a quantidade de vezes que você rola o mouse ou que procura os arquivos com **[Ctrl]** + **[P]**.

Isso acontece porque nosso cérebro não é capaz de armazenar grandes porções de lógica por muito tempo na nossa memória, ou seja, quanto menor a estrutura lógica, mais fácil e rápido ela será compreendia pela nossa mente.

Você deve ter percebido isso quando está começando um novo projeto e parece que tem toda a estrutura guardada no seu cérebro, mas basta essa aplicação crescer um pouco e já fica difícil lembrar detalhes de cada parte.

Nós sempre estamos trabalhando para corrigir um bug ou para criar uma nova funcionalidade, e esse trabalho deve ser executado em apenas um lugar do código, que seria uma pasta com os arquivos daquela parte que precisa ser alterada.

Essa pasta pode concentrar arquivos de uma entidade da aplicação como **product** ou de uma funcionalidade como **addProducts**, isso pode variar em cada projeto.

Não importa o quanto o projeto vai crescer, essas pastas específicas continuarão sempre pequenas, porque são funcionalidades únicas e sofrerão pequenas alterações.

Se uma pasta dessas começar a ficar grande, com uns 10 arquivos ou mais, então é hora de dividir em duas ou mais pastas, para continuar com pequenas porções de lógica em cada uma.

### Dúvidas e dificuldades comuns ao aplicar essa estrutura

Uma dificuldade que você pode encontrar é que alguns frameworks são muito rígidos quanto a estrutura de pastas padrão e não permitem configuração sobre isso. Nesse caso a única solução seria mudar o framework utilizado, se valer a pena pra você e para sua equipe.

Quando eu falo sobre isso com as pessoas que trabalho, a primeira pergunta que me fazem é a seguinte: *E se eu precisar usar um arquivo em mais de um lugar? Onde eu coloco ele?*

Para resolver isso, eu crio uma pasta chamada **general**, separada das pastas de cada funcionalidade, para concentrar todos os arquivos que são utilizados em mais de um lugar, assim eu evito a repetição de código.

Se você reconhecer que o projeto que está trabalhando sofre desse mal, o ideal é alterar a estrutura de pastas aos poucos, aplique em uma funcionalidade, verifique se nada quebrou, depois aplique em outra, e assim vai até mudar em toda a aplicação.

Agora eu quero ouvir de você! Já sofreu de "rolagem frenética"? Tem ainda alguma dúvida sobre o assunto? Escreva ai nos comentários que eu respondo a todos.

Um grande abraço e até o próximo post!