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
listRouter.route("/").get(getAllLists);
listRouter.route("/add-list").post(newList);
listRouter.route("/delete-list/:id").delete(deleteList);

export default listRouter;
