import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IPuntaje } from 'src/app/interfaces/IPuntaje';
import { PuntajesService } from 'src/app/services/puntajes.service';

export interface IEliminarDialogData {
  msg: string;
  puntaje: IPuntaje;
}

@Component({
  selector: 'app-eliminar-puntaje',
  templateUrl: './eliminar-puntaje.component.html',
  styleUrls: ['./eliminar-puntaje.component.css'],
})
export class EliminarPuntajeComponent implements OnInit {
  loading = false;

  constructor(
    public dialogRef: MatDialogRef<EliminarPuntajeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IEliminarDialogData,
    private puntajesService: PuntajesService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  eliminarPuntaje(puntaje: IPuntaje): void {
    this.loading = true;

    this.puntajesService.eliminarPuntaje(puntaje).subscribe({
      next: (res) => {
        this.loading = false;
        this.dialogRef.close();
        console.log(res);
        this.mostrarSnackBar('¡Puntaje eliminado!');
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
