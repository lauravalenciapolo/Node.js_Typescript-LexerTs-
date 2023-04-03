export interface ModelDefiner {
    (sequelize: any): any;
}

export interface ModelEmpleado {
    codigo?: number,
    nif: string,
    nombre: string,
    apellido1: string,
    apellido2: string,
    codigo_departamento: number
}