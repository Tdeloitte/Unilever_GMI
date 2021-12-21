require("dotenv").config();
const express = require("express");
const routes = require("./src/routes/index");
const app = express();

app.use("/api", routes);

app.listen(process.env.PORT || 3000, () => {
  console.log("server is running on port ", process.env.PORT || 3000);
});
