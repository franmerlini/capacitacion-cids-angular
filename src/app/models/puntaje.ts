import { Alumno } from './alumno';
import { Profesor } from './profesor';
import { Tema } from './tema';

export class Puntaje {
  constructor(
    public idPuntaje: number,
    public alumno: Alumno,
    public profesor: Profesor,
    public tema: Tema,
    public interes: number,
    public complejidad: number,
    public entendimiento: number,
    public valoracion: number,
    public observaciones: string
  ) {}
}

/*
    public idPuntaje: number,
    public idAlumno: number,
    public nombreAlumno: string,
    public apellidoAlumno: string,
    public idProfesor: number,
    public nombreProfesor: string,
    public apellidoProfesor: string,
    public idTema: number,
    public tema: string,
*/
