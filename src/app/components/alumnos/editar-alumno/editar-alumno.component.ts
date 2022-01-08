import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IAlumno } from 'src/app/interfaces/IAlumno';
import { IAlumnoDialogData } from 'src/app/interfaces/IAlumnoDialogData';
import { Alumno } from 'src/app/models/alumno';
import { Reparticion } from 'src/app/models/reparticion';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { ReparticionesService } from 'src/app/services/reparticiones.service';

@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.css'],
})
export class EditarAlumnoComponent implements OnInit {
  form: FormGroup;
  reparticiones!: Reparticion[];
  alumno!: Alumno;
  alumnoParseado!: IAlumno;
  loading = true;

  constructor(
    private fb: FormBuilder,
    private alumnosService: AlumnosService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<EditarAlumnoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IAlumnoDialogData,
    private reparticionesService: ReparticionesService
  ) {
    this.form = this.fb.group({
      cuil: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      nombre: ['', [Validators.required, Validators.pattern('^[A-Za-z_ ]+$')]],
      apellido: [
        '',
        [Validators.required, Validators.pattern('^[A-Za-z_ ]+$')],
      ],
      edad: ['', Validators.required],
      reparticion: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.cargarReparticiones();
  }

  cargarReparticiones(): void {
    this.reparticionesService.obtenerReparticiones().subscribe({
      next: (res) => {
        this.reparticiones = res;

        this.loading = false;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  editarAlumno(): void {
    this.loading = true;

    this.alumno = {
      idAlumno: null,
      idPersona: null,
      cuil: this.form.value.cuil,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      edad: this.form.value.edad,
      idReparticion: this.form.value.reparticion,
      reparticion: null,
    };

    this.alumnoParseado = this.classToInterface(this.alumno);

    this.alumnosService.editarAlumno(this.alumnoParseado).subscribe({
      next: (res) => {
        console.log(res);
        this.mostrarSnackBar('¡Alumno editado!');
        this.dialogRef.close();
      },
      error: (err) => {
        console.error(err);
        this.mostrarSnackBar('Ha ocurrido un error...');
      },
    });
  }

  // --------------------------------------Metodos de soporte--------------------------------------
  classToInterface(alumno: Alumno): IAlumno {
    return {
      idReparticion: alumno.idReparticion,
      idPersona2: {
        nombre: alumno.nombre,
        apellido: alumno.apellido,
        edad: alumno.edad,
        cuil: alumno.cuil,
      },
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
