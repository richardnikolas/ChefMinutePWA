# Chef Minute

#### Autor: Richard Nikolas Chaves

---

Esta aplicação será voltada para o setor pessoal e gastronômico. O objetivo dela é ser um aplicativo simples e intuitivo para salvar receitas (ingredientes, descrição passo a passo, nível de dificuldade, tempo médio, etc).
Haverão funcionalidades de filtrar as receitas salvas por nome, por categoria ou por cozinha (brasileira, japonesa, etc) e também será possível favoritar receitas.

## 1. Interfaces

#### Splash Screen (Tela 1)

A _Splash Screen_ é uma tela de abertura padrão do Android, amplamente usado em apps, com o simples objetivo de mostrar/apresentar a logo da empresa ou do aplicativo em questão. Em alguns casos é mostrado também a versão do aplicativo. Também é útil para fazer algum tipo de pré-processamento antes do aplicativo abrir de fato.

#### Sign Up Screen (Tela 2)

Essa Tela de Cadastro será exibida na primeira vez que o usuário utilizar o aplicativo. Aqui são coletados alguns dados básicos do usuário que serão utilizados posteriormente no aplicativo. Os campos requeridos são: Nome, Email, Nível do Chef (amador, mediano, expert, Mestre) e Cozinha Favorita (brasileira, italiana, etc). O botão **Get started** levará o usuário para a _Home Screen_.

#### Home Screen (Tela 3)

Esta é a _Home screen_, a tela principal da aplicação.

-   Primeiramente temos uma saudação pro usuário, uma frase de introdução e um botão em forma de ícone para acessar o perfil do usuário (que ainda não foi desenvolvido).
-   Logo abaixo temos a barra de pesquisa onde será possível filtrar as receitas salvas por nome, categoria ou dificuldade.

## 2. Dados do usuário

Minha aplicação utilizará alguns dados do usuário:

-   **Nome** e **email** identificação simples e tratamento mais customizado
-   **Chef Level** para customizar o nível de dificuldade de cada receita
-   **Favorite Cuisine** para criar abas customizadas com o tipo de cozinha escolhida (e talvez recomendar receitas no futuro)
-   **Receitas** são a parte principal da aplicação. O usuário poderá criá-las com a quantidade de ingredientes e passos/direções que quiser, escolher nível de dificuldade, tempo de preparo, upar uma foto para cada receita e favoritar a receita. Tudo isso será usado para visualização das receitas na Home Screen, para diversos filtros que podem ser criados de acordo com as receitas existentes.

---

## 3. Checklist de implementação

> A aplicação é original e não uma cópia da aplicação de um colega ou de uma aplicação já existente?

Sim.

> A aplicação tem pelo menos duas interfaces (telas ou páginas) independentes?

Sim.

> A aplicação armazena e usa de forma relevante dados complexos do usuário?

Sim.

> A aplicação possui um manifesto para instalação no dispositivo do usuário?

Sim.

> A aplicação possui um service worker que permite o funcionamento off-line?

Sim.

> O código da minha aplicação possui comentários explicando cada operação?

Não. Apenas alguns comentários, o restante está bastante simples, então não achei necessário sujar o código com comentários irrelevantes.

> A aplicação está funcionando corretamente?

Sim.

> A aplicação está completa?

Não. Escolhi não fazer ela completa pela falta de recursos. Nos próximos projetos, com frameworks, a completude será bem maior.
