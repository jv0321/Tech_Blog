#  Tech Blog

Tech Blog is a CMS-style blog site where developers can publish articles, blog posts, and their thoughts and opinions. The application follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and express-session for authentication.

# Table of Contents
Installation Usage Database Tables JavaScript Code Handlebars Templates

# Installation

-Clone the repository:
git clone

-Install dependencies:
npm install

-Create .env file and add the following envoirnment variables:
DB_NAME=your_database_name DB_USER=your_database_user DB_PASSWORD=your_database_password DB_HOST=your_database_host

-Set up your database and tables using the provided SQL schema.

-Run the application:

npm start

# Usage:
Visit the homepage to view existing blog posts or to sign up/sign in. After signing in, you can create new blog posts, view and comment on existing posts, and manage your own posts. The application also includes a dashboard for managing user posts.

# Database Tables:
Users Table: Stores user information including username, email, and password. Posts Table: Stores blog posts created by users, including title and content. Comments Table: Stores comments made by users on blog posts.

# Credits
JD Tadlock: for all the Instruction in the Rutgers coding Bootcamp

# License
MIT
A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code. Link to License You can also check out the LICENSE in the repo.

# How to Contribute
Check out the Contributor Covenant

# Questions
If you have any questions check out my Github or send me an email at N/A.