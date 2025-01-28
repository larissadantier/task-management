# Task Management System

A simple Task Management System with authentication and authorization features to manage user tasks effectively.

---

## 🚀 Functional Requirements

### 🔒 Authentication and Authorization
- **User Registration**: 
  - Register with `name`, `email`, and `password`.
- **User Login**: 
  - Log in to generate a JWT token for authentication.
- **Protected Routes**: 
  - All routes (except registration and login) are secured with JWT authentication.

### 📋 Task Management
- **Create a Task**: 
  - Add a new task with:
    - `title`
    - `description`
    - `status`
    - `creation date`
    - `completion date`
- **List Tasks**: 
  - View all tasks created by the logged-in user.
- **Update a Task**: 
  - Edit task details (`title`, `description`, `status`).
- **Delete a Task**: 
  - Permanently remove a task.
- **Mark Task as Completed**: 
  - Change the task status to `completed`.
- **Filter Tasks**: 
  - Filter tasks by `status`:
    - Pending
    - In Progress
    - Completed

### ✅ Validations
- Ensure all required fields are provided when creating or updating a task.
- Verify that the user has permission to edit or delete a task.

---

## 🛠 Database Structure

### 📄 Tables
1. **Users Table**:
   - Stores user details: `id`, `name`, `email`, `password`.
2. **Tasks Table**:
   - Stores task details: `id`, `title`, `description`, `status`, `creation_date`, `completion_date`.
   - Includes a foreign key (`user_id`) to associate tasks with their creators.

### 🔗 Referential Integrity
- Maintain referential integrity between `users` and `tasks` tables.

---

## ⚙️ Setup Instructions

1. **Database Setup**:
   - Manually create the `users` and `tasks` tables in your SQL database.
   - Ensure the `tasks` table includes a foreign key (`user_id`) referencing the `users` table.

2. **Environment Variables**:
   - Configure the following environment variables:
     - `DATABASE_URL` – Database connection string.
     - `JWT_SECRET` – Secret key for JWT token generation.

3. **Install Dependencies**:
   ```bash
   npm install
