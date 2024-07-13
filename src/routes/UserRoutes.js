const { route } = require("../shared/shared");
const {
  register,
  findUserByToken,
  login,
  getAllUsers,
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
route.get("/users", isLoggedIn, getAllUsers);

module.exports = route;
