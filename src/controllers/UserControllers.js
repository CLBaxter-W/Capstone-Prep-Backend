const { registerQuery } = require("../queries/UserQueries");

const register = async (req, res) => {
  const returnInfo = await registerQuery(req.body);
  res.send(returnInfo);
};

module.exports = {
  register,
};
