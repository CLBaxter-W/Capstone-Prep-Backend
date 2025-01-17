const { route, app } = require("../shared/shared");

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
