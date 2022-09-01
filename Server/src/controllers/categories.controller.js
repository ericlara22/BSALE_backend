import { getConnection } from "../db/database";

const getProductsByCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const connection = await getConnection();
    const result = await connection.query(
      "SELECT name FROM category WHERE id = ?",
      id
    );

    console.log(result);

    res.json(result);
  } catch (er) {
    res.status(500);
    res.send(er.message);
  }
};

/*
Construir una tienda online que despliegue productos agrupados por la categoría a
la que pertenecen, generando por separado backend (API REST) y frontend
(aplicación que la consuma) y utilizando la base de datos que se disponibiliza para
su desarrollo.
Además, hay que agregar un buscador, el cual tiene que estar implementado a nivel
de servidor, mediante una Api Rest cuyo lenguaje y framework puede ser de libre
elección. Es decir, los datos de productos deben llegar filtrados al cliente.
Opcionalmente, puedes implementar filtros por atributo, ordenar productos y
paginación.
*/

export const methods = {
  getProductsByCategory,
};
