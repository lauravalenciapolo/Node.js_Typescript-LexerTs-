import empleadoRepositorio from "../repositorios/empleadosRepositorio";

const obtenerEmpleados = async () => {
      const empleados = await empleadoRepositorio.obtenerEmpleados();
      return empleados
  };

export default obtenerEmpleados;
