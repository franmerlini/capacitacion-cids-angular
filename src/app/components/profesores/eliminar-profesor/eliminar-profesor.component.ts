import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProfesoresService } from 'src/app/services/profesores.service';

export interface IEliminarDialogData {
  msg: string;
  cuil: string;
}

@Component({
  selector: 'app-eliminar-profesor',
  templateUrl: './eliminar-profesor.component.html',
  styleUrls: ['./eliminar-profesor.component.css'],
})
export class EliminarProfesorComponent implements OnInit {
  loading = false;

  constructor(
    public dialogRef: MatDialogRef<EliminarProfesorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IEliminarDialogData,
    private profesoresService: ProfesoresService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  eliminarProfesor(cuil: string): void {
    this.loading = true;

    this.profesoresService.eliminarProfesor(cuil).subscribe({
      next: (res) => {
        this.loading = false;
        this.dialogRef.close();
        this.mostrarSnackBar('¡Profesor eliminado!');
      },
      error: (err) => {
        this.loading = false;
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
      verticalPosition: 'top',
    });
  }
}
