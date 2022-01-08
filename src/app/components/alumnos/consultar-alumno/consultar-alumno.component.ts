import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IAlumnoDialogData } from 'src/app/interfaces/IAlumnoDialogData';

@Component({
  selector: 'app-consultar-alumno',
  templateUrl: './consultar-alumno.component.html',
  styleUrls: ['./consultar-alumno.component.css'],
})
export class ConsultarAlumnoComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: IAlumnoDialogData) {}

  ngOnInit(): void {}
}
