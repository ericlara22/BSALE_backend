import { Router } from "express";
import { methods as productController } from "../controllers/products.controller";

const router = Router();

router.get("/", productController.getProducts);
router.get("/category/:id", productController.getProductsByCategory);

export default router;
