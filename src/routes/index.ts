import { Router } from 'express';
import Empleados from "./empleados";

const router = Router();

router.use("/empleado", Empleados);


export default router;
