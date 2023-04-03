import { ModelEmpleado } from "../types";
import empleadoRepositorio from "../repositorios/empleadosRepositorio";

const actualizarEmpleado = async (
  // codigo: ModelEmpleado["codigo"],
  // nif: ModelEmpleado["nif"],
  // nombre: ModelEmpleado["nombre"],
  // apellido1: ModelEmpleado["apellido1"],
  // apellido2: ModelEmpleado["apellido2"],
  // codigo_departamento: ModelEmpleado["codigo_departamento"]
  empleado : ModelEmpleado
) => {
  const actualizarEmpleado = await empleadoRepositorio.actualizarEmpleado(
    empleado.codigo,
    empleado.nif,
    empleado.nombre,
    empleado.apellido1,
    empleado.apellido2,
    empleado.codigo_departamento
  );
    return actualizarEmpleado;
  };


export default actualizarEmpleado;
