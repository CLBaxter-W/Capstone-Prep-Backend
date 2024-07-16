const { app } = require("../src/shared/shared");

const PORT = process.env.PORT || 3000;

const cors = require("cors");
app.use(cors({
  origin: "*",
  credentials: false,
}));


app.listen(PORT, () => {
  console.log(`I am listening on port number ${PORT}`);
});

const userRoutes = require("../src/routes/UserRoutes");
app.use("/api/user", userRoutes);
