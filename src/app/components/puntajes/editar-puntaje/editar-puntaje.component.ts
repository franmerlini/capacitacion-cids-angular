import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IPuntaje } from 'src/app/interfaces/IPuntaje';
import { IPuntajeDialogData } from 'src/app/interfaces/IPuntajeDialogData';
import { Alumno } from 'src/app/models/alumno';
import { Puntaje } from 'src/app/models/puntaje';
import { PuntajesService } from 'src/app/services/puntajes.service';

@Component({
  selector: 'app-editar-puntaje',
  templateUrl: './editar-puntaje.component.html',
  styleUrls: ['./editar-puntaje.component.css'],
})
export class EditarPuntajeComponent implements OnInit {
  form: FormGroup;
  puntaje!: Puntaje;
  puntajeParseado!: IPuntaje;
  loading = true;

  constructor(
    private fb: FormBuilder,
    private puntajesService: PuntajesService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<EditarPuntajeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IPuntajeDialogData
  ) {
    this.form = this.fb.group({
      interes: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      complejidad: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      entendimiento: [
        '',
        [Validators.required, Validators.pattern('^[0-9]*$')],
      ],
      valoracion: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    });
  }

  ngOnInit(): void {}

  /*
  editarPuntaje(): void {
    this.puntaje = {
      idPuntaje = null,
      alumno: null,
      profesor: null,
      tema: Tema,
      interes: this.form.value.interes,
      complejidad: this.form.value.complejidad,
      entendimiento: this.form.value.entendimiento,
      valoracion: this.form.value.valoracion,
      observaciones: this.form.value.observaciones,
    };

    this.puntajeParseado = this.classToInterface(this.puntaje);

    this.puntajesService.editarPuntaje(this.puntajeParseado).subscribe({
      next: (res) => {
        console.log(res);
        this.mostrarSnackBar('¡Profesor editado!');
      },
      error: (err) => {
        console.error(err);
        this.mostrarSnackBar('Ha ocurrido un error...');
      },
    });
  }
*/
  // --------------------------------------Metodos de soporte--------------------------------------
  classToInterface(puntaje: Puntaje): IPuntaje {
    return {
      idPuntaje: puntaje.idPuntaje,
      idAlumno: puntaje.alumno.idAlumno,
      nombreAlumno: puntaje.alumno.nombre,
      apellidoAlumno: puntaje.alumno.apellido,
      idProfesor: puntaje.profesor.idProfesor,
      nombreProfesor: puntaje.profesor.nombre,
      apellidoProfesor: puntaje.profesor.apellido,
      idTema: puntaje.tema.idTema,
      tema: puntaje.tema.nombre,
      interes: puntaje.interes,
      complejidad: puntaje.complejidad,
      entendimiento: puntaje.entendimiento,
      valoracion: puntaje.valoracion,
      observaciones: puntaje.observaciones,
    };
  }

  mostrarSnackBar(msg: string): void {
    this.snackBar.open(msg, '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
}
