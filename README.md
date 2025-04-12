[🇬🇧 English](#todo-app-english) | [🇧🇷 Português](#todo-app-português)To-Do API English


## Todo App English

A simple RESTful API for a To-Do list built with Node.js.

📌 Features

Create a new task

List all tasks

Update the title and/or description of a task

Delete a task

    Mark a task as completed or not

🚀 Technologies Used

🔧 API Routes

GET /tasks

    Lists all tasks

POST /task

    Creates a new task
    Body: { "title": "Task Title", "description": "Optional Description" }

PUT /tasks/:id

    Updates the title and/or description of a task
    Body: { "title": "New Title", "description": "New Description" }

PATCH /tasks/:id

    Toggles task completion status

DELETE /tasks/:id

    Deletes a task

🛠️ How to Run the Project

Clone the repository:

git clone https://github.com/Cleber-Severo/to-do-node.git

Navigate to the project folder:

cd to-do-node

Install dependencies:

npm install

Start the development server:

npm run dev

📜 License

This project is licensed under the MIT License. Feel free to use and modify it!

Developed with ❤️ by Cléber Severo 🚀

## Todo App Português

Uma API RESTful simples para uma lista de tarefas, construída com Node.js.

📌 Funcionalidades

Criar uma nova tarefa

Listar todas as tarefas

Atualizar título e/ou descrição de uma tarefa

Excluir uma tarefa

    Marcar uma tarefa como concluída ou não

🚀 Tecnologias Utilizadas

🔧 Rotas da API

GET /tasks

    Lista todas as tarefas

POST /task

    Cria uma nova tarefa
    Body: { "title": "Título da Tarefa", "description": "Descrição Opcional" }

PUT /tasks/:id

    Atualiza o título e/ou descrição de uma tarefa
    Body: { "title": "Novo Título", "description": "Nova Descrição" }

PATCH /tasks/:id

    Alterna o status de conclusão da tarefa

DELETE /tasks/:id

    Exclui uma tarefa

🛠️ Como Rodar o Projeto

Clone o repositório:

git clone https://github.com/Cleber-Severo/to-do-node.git

Acesse a pasta do projeto:

cd to-do-node

Instale as dependências:

npm install

Inicie o servidor de desenvolvimento:

npm run dev

📜 Licença

Este projeto está licenciado sob a MIT License. Sinta-se livre para utilizá-lo e modificá-lo!

Desenvolvido com ❤️ por Cléber Severo 🚀
