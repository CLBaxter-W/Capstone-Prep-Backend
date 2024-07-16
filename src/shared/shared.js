// Create the backend application layer
const express = require("express");

const app = express();


app.use(express.json());

const cors = require("cors");
app.use(cors());

// for Pre-flight when needed
app.options("*", cors());

// add the encryption
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// add the router
const route = express.Router();

// add the db layer wrapper
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// export variables
module.exports = {
  app,
  bcrypt,
  jwt,
  route,
  prisma,
  cors
};
