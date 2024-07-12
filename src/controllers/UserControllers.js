const {
  registerQuery,
  loginQuery,
  findUserByTokenQuery,
} = require("../queries/UserQueries");

const register = async (req, res, next) => {
  const returnInfo = await registerQuery(req.body);
  res.send(returnInfo);
};

const login = async (req, res, next) => {
  console.log(req.body);
  const returnInfo = await loginQuery(req.body);
  res.send(returnInfo);
};

const findUserByToken = async (token) => {
  let id;
  try {
    const payload = await jwt.verify(token, JWT);
    id = payload.id;
    console.log("id from find user with token", id);
  } catch (ex) {
    const error = Error("Not Authorized to access this page");
    error.status = 401;
    throw error;
  }
  const userLoggedIn = await findUserByTokenQuery(id);
  return userLoggedIn;
};
module.exports = {
  register,
  findUserByToken,
  login,
};
