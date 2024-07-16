const { route, app, cors } = require("../shared/shared");

const {
  register,
  findUserByToken,
  login,
  getAllUsers,
  deleteUser,
  updateUser,
} = require("../controllers/UserControllers");

const isLoggedIn = async (req, res, next) => {
  try {
    req.user = await findUserByToken(req.headers.authorization);
    next();
  } catch (error) {
    next(error);
  }
};

// try this here - or should this route

route.use(function (req, res, next) {
  //app.use(function (req, res, next) {
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

route.post("/register", register);

route.post("/login", login);

route.delete("/delete/:id", isLoggedIn, deleteUser);

route.get("/users", isLoggedIn, getAllUsers);

route.put("/users/:id", isLoggedIn, updateUser);

module.exports = route;
