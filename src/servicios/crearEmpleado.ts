import { ModelEmpleado } from "../types";
import empleadoRepositorio from "../repositorios/empleadosRepositorio";

const crearEmpleado = async (
  // nif: ModelEmpleado["nif"],
  // nombre: ModelEmpleado["nombre"],
  // apellido1: ModelEmpleado["apellido1"],
  // apellido2: ModelEmpleado["apellido2"],
  // codigo_departamento: ModelEmpleado["codigo_departamento"]
  empleado: ModelEmpleado
) =>{
    if (!empleado.nif || !empleado.nombre || !empleado.apellido1 || !empleado.codigo_departamento) throw new Error("Por favor completa todos los campos obligatorios");
    
    else{
        const nuevoEmpleado = await empleadoRepositorio.crearNuevoEmpleado(
          empleado.nif,
          empleado.nombre,
          empleado.apellido1,
          empleado.apellido2,
          empleado.codigo_departamento
        );
    return;
}
}

export default crearEmpleado;