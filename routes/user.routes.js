import { Router } from "express";
import users from "../controllers/users.js";

const router = Router();
router.get("/users", users.GET);
router.post("/users", users.POST);
router.patch("/users/:id", users.PATCH)
router.delete("/users/:id", users.DELETE)

export default router;
