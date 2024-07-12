# Capstone-Prep-Backend

Capstone Prep Backend - Susana, Drew, Cathy

Backend:
The backend is broken down into the following features. Each feature is a new branch. When you start a feature, create a new branch, test the code using Postman, and finally merge your code. Then the next driver will pull down the code from Github, create a new branch, and start the next feature.

Here are the features:
1 - check - Create a new repository on Github and add all the team members.
2 - check - Build the skeleton of the backend using npm and add the dependencies.
3 - check - Build a user table using Prisma. This table should contain a UUID that is the primary key, a first name, last name, email that is unique, and a password. All fields should be not null.
4 - Create the register endpoint. A user will enter an email, first name, last name, and password. The password will be encrypted using bcrypt and the end point will return the users information and a JSON web token that is good for one hour. Create a folder for routes, controllers, and queries. Here is an example. Test this in Postman
5 - Create a login endpoint. The user will enter their email and password, use bcrypt compare for the password and return the users information and a JSON web token. Test this in Postman.
6 - Create an endpoint to get all the users. This is a protected route, use middleware to make sure the user has a valid JSON web token. If they do return all the users, if not return an unauthorized error. Test this in Postman (Are you seeing a pattern?).
7 - Create a delete endpoint for a user. This is another protected route, the same as above.
8 - Create an update endpoint for a user. This should take in the email, first name, last name, and password, then update the user's information. Don’t forget to use bcrypt for the password. This is also a protected route
9 - Once you are done and all routes have been tested, deploy on render. Here is the link. Reach out if you have any questions.
10 - Once deployed, test all routes using Postman.

npm init -y
npm i prisma express bcrypt jsonwebtoken nodemon uuid
npx prisma init
added file structure

-- adding schema
-- each developer must do the migrate and create a local db for work
npm i @prisma/client  
npx prisma migrate dev
