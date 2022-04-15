# PRIMEFLIX :movie_camera:

- Projeto criado com React JS.
- Lista filmes em cartaz consumindo a API do The Movie Database (https://www.themoviedb.org/).
- Permite ao usuário visualizar detalhes do filmes em cartaz.
- Permite ao usuário salvar uma lista personalizada de filmes que deseja assistir (Local Storage).

## :fire: Como rodar

Antes de rodar, você precisará criar uma conta e obter uma chave da API do The Movie Database.

- Clone o repositório para sua máquina.
- Na raíz do projeto, crie um arquivo .env com o conteúdo abaixo:

```env
REACT_APP_API_BASE_URL=https://api.themoviedb.org/3/
REACT_APP_API_KEY=chave da API
```

- Instale as dependências:

```shell
npm install
```

- Inicie o projeto através do comando:

```shell
npm start
```

Após seguir os passos, você deve ter a aplicação rodando na porta 3000. Acesse: http://localhost:3000/
