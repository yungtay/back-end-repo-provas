# Repo Provas

Uma aplicação pras pessoas compartilharem as provas que tiverem de forma anônima, dessa forma, as futuras gerações de estudantes podem ter uma noção melhor das provas

Teste aqui: https://back-end-repo-provas.herokuapp.com/


## Sobre

Esta é uma aplicação onde o usuário, de forma anônima, irá poder tanto acessar provas de professores/matérias desejadas, quanto adicionar uma nova prova. Na aplicação estão implementadas as funcionalidades de:

- Procurar provas por professor
- Procurar provas por matérias
- Adicionar uma nova prova

Dessa forma, o aplicativo proporciona a melhor percepção do usuário sobre o seu próprio progresso, incentivando e parabenizando-o

## Tecnologias

- Cors
- Dotenv
- Express
- Joi
- Pg
- Reflect-Metadata
- Typeorm

## Como rodar

1. Clonar este repositório

2. Instalar dependências
>`npm i`

3. Criar um banco de dados
```
sudo su postgres
psql postgres
CREATE DATABASE nome_database
```

4. Inserir as informações do banco de dados do arquivo .env
>`DATABASE_URL=postgres://postgres:PASSWORD@localhost:5432/nome_database`

Onde o PASSWORD é a senha configurada no seu Postgres e nome_database o nome do banco de dados criado no passo 3.

5. Rodar as migrações do Typeorm
>`npm run build`
>`npm run typeorm migration: run`

6. Rodar o back-end
>`npm run dev`

7. Configure o [front-end](https://github.com/yungtay/front-end-repo-provas) do projeto

