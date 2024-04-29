const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

// Импортируем midlwares
const cors = require("./middlewares/cors");

// Импортируем роутеры
const mainRoute = require("./routes/main");
const gamesRouter = require("./routes/games");

const PORT = 3000;
const app = express();

// Теперь клиент имеет доступ только к публичным файлам
app.use(
  cors,
  bodyParser.json(),
  express.static(path.join(__dirname, "public")),
  mainRoute,
  gamesRouter
);

app.listen(PORT, () => {
  console.log(`App listening on port http://localhost:${PORT}`);
});
