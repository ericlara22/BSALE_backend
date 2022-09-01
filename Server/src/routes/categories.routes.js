import { Router } from "express";
import { methods as categoryController } from "../controllers/categories.controller";

const router = Router();

router.get("/:id", categoryController.getProductsByCategory);

export default router;
