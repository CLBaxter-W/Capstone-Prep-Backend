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

module.exports = {
  registerQuery,
};
