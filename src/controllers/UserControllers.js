const {
  registerQuery,
  loginQuery,
  findUserByTokenQuery,
  getAllUsersQuery,
} = require("../queries/UserQueries");

const { jwt } = require("../shared/shared");

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
    const tokenSplit = token?.split(" ")[1];
    console.log("tokenSplit", tokenSplit);
    console.log(process.env.WEB_TOKEN);

    const payload = await jwt.verify(tokenSplit, process.env.WEB_TOKEN);

    console.log("payload", payload);

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


const getAllUsers = async (req, res, next) => {
  console.log("getAllUsers");
  const returnUsers = await getAllUsersQuery();
  res.send(returnUsers);
};

module.exports = {
  register,
  findUserByToken,
  login,
  getAllUsers,
};
