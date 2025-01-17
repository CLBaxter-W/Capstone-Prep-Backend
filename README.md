# Capstone-Prep-Backend

Capstone Prep Backend - Susana, Drew, Cathy

Backend:
The backend is broken down into the following features. Each feature is a new branch. When you start a feature, create a new branch, test the code using Postman, and finally merge your code. Then the next driver will pull down the code from Github, create a new branch, and start the next feature.

Here are the features:
1 - check - Create a new repository on Github and add all the team members.
2 - check - Build the skeleton of the backend using npm and add the dependencies.
3 - check - Build a user table using Prisma. This table should contain a UUID that is the primary key, a first name, last name, email that is unique, and a password. All fields should be not null.
4 - check - Create the register endpoint. A user will enter an email, first name, last name, and password. The password will be encrypted using bcrypt and the end point will return the users information and a JSON web token that is good for one hour. Create a folder for routes, controllers, and queries. Here is an example. Test this in Postman

5 - check - Create a login endpoint. The user will enter their email and password, use bcrypt compare for the password and return the users information and a JSON web token. Test this in Postman.
6 - check - Create an endpoint to get all the users. This is a protected route, use middleware to make sure the user has a valid JSON web token. If they do return all the users, if not return an unauthorized error. Test this in Postman (Are you seeing a pattern?).

7 - check- Create a delete endpoint for a user. This is another protected route, the same as above.

8 - check - Create an update endpoint for a user. This should take in the email, first name, last name, and password, then update the user's information. Don’t forget to use bcrypt for the password. This is also a protected route

9 - check - Once you are done and all routes have been tested, deploy on render. Here is the link. Reach out if you have any questions.
10 - check - Once deployed, test all routes using Postman.

npm init -y
npm i prisma express bcrypt jsonwebtoken nodemon uuid
npx prisma init
added file structure

-- adding schema
-- each developer must do the migrate and create a local db for work
npm i @prisma/client  
npx prisma migrate dev

-- adding register - must add .env file
-- supersecrete business here:

# Environment variables declared in this file are automatically made available to Prisma.

# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.

# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="postgresql://postgres:@localhost:5432/capstone_prep?schema=public"

WEB_TOKEN = process.env.JWT || "Its a secret";
