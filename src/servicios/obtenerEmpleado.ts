import empleadoRepositorio from "../repositorios/empleadosRepositorio";

const obtenerEmpleado = async (codigo:number) => {
  if (!codigo) throw new Error(`Ingrese el código del empleado para consultar`);
  const empleadoById = await empleadoRepositorio.obtenerEmpleado(codigo);
  return empleadoById;
};

export default obtenerEmpleado;
