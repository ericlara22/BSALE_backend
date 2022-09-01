import express from "express";
import morgan from "morgan";
import productRoutes from "./routes/products.routes";
import categoryRoutes from "./routes/categories.routes";

const app = express();

//Settings
app.set("port", 4000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());

//Routes

app.use("/products", productRoutes);
app.use("/categories", categoryRoutes);

export default app;
