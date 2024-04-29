// routes/games.js
const gamesRouter = require("express").Router(); // Создали роутер
const {
  deleteGame,
  addGameController,
  sendAllGames,
} = require("../controllers/games"); // функции для работы с играми

const getAllGames = require("../middlewares/games");

gamesRouter.get("/games", getAllGames, sendAllGames);
gamesRouter.delete("/games/:id", getAllGames, deleteGame);
gamesRouter.post("/games", getAllGames, addGameController);

module.exports = gamesRouter;
