# Personal Blog Backend

## Project Overview

Project url: [https://roadmap.sh/projects/personal-blog]

The **Personal Blog Backend** is a Node.js and TypeScript-based server application that provides RESTful API routes for managing blog articles. The backend supports features such as article creation, updating, and deletion with basic authentication for admin management. The articles are stored in a local data file rather than a database.

## Features

- RESTful API for managing blog articles
- Admin dashboard with basic authentication
- Article CRUD operations
- Data persistence using a local file store
- Pug template engine for dynamic page rendering
- CORS-enabled for frontend integration

---

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js (>= 14.x)
- npm (comes with Node.js)

### Clone the Repository

```bash
git clone https://github.com/babzo007/personal-blog.git
cd personal-blog
```

### Install Dependencies

```bash
npm install
```

### Build the Project

```bash
npm run build
```

### Start the Application

#### In Development Mode

```bash
npm run dev
```

#### In Production Mode

```bash
npm start
```

---

## API Endpoints

### Public Routes

| Method | Endpoint        | Description          |
| ------ | --------------- | -------------------- |
| GET    | `/articles`     | Get all articles     |
| GET    | `/articles/:id` | Get an article by ID |

### Admin Routes (Authentication Required)

| Method | Endpoint            | Description               |
| ------ | ------------------- | ------------------------- |
| GET    | `/admin`            | Admin dashboard           |
| GET    | `/admin/add`        | Form to create an article |
| POST   | `/admin/create`     | Create a new article      |
| GET    | `/admin/edit/:id`   | Form to edit an article   |
| POST   | `/admin/update/:id` | Update an article         |
| POST   | `/admin/delete/:id` | Delete an article         |

---

## Project Structure

```
├── src
│   ├── controllers      # Request handlers
│   ├── middlewares      # Authentication middleware
│   ├── routes           # Route definitions
│   ├── views            # Pug templates for rendering
│   ├── public           # Static assets (CSS, JS)
│   ├── app.ts           # Express app setup
│   └── index.ts         # Server entry point
├── package.json         # Project metadata and scripts
└── tsconfig.json        # TypeScript configuration
```

---

## Development Guidelines

### Code Linting

Run ESLint to check for code issues:

```bash
npm run lint
```

To fix lint issues:

```bash
npm run lint:fix
```

### Formatting

To format code using Prettier:

```bash
npm run format
```

---

## Environment Variables

Create a `.env` file to set environment-specific configurations (if needed). Example:

```
PORT=3337
```

---

## Authentication

The admin panel is protected by HTTP Basic Authentication.

### Testing Authentication

1. Access the admin routes via the browser.
2. If the browser caches credentials, clear them or use incognito mode.

---

## License

This project does not currently have a license.

---

## Author

**Ababacar Niang**
