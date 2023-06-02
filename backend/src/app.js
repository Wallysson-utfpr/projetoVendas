const express = require("express");
const app = express();
const conectDatabase = require("./database/db");
const cors = require("cors");
const routes = require("./routes/rotas");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    allowedHeaders: "Content-Type,Authorization",
  })
);

app.use("/api", routes);

conectDatabase();

app.listen(3001, () => {
  console.log("Servidor backend rodando na porta 3001");
});
