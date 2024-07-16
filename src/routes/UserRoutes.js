const { route, app, cors } = require("../shared/shared");

const request = require('request');

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


route.post("/register", register);

route.post("/login", login);

route.delete("/delete/:id", isLoggedIn, deleteUser);

route.get("/users", isLoggedIn, getAllUsers);

route.put("/users/:id", isLoggedIn, updateUser);

module.exports = route;
