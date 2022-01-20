import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IAlumno } from 'src/app/interfaces/IAlumno';
import { Alumno } from 'src/app/models/alumno';
import { Reparticion } from 'src/app/models/reparticion';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { ReparticionesService } from 'src/app/services/reparticiones.service';

@Component({
  selector: 'app-agregar-alumno',
  templateUrl: './agregar-alumno.component.html',
  styleUrls: ['./agregar-alumno.component.css'],
})
export class AgregarAlumnoComponent implements OnInit {
  form: FormGroup;
  reparticiones!: Reparticion[];
  alumno!: Alumno;
  alumnoParseado!: IAlumno;
  loading = true;

  constructor(
    private fb: FormBuilder,
    private alumnosService: AlumnosService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<AgregarAlumnoComponent>,
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

  agregarAlumno(): void {
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

    this.alumnosService.agregarAlumno(this.alumnoParseado).subscribe({
      next: (res) => {
        this.loading = false;
        this.dialogRef.close();
        this.mostrarSnackBar('¡Alumno agregado!');
      },
      error: (err) => {
        this.loading = false;
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
      verticalPosition: 'top',
    });
  }
}
