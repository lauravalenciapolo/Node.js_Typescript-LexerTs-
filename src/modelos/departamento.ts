import { DataTypes } from 'sequelize';

module.exports = (sequelize: any) => {
  sequelize.define("departamento", {
    codigo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    presupuesto: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  });
};
 