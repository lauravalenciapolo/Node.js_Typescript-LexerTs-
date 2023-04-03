import obtenerEmpleado from "../servicios/obtenerEmpleado";
import obtenerEmpleados from "../servicios/obtenerEmpleados";
import { Request as ExpressRequest, Response as ExpressResponse } from 'express';
import actualizarEmpleado from "../servicios/actualizarEmpleado";
import { ModelEmpleado } from "../types";
import crearEmpleado from "../servicios/crearEmpleado";
import eliminarEmpleado from "../servicios/eliminarEmpleado";

const router = require("express").Router();

router.get("/", async (_req: ExpressRequest, res: ExpressResponse) => {
  try {
    const todosEmpleados = await obtenerEmpleados();
    return res.status(200).json(todosEmpleados);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

router.get("/:codigo", async (req: ExpressRequest, res: ExpressResponse) => {
  try {
    const { codigo } = req.params;
    let idEmpleado = await obtenerEmpleado(Number(codigo));
    return res.status(200).json(idEmpleado);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

router.post("/", async (req: ExpressRequest, res: ExpressResponse) => {
  try {
    const { nif, nombre, apellido1, apellido2, codigo_departamento } = req.body;
    const empleado = {
      nif,
      nombre,
      apellido1,
      apellido2,
      codigo_departamento
    }

    const nuevoEmpleado = await crearEmpleado(empleado);
    return res.status(200).send(nuevoEmpleado);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

router.delete("/:codigo", async (req: ExpressRequest, res: ExpressResponse) => {
  try {
    const { codigo } = req.params;
    const borrarEmpleado = await eliminarEmpleado(Number(codigo));
    return res.status(200).send(borrarEmpleado);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

router.put("/:codigo", async (req: ExpressRequest, res: ExpressResponse) => {
  try {
    const { nif, nombre, apellido1, apellido2, codigo_departamento } = req.body;
    const { codigo } = req.params;
    const empleado : ModelEmpleado= {
      codigo: Number(codigo),
      nif,
      nombre,
      apellido1,
      apellido2,
      codigo_departamento
    }
    const nuevaInfoEmpleado = await actualizarEmpleado(empleado);
    return res.status(200).send(nuevaInfoEmpleado);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

export default router;
