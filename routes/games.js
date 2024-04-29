// routes/games.js
const gamesRouter = require("express").Router(); // Создали роутер
const { sendAllGames, sendUpdatedGames } = require("../controllers/games"); // функции для работы с играми

const {
  getAllGames,
  checkIsTitleInArray,
  updateGamesArray,
  updateGamesFile,
  deleteGame,
  findGameById,
} = require("../middlewares/games");

gamesRouter.get("/games", getAllGames, sendAllGames);

gamesRouter.post(
  "/games",
  getAllGames,
  checkIsTitleInArray,
  updateGamesArray,
  updateGamesFile,
  sendUpdatedGames
);
gamesRouter.delete(
  "/games/:id",
  getAllGames,
  findGameById,
  deleteGame,
  updateGamesFile,
  sendUpdatedGames
);

module.exports = gamesRouter;
