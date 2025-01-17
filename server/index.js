const { app } = require("../src/shared/shared");
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`I am listening on port number ${PORT}`);
});

const userRoutes = require("../src/routes/UserRoutes");

app.use("/api/user", userRoutes);
