export interface IPuntaje {
  idPuntaje: number;
  idAlumno: number | null;
  nombreAlumno: string;
  apellidoAlumno: string;
  idProfesor: number | null;
  nombreProfesor: string;
  apellidoProfesor: string;
  idTema: number;
  tema: string;
  interes: number;
  complejidad: number;
  entendimiento: number;
  valoracion: number;
  observaciones: string;
}
