# Desenvolvimento de API Completa com Prisma

## Descrição do Projeto

Este projeto é uma API RESTful desenvolvida com **Node.js**, **Express** e **Prisma ORM**. Ele implementa operações CRUD (Create, Read, Update, Delete) para gerenciar eventos, utilizando um banco de dados SQLite para persistência de dados.

## Contexto do Projeto

Uma startup de tecnologia está desenvolvendo um aplicativo para gerenciar eventos e workshops de programação. Para isso, precisam de um sistema backend robusto que permita o cadastro, consulta, atualização e remoção de eventos tecnológicos. A solução deve ser escalável e de fácil manutenção, utilizando tecnologias modernas como Node.js, Express e Prisma ORM.

---

## Tecnologias Utilizadas

- **Node.js**: Plataforma para execução de código JavaScript no backend.
- **Express**: Framework para criação de APIs RESTful.
- **Prisma ORM**: Ferramenta para modelagem e manipulação de banco de dados.
- **SQLite**: Banco de dados leve e embutido para desenvolvimento local.
- **Thunder Client**: Ferramenta para testar endpoints da API.

---

## Funcionalidades

- **Gerenciamento de Eventos**:
  - Criar um novo evento
  - Listar todos os eventos
  - Buscar um evento por ID
  - Atualizar um evento
  - Deletar um evento

---

## Instalação e Configuração

### 1. Pré-requisitos

- Node.js instalado (versão 14 ou superior)
- Gerenciador de pacotes `npm` ou `yarn`

### 2. Clonar o Repositório

git clone https://github.com/MatheusCouto8/desenvolvimento-api-completa.git
cd seu-repositorio

### 3. Instalar Dependências

npm install

### 4. Configurar o Banco De Dados

Crie um arquivo .env na raiz do projeto com a seguinte configuração:

 DATABASE_URL="file:./dev.db"

### 5. Inicializar o Prisma 

npx prisma migrate dev --name init
npx prisma generate

--

## Endpoints da API

### Base URL

```
http://localhost:4000
```

### Endpoints Disponíveis

#### 1. **Listar todos os eventos**

- **Método**: `GET`
- **URL**: `/eventos`
- **Descrição**: Retorna todos os eventos cadastrados.
- **Exemplo de Resposta**:
  ```json
  [
    {
      "id": 1,
      "title": "Tech Conference 2025",
      "description": "Uma conferência sobre tecnologia.",
      "date": "2025-05-20T10:00:00.000Z",
      "location": "São Paulo Expo",
      "capacity": 500,
      "category": "Tecnologia",
      "price": 150.0
    }
  ]
  ```

---

#### 2. **Buscar evento por ID**

- **Método**: `GET`
- **URL**: `/eventos/:id`
- **Descrição**: Retorna os detalhes de um evento específico.
- **Parâmetros**:
  - `id` (obrigatório): ID do evento a ser buscado.
- **Exemplo de Resposta**:
  ```json
  {
    "id": 1,
    "title": "Tech Conference 2025",
    "description": "Uma conferência sobre tecnologia.",
    "date": "2025-05-20T10:00:00.000Z",
    "location": "São Paulo Expo",
    "capacity": 500,
    "category": "Tecnologia",
    "price": 150.0
  }
  ```

---

#### 3. **Criar um novo evento**

- **Método**: `POST`
- **URL**: `/eventos`
- **Descrição**: Cria um novo evento.
- **Corpo da Requisição**:
  ```json
  {
    "title": "Workshop de Fotografia",
    "description": "Aprenda técnicas avançadas de fotografia.",
    "date": "2025-06-15T14:00:00.000Z",
    "location": "Centro Cultural RJ",
    "capacity": 50,
    "category": "Arte",
    "price": 75.0
  }
  ```
- **Exemplo de Resposta**:
  ```json
  {
    "id": 2,
    "title": "Workshop de Fotografia",
    "description": "Aprenda técnicas avançadas de fotografia.",
    "date": "2025-06-15T14:00:00.000Z",
    "location": "Centro Cultural RJ",
    "capacity": 50,
    "category": "Arte",
    "price": 75.0
  }
  ```

---

#### 4. **Atualizar um evento**

- **Método**: `PUT`
- **URL**: `/eventos/:id`
- **Descrição**: Atualiza os dados de um evento existente.
- **Parâmetros**:
  - `id` (obrigatório): ID do evento a ser atualizado.
- **Corpo da Requisição** (envie apenas os campos que deseja atualizar):
  ```json
  {
    "title": "Novo Título do Evento"
  }
  ```
- **Exemplo de Resposta**:
  ```json
  {
    "id": 1,
    "title": "Novo Título do Evento",
    "description": "Uma conferência sobre tecnologia.",
    "date": "2025-05-20T10:00:00.000Z",
    "location": "São Paulo Expo",
    "capacity": 500,
    "category": "Tecnologia",
    "price": 150.0
  }
  ```

---

#### 5. **Deletar um evento**

- **Método**: `DELETE`
- **URL**: `/eventos/:id`
- **Descrição**: Remove um evento do banco de dados.
- **Parâmetros**:
  - `id` (obrigatório): ID do evento a ser deletado.
- **Exemplo de Resposta**:
  - Status: `204 No Content`

## Tecnologias Utilizadas

- **Node.js**: Plataforma para execução de código JavaScript no backend, escolhida por sua alta performance e ampla comunidade.
- **Express**: Framework minimalista para criação de APIs RESTful, que facilita o desenvolvimento e a organização do código.
- **Prisma ORM**: Ferramenta moderna para modelagem e manipulação de banco de dados, que simplifica a interação com o banco de dados e oferece suporte a múltiplos provedores.
- **SQLite**: Banco de dados leve e embutido, ideal para desenvolvimento local e testes rápidos.
- **Thunder Client**: Extensão do VS Code para testar endpoints de APIs diretamente no editor.
- **JavaScript (ES6+)**: Linguagem de programação utilizada para o desenvolvimento do backend.

---

## Decisões de Design e Arquitetura

1. **Estrutura Modular**:
   - O projeto foi dividido em camadas (modelos, controladores e rotas) para facilitar a manutenção e escalabilidade.
   - Cada camada tem uma responsabilidade clara:
     - **Modelos**: Interagem diretamente com o banco de dados usando o Prisma.
     - **Controladores**: Contêm a lógica de negócios e processam as requisições.
     - **Rotas**: Definem os endpoints da API e conectam as requisições aos controladores.

2. **Prisma ORM**:
   - Escolhido por sua integração simples com Node.js e suporte a múltiplos bancos de dados.
   - Permite a geração automática de tipos e validações, reduzindo erros e aumentando a produtividade.

3. **SQLite para Desenvolvimento**:
   - Utilizado como banco de dados local devido à sua simplicidade e portabilidade.
   - Pode ser facilmente substituído por outros bancos de dados (como PostgreSQL ou MySQL) em produção.

4. **API RESTful**:
   - Segue os princípios REST para garantir uma interface consistente e fácil de usar.
   - Cada endpoint foi projetado para realizar uma operação específica (CRUD).

5. **Validação de Dados**:
   - A validação básica dos dados é realizada no controlador, garantindo que apenas informações válidas sejam enviadas ao banco de dados.

6. **Facilidade de Testes**:
   - O uso do Thunder Client permite testar rapidamente os endpoints diretamente no editor de código.
   - A estrutura modular facilita a escrita de testes unitários e de integração.

7. **Escalabilidade**:
   - A arquitetura foi projetada para ser escalável, permitindo a adição de novos recursos e endpoints sem grandes alterações no código existente.

---