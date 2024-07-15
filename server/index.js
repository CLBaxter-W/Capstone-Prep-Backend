const { app } = require("../src/shared/shared");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const corsOptions = {
  origin: "http://capstone-prep-backend-vjwd.onrender.com/",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.listen(PORT, () => {
  console.log(`I am listening on port number ${PORT}`);
});

const userRoutes = require("../src/routes/UserRoutes");
app.use("/api/user", userRoutes);
