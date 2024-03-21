import express from "express";
const router = express.Router();
import {
  createPost,
  deletePost,
  getAllPosts,
  getPost,
  updatePost,
  postSearch
} from "../controllers/postControllers";
import { authGuard, adminGuard } from "../middleware/authMiddleware";

router.route("/").post(authGuard, adminGuard, createPost).get(getAllPosts);
router
  .route("/:slug")
  .put(authGuard, adminGuard, updatePost)
  .delete(authGuard, adminGuard, deletePost)
  .get(getPost);
  router.get("/search/:key", postSearch);


export default router;
