

# Tech Blog

Tech Blog is a CMS-style blog site where developers can publish articles, blog posts, and share their thoughts and opinions. The application follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and express-session for authentication.

---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Database Tables](#database-tables)
- [Credits](#credits)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Questions](#questions)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jv0321/Tech_Blog.git

2. Navigate to the project directory:
```bash
Copy code
cd Tech_Blog
3. Install dependencies:
```bash
Copy code
npm install
4. Create a .env file in the root directory and add the following environment variables:
plaintext
Copy code
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_HOST=your_database_host
5. Set up your database and tables using the provided SQL schema:
```bash
Copy code
mysql -u your_database_user -p < db/schema.sql
6. Start the application:
```bash
Copy code
npm start
7. Usage
Visit the homepage to view existing blog posts or sign up/sign in.
After signing in:
Create new blog posts.
View and comment on existing posts.
Manage your own posts through the dashboard.
Database Tables
Users Table: Stores user information, including username, email, and password.
Posts Table: Stores blog posts created by users, including title and content.
Comments Table: Stores comments made by users on blog posts.
