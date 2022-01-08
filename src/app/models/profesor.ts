import { Persona } from './persona';

export class Profesor extends Persona {
  constructor(
    public idProfesor: number | null,
    public idCargo: number,
    public cargo: string | null,
    idPersona: number,
    nombre: string,
    apellido: string,
    cuil: string,
    edad: number
  ) {
    super(idPersona, nombre, apellido, cuil, edad);
  }
}
