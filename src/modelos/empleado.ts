import { DataTypes } from 'sequelize';

module.exports = (sequelize: any) => {
  sequelize.define("empleado", {
    codigo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nif: {
      type: DataTypes.STRING(9),
      allowNull: false,
      validate: {
        max: 9,
      },
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    apellido1: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    apellido2: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    codigo_departamento: {
      type: DataTypes.INTEGER,
      validate: {
        max: 10,
      },
    },
  });
};
 