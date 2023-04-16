import express from "express";
import {
  newMovie,
  getAllMovies,
  updateMovie,
  deleteMovie,
  getMovieById,
  getRandomMovie,
} from "../controllers/movieController.js";
import {
  isAuthenticatedUser,
  isAuthorizedUser,
} from "../middlewares/authHandler.js";

const movieRouter = express.Router();
movieRouter
  .route("/add-movie")
  .post(isAuthenticatedUser, isAuthorizedUser(true, false), newMovie);

movieRouter.route("/").get(getAllMovies);
movieRouter.route("/random").get(getRandomMovie);
movieRouter.route("/:id").get(getMovieById);
movieRouter
  .route("/update-movie/:id")
  .put(isAuthenticatedUser, isAuthorizedUser(true, false), updateMovie);
movieRouter
  .route("/delete-movie/:id")
  .delete(isAuthenticatedUser, isAuthorizedUser(true, false), deleteMovie);

export default movieRouter;
