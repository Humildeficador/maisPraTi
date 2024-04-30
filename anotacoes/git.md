# Fazendo o primeiro commit & push

Quando iniciamos um repositório remoto no GitHub, geralmente ele vem com a branch principal como 'main'. Sabendo disso, podemos:

1. **Definir a branch local principal como main.**

## Definindo a branch local como main

Para fazer isso, devemos alterar as configurações padrões do GitBash.

Por padrão, o GitBash inicia o repositório com a branch master como padrão, mas podemos mudar isso na configuração: `init.defaultBranch`.

Utilizando o comando: `git config --global --list`, ele nos retornará todas as configurações globais do seu GitBash.

Podemos então executar: `git config init.defaultBranch main`, para definir a branch padrão ao iniciar um repositório local git.

Agora, ao executarmos: `git config --global --list`, veremos que nossa branch padrão foi alterada.

## Criando um repositório local

Para criarmos um repositório local, devemos primeiramente criar uma pasta que alocará os arquivos do nosso projeto.

Dentro dela, usando o GitBash (ou o terminal de sua preferência), executaremos o comando: `git init`.

Isso fará com que o Git crie os arquivos de configuração dentro da sua pasta.

Utilizaremos então: `git status`, para verificar se estamos na branch correta. Se foi configurada a branch padrão como main, deverá exibir: **'On branch main'**.

## Criando um repositório remoto

Agora devemos criar um repositório remoto. Basta acessar seu GitHub, entrar na página "Seus Repositórios" e clicar em "New".

## Vinculando o repositório local com o remoto

Agora deveremos informar a qual repositório remoto nosso repositório local está vinculado.

Executaremos o comando: `git remote add origin URL_DO_REPOSITORIO_REMOTO`.

## Primeiro pull

Faremos agora nosso primeiro pull para sincronizarmos com os arquivos que possam ser criados automaticamente pelo GitHub. Executaremos: `git pull origin main`.

## Primeiro commit

Para o nosso primeiro commit, dentro da nossa pasta criaremos um arquivo **'primeiro-commit.txt'** contendo dentro dele apenas: _'Meu primeiro commit'_.

Agora verificaremos o status do nosso repositório local: `git status`. Isso nos mostrará quais arquivos não foram rastreados ainda.

Agora vamos usar: `git add .`, isso rastreará os arquivos para serem comitados. Ao usarmos `git status` novamente, veremos que nos retorna: **'Changes to be committed'**, indicando que está pronto para realizar um commit.

Finalmente, podemos realizar nosso commit, executaremos então `git commit -m "Meu primeiro commit"`.

## Primeiro push

Agora, com tudo preparado, podemos enviar os nossos arquivos do repositório local para o repositório remoto usando: `git push origin main`. Isso enviará seus commits locais para a branch "main" do seu repositório remoto no GitHub.

Lembre-se de verificar o GitHub após o push para confirmar que seus arquivos foram enviados corretamente. Você pode visualizar suas alterações e colaborar com outras pessoas no seu projeto através do GitHub.

---
Este README.md foi criado para orientar sobre os primeiros passos ao iniciar um repositório local e enviá-lo para um repositório remoto no GitHub.
