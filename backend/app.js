const express = require("express");
const helmet = require("helmet");
const session = require("express-session");
const usersRoutes = require("./routes/users");
const app = express();
process.env.API_KEY = "RGAPI-dfee0d9a-6461-480d-b2d3-c28ffb8e44ee";

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

//for security
app.use(helmet());

app.set("trust proxy", 1);
app.use(
  session({
    secret: "s3Cur3",
    name: "sessionId",
    resave: false,
    saveUninitialized: true,
  })
);

app.use("/api/users", usersRoutes);

module.exports = app;
