import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlumnosService } from 'src/app/services/alumnos.service';

export interface IEliminarDialogData {
  msg: string;
  cuil: string;
}

@Component({
  selector: 'app-eliminar-alumno',
  templateUrl: './eliminar-alumno.component.html',
  styleUrls: ['./eliminar-alumno.component.css'],
})
export class EliminarAlumnoComponent implements OnInit {
  loading = false;

  constructor(
    public dialogRef: MatDialogRef<EliminarAlumnoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IEliminarDialogData,
    private alumnosService: AlumnosService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  eliminarAlumno(cuil: string): void {
    this.loading = true;

    this.alumnosService.eliminarAlumno(cuil).subscribe({
      next: (res) => {
        this.loading = false;
        this.dialogRef.close();
        console.log(res);
        this.mostrarSnackBar('¡Alumno eliminado!');
      },
      error: (err) => {
        console.error(err);
        this.mostrarSnackBar('Ha ocurrido un error...');
      },
    });
  }

  // --------------------------------------Metodos de soporte--------------------------------------
  mostrarSnackBar(msg: string): void {
    this.snackBar.open(msg, '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
}
