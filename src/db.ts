import { ModelDefiner } from "./types";
require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;


const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/lexer`,
  {
    logging: false,
    native: false,
  }
);
const basename: string = path.basename(__filename);

const modelDefiners: ModelDefiner []= [];

fs.readdirSync(path.join(__dirname, "/modelos"))
  .filter(
    (file:string):boolean =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".ts"
  )
  .forEach((file:string) => {
    modelDefiners.push(require(path.join(__dirname, "/modelos", file)));
  });

modelDefiners.forEach((model) => model(sequelize));
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { Empleado, Departamento } = sequelize.models;

Empleado.belongsTo(Departamento, { foreignKey: "codigo_departamento" });
Departamento.hasMany(Empleado, { foreignKey: "codigo_departamento" });

export default {
  ...sequelize.models,
  conn: sequelize,
};
  