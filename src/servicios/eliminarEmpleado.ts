import empleadoRepositorio from "../repositorios/empleadosRepositorio";


const eliminarEmpleado = async (codigo:number) => {
  if (codigo) {
    const empleadoEliminado = await empleadoRepositorio.eliminarEmpleado(
      codigo
    );
    return;
  } else {
    throw new Error("Por favor introduzca el código del empleado");
  }
};

export default eliminarEmpleado;
