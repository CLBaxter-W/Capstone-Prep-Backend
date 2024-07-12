const { bcrypt, prisma, jwt } = require("../shared/shared");

const registerQuery = async ({ email, password, firstname, lastname }) => {
  console.log(email);
  console.log(password);
  console.log(firstname);
  console.log(lastname);

  const hashPassword = await bcrypt.hash(password, 10);

  const registerUser = await prisma.user.create({
    data: {
      email,
      password: hashPassword,
      firstname,
      lastname,
    },
  });

  console.log(hashPassword);

  const token = jwt.sign(
    {
      id: registerUser.id,
    },
    process.env.WEB_TOKEN,
    {
      expiresIn: "1h",
    }
  );
  return { token, registerUser };
};

const loginQuery = async ({ email, password }) => {
  try {
    // console.log(req);
    // const email = req.email;
    // const password = req.password;
    console.log(email);
    console.log(password);
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    // console.log(res);
    if (!user) {
      const error = Error("no user authorized");
      error.status = 401;
      throw error;
    }
    if ((await bcrypt.compare(password, user.password)) === false) {
      const error = Error("not authorized");
      error.status = 401;
      throw error;
    }
    console.log(user);
    const token = jwt.sign({ id: user.id }, process.env.WEB_TOKEN);

    return { token, user };
  } catch (error) {
    // next(error);
    console.log(error);
  }
};

const findUserByTokenQuery = async (req, res, next) => {
  console.log(req.user?.id);
  try {
    let userTokenId;
    if (req.user?.id)
      userTokenId = await prisma.user.findUnique({
        where: { id: req.user.id },
      });
    res.send(userTokenId);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  registerQuery,
  findUserByTokenQuery,
  loginQuery,
};
