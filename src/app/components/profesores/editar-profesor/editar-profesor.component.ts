import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IProfesor } from 'src/app/interfaces/IProfesor';
import { IProfesorDialogData } from 'src/app/interfaces/IProfesorDialogData';
import { Cargo } from 'src/app/models/cargo';
import { Profesor } from 'src/app/models/profesor';
import { CargosService } from 'src/app/services/cargos.service';
import { ProfesoresService } from 'src/app/services/profesores.service';

@Component({
  selector: 'app-editar-profesor',
  templateUrl: './editar-profesor.component.html',
  styleUrls: ['./editar-profesor.component.css'],
})
export class EditarProfesorComponent implements OnInit {
  form: FormGroup;
  cargos!: Cargo[];
  profesor!: Profesor;
  profesorParseado!: IProfesor;
  loading = true;

  constructor(
    private fb: FormBuilder,
    private profesoresService: ProfesoresService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<EditarProfesorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IProfesorDialogData,
    private cargosService: CargosService
  ) {
    this.form = this.fb.group({
      cuil: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      nombre: ['', [Validators.required, Validators.pattern('^[A-Za-z_ ]+$')]],
      apellido: [
        '',
        [Validators.required, Validators.pattern('^[A-Za-z_ ]+$')],
      ],
      edad: ['', Validators.required],
      cargo: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.cargarCargos();
  }

  cargarCargos(): void {
    this.cargosService.obtenerCargos().subscribe({
      next: (res) => {
        this.cargos = res;

        this.loading = false;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  editarProfesor(): void {
    this.profesor = {
      idProfesor: null,
      idPersona: null,
      cuil: this.form.value.cuil,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      edad: this.form.value.edad,
      idCargo: this.form.value.cargo,
      cargo: null,
    };

    this.profesorParseado = this.classToInterface(this.profesor);

    this.profesoresService.editarProfesor(this.profesorParseado).subscribe({
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

  // --------------------------------------Metodos de soporte--------------------------------------
  classToInterface(profesor: Profesor): IProfesor {
    return {
      idCargo: profesor.idCargo,
      idPersona2: {
        nombre: profesor.nombre,
        apellido: profesor.apellido,
        edad: profesor.edad,
        cuil: profesor.cuil,
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
