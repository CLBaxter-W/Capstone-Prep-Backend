// Create the backend application layer
const express = require("express");

const app = express();


app.use(express.json());

const cors = require("cors");
app.use(cors());

// for Pre-flight when needed
app.options("*", cors());

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  next();
});

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
  
};
