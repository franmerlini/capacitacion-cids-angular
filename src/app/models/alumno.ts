import { Persona } from './persona';

export class Alumno extends Persona {
  constructor(
    public idAlumno: number | null,
    public idReparticion: number,
    public reparticion: string | null,
    idPersona: number,
    nombre: string,
    apellido: string,
    cuil: string,
    edad: number
  ) {
    super(idPersona, nombre, apellido, cuil, edad);
  }
}
