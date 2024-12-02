import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Filme= connection.define("filmes", {
  titulo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ano: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  file: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
Filme.sync({ force: false });
export default Filme;
