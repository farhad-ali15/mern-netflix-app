import express from "express";
import {
  deleteList,
  getAllLists,
  newList,
} from "../controllers/listController.js";
import {
  isAuthenticatedUser,
  isAuthorizedUser,
} from "../middlewares/authHandler.js";

const listRouter = express.Router();
listRouter
  .route("/add-list")
  .post(isAuthenticatedUser, isAuthorizedUser(true, false), newList);
listRouter
  .route("/delete-list/:id")
  .delete(isAuthenticatedUser, isAuthorizedUser(true, false), deleteList);
listRouter.route("/").get(getAllLists);

export default listRouter;
