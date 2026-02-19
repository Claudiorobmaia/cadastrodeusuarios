# 🚀 Sistema de Cadastro de Usuários — Aplicação Full Stack

Este projeto consiste no desenvolvimento de uma aplicação Full Stack para cadastro, listagem e exclusão de usuários, com integração completa entre frontend e backend, utilizando tecnologias modernas do ecossistema JavaScript.

O objetivo principal foi consolidar fundamentos de arquitetura cliente-servidor, organização de código, consumo de API REST e persistência de dados em banco NoSQL.

---

# 📌 1. Objetivo do Projeto

Desenvolver uma aplicação web completa que permita:

- Criar usuários
- Listar usuários cadastrados
- Excluir usuários
- Integrar frontend e backend de forma estruturada
- Persistir dados em banco de dados remoto

O projeto demonstra domínio dos conceitos fundamentais de desenvolvimento Full Stack.

---

# 🖥️ 2. Frontend

## 2.1 Tecnologias Utilizadas

- React.js
- Vite
- JavaScript (ES6+)
- Styled-components
- Axios
- React Router DOM

---

## 2.2 Estrutura do Projeto (Frontend)

```
src/
 ├── assets/
 ├── components/
 │    └── Button/
 ├── pages/
 │    ├── Home/
 │    └── ListUsers/
 ├── routes.jsx
 └── main.jsx
```

A estrutura foi organizada por responsabilidade, separando páginas, componentes reutilizáveis e arquivos de roteamento.

---

## 2.3 Funcionalidades Implementadas no Frontend

### ✅ Cadastro de Usuário

- Criação de formulário controlado utilizando `useState`
- Captura de dados de entrada (nome, email, idade)
- Envio de requisição HTTP via Axios
- Comunicação com API REST

### ✅ Listagem de Usuários

- Consumo da rota GET do backend
- Renderização dinâmica com `.map()`
- Atualização automática da interface

### ✅ Exclusão de Usuários

- Disparo de requisição DELETE
- Atualização da interface após remoção

---

## 2.4 Conceitos Aplicados

- Componentes funcionais
- Hooks (`useState`, `useEffect`)
- Arquitetura modular
- Comunicação cliente-servidor
- Organização escalável de projeto

---

# 🖥️ 3. Backend

## 3.1 Tecnologias Utilizadas

- Node.js
- Express
- Prisma ORM
- MongoDB Atlas
- CORS
- Nodemon

---

## 3.2 Estrutura do Backend

O backend foi estruturado para:

- Inicialização do servidor
- Definição de rotas
- Conexão com banco de dados
- Manipulação de requisições HTTP
- Persistência de dados via ORM

---

## 3.3 Funcionalidades Implementadas no Backend

### ✅ Criação de Usuário (POST)

- Recebimento de dados via JSON
- Validação básica
- Persistência no banco MongoDB através do Prisma

### ✅ Listagem de Usuários (GET)

- Consulta ao banco de dados
- Retorno estruturado em JSON

### ✅ Exclusão de Usuários (DELETE)

- Identificação por ID
- Remoção do registro no banco

---

## 3.4 Modelagem de Dados (Prisma)

```prisma
model User {
  id    String  @id @default(auto()) @map("_id") @db.ObjectId
  name  String
  email String
  age   Int
}
```

A modelagem foi realizada utilizando Prisma ORM conectado ao MongoDB Atlas, garantindo organização e tipagem estruturada.

---

# 🔗 4. Integração Frontend ↔ Backend

A comunicação entre as camadas ocorre via HTTP.

Fluxo da aplicação:

1. Usuário preenche o formulário
2. React envia requisição via Axios
3. Backend recebe os dados
4. Prisma realiza operação no MongoDB
5. Backend retorna resposta em JSON
6. Frontend atualiza a interface dinamicamente

Essa arquitetura demonstra entendimento claro de separação de responsabilidades entre camadas.

---

# 🌐 5. Deploy

O backend foi publicado utilizando a plataforma Render, demonstrando conhecimento básico de deploy em ambiente de produção e configuração de variáveis de ambiente.

---

# 🎯 6. Competências Demonstradas

- Desenvolvimento Full Stack
- Integração de API REST
- Manipulação de estado no React
- Organização e modularização de código
- Persistência de dados em banco NoSQL
- Utilização de ORM (Prisma)
- Versionamento com Git e GitHub
- Publicação em ambiente de produção

---

# 🚀 7. Próximas Evoluções Planejadas

- Implementação de upload de imagens
- Validações mais robustas
- Tratamento de erros aprimorado
- Melhorias de UX/UI
- Deploy completo (Frontend + Backend)

---

# 👨‍💻 8. Autor

Claudio Maia  
Desenvolvedor em transição de carreira com foco em aplicações Full Stack modernas, buscando oportunidades para aplicar conhecimentos técnicos na construção de soluções escaláveis e orientadas a resultados.
