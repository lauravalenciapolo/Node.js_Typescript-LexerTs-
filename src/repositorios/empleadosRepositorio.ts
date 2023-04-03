const { Empleado, Departamento } = require("../db.ts");
import { ModelEmpleado } from "../types";

const eliminarEmpleado = (codigo:number) => {
  Empleado.destroy({
    where: {
      codigo,
    },
  });
};

const obtenerEmpleado = (codigo:number) => {
  const empleado = Empleado.findByPk(codigo, {
    include: {
      model: Departamento,
      attributes: ["nombre"],
    },
  });
  return empleado;
};

const obtenerEmpleados = () => {
  const empleados = Empleado.findAll({
    include: {
      model: Departamento,
      attributes: ["nombre"],
    },
  });
  return empleados;
};

const crearNuevoEmpleado = (
  nif: ModelEmpleado["nif"],
  nombre: ModelEmpleado["nombre"],
  apellido1: ModelEmpleado["apellido1"],
  apellido2: ModelEmpleado["apellido2"],
  codigo_departamento: ModelEmpleado["codigo_departamento"]
) => {
  Empleado.create({
    nif,
    nombre,
    apellido1,
    apellido2,
    codigo_departamento,
  });
};

const actualizarEmpleado = async (
  codigo: ModelEmpleado["codigo"],
  nif: ModelEmpleado["nif"],
  nombre: ModelEmpleado["nombre"],
  apellido1: ModelEmpleado["apellido1"],
  apellido2: ModelEmpleado["apellido2"],
  codigo_departamento: ModelEmpleado["codigo_departamento"]
) => {
  const encontrarEmpleado = await Empleado.findOne({
    where: {
      codigo,
    },
  });
  if (!encontrarEmpleado) throw new Error("Verifique el código del empleado");
  if (encontrarEmpleado) {
    encontrarEmpleado.update({
      nif,
      nombre,
      apellido1,
      apellido2,
      codigo_departamento,
    });
    await encontrarEmpleado.save();
    const empleadoInfo = encontrarEmpleado.dataValues
    return empleadoInfo
  }
};


export default {
  eliminarEmpleado,
  obtenerEmpleado,
  obtenerEmpleados,
  crearNuevoEmpleado,
  actualizarEmpleado,
};
