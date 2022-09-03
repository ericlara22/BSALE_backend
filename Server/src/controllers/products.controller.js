import { getConnection } from "../db/database";

const getProducts = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM product");
    console.log(result);
    res.json(result);
  } catch (er) {
    res.status(500);
    res.send(er.message);
  }
};

const getProductsByCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const query = "order by price";

    const connection = await getConnection();
    const result = await connection.query(
      "SELECT * FROM product WHERE product.category = ?",
      id
    );

    console.log(query);
    res.json(result);
  } catch (er) {
    res.status(500);
    res.send(er.message);
  }
};

export const methods = {
  getProducts,
  getProductsByCategory,
};
