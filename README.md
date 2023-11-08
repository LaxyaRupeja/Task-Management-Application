# Task Management Application - Laxya Rupeja Brief Document

---

## Table of Contents

1. [Project Setup and Local Development Instructions](#project-setup-and-local-development-instructions)
2. [Frontend Documentation](#frontend)
3. [Backend Documentation](#backend)
4. [Features that could be implemented if more time were available.](#features-that-could-be-implemented-if-more-time-were-available)

---

# _Project Setup and Local Development Instructions_

Follow these steps to set up and run this project locally on your machine.

## Prerequisites

- Code editor or IDE suitable for your project's programming language.
- Git (version control).
- Runtime or environment for your project (e.g., Node.js (18.12.1)).

## Clone the Repository

```
git clone <repository_url>
```

## Install Dependencies

Navigate to the project's root directory and install dependencies using the appropriate package manager.

Example for Node.js with npm:

```
**Frontend**
cd Task-Management-App_Frontend/
npm install
**Backend**
cd Task-Management-Application_Backend/
npm install
```

## Configuration

I’ve already pushed the .env file also so no need create .env or any enviroment variable

## Start the Application

Use the appropriate command or script to start this project.

For Backend

```
cd backend
npm run server
(for running it with nodemon)
npm run start
(for running it with node)
```

For Frontend

```
cd frontend
ng serve --open
(If you've alraedy installed Angular Cli globally in your system)

npm install -g @angular/cli  (Optional -> if you don't have angular cli installed you   can run this command to install it first)
```

## Access the Application

Open a web browser or client application and navigate to the project's URL [http://localhost:4200](http://localhost:4200) to access my application.

## Testing

- For running the test cases for backend use this command `npm run test`
- Frontend test cases are not there because of time constraint

## Comments

There are comments all over the file both in backend and frontend for easily understanding of my approach

---

# **_Frontend_**

## Architecture

The Task Management App follows a modular Angular architecture. It consists of components, services, and routing.

## Components

### Task List Component

- **Description**: Displays a list of tasks.
- **Functionality**: Lists all tasks and allows users to view task details. by Making a GET request to backend
- **Route**: Accessed via `/` or `/task`.

### Register Component

- **Description**: Allows users to register for the app.
- **Functionality**: Handles user registration by making a POST request to backend with User Credentials
- **Route**: Accessed via `/register`.

### Login Component

- **Description**: Provides user authentication and login.
- **Functionality**: Manages user login and authentication by making a POST request to backend with User Credentials
- **Route**: Accessed via `/login`.

### Task Create Component

- **Description**: Allows users to create new tasks.
- **Functionality**: Enables users to create new tasks by making a POST request to backend
- **Route**: Accessed via `/task/create`.

### Task Update Component

- **Description**: Allows users to update existing tasks.
- **Functionality**: Permits users to edit and update task details by making a PUT making to backend
- **Route**: Accessed via `/task/update/:id`.

### Task Component

- **Description**: Displays task details.
- **Functionality**: Shows detailed information about a task by making a GET request to backend with it’s ID
- **Route**: Accessed via `/task/details/:id`.

### Services

### Task Service

- **Purpose**: Handles CRUD operations for tasks.
- **Usage**: Inject this service where tasks need to be managed.
- **Methods**: `getTasks()`, `createTask()`, `updateTask()`, `deleteTask()`,`getTaskById()`

### Routing

The app uses Angular's built-in router with the following routes:

- `/`: Redirects to Task List component.
- `/register`: Redirects to the register component.
- `/login`: Redirects to the login component
- `/task`: Redirects to Task List component
- `/task/create` : Redirects to Task Create Component
- `/task/update/:id` : Redirects to Task Update Component
- `/task/details/:id` : Redirects to Task Component

## Main Interfaces

- `Task` Interface: Defines the structure of a task object.

```tsx
interface Task {
  _id: string;
  title: string;
  description: string;
  priority: "Low" | "Medium" | "High";
  status: "pending" | "completed" | "overdue";
  createdAt: Date;
}
```

- `User` Interface: Defines the structure of a User object.

```tsx
interface User {
  _id?: string;
  name?: string;
  email: string;
  password: string;
}
```

## Styling

For styling i’ve use TailwindCSS and DaisyUI that provides utility classes for making component visually Appealing]

---

# **_Backend_**

## Overview

I have used popular design pattern which is MVC for designing the backend basically i have created separate controller's for each Model that allow us to follow the SOLID principle of Single Responsibility Principle each controller have only single responsibility of dealing with only one model and because of that routes file and server.js doesn’t have that much lines of code and also i have implement Authetication and Authorization with the help of JSONwebToken token and also while saving user credentials in Database i’m also hashing the user password for data safety with the help of bcrypt

## Routes

### Task Routes

- `/api` **GET : This route is just for testing purposes**
- `/api/task` **POST : This route is for creating the Task Document and saving it into database**
- `/api/task` **GET : This route is for fetching all the task of logged in user**
- `/api/task/:id` **GET : This route is for fetch the single task document by it’s Id**
- `/api/task/:id` **PUT : This route is for Updating a single document by it’s Id**
- `/api/task/:id` **DELETE : This route is for Deleting a single document by it’s Id**

Note :- All the above routes all protected routes that means user have to provide a token inside Authorization headers to access any routes

### User Routes

- `/api/user` **GET : This is just for testing purposes**
- `/api/user/login` **POST : This is the login route that take email and password and verify it and generate a JWT token**
- `/api/user/register` **POST : This is the register route that take name email and password and then hash the password and save the user credentials into the database and also generate a JWT token so user can directly login after registration**

## Middlewares

I’ve used only one middlware which is responsible for authenticating the user basically this middlware extract the token then decodes it and then save the payload of the token inside
`req.user`

## Tech Stack

- NodeJS
- ExpressJS
- Mongoose
- jsonwebtoken
- Bcrypt
- MongoDB (Database)

## Testing

For testing i’ve used jest and mongodb-memory-server for mock database to run the tests use this command `npm run test`

## Starting

for starting the backend server you can use method

- Nodemon : `npm run server`
- Node : `npm run start`

---

## **_Features that could be implemented if more time were available._**

- Sorting & filtering of Task
- Better Authentication like Google Auth
- Better UI
- Tests for Frontend
- Searching
- Real Time Notification/Email Notification
- Responsive UI
- Better Accessibility
- Dark Mode/Light Mode Switcher
- More Complex Schema Design
- Pagination
- User Profile
- To-dos inside the Task
