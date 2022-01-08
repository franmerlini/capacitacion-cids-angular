import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IProfesorDialogData } from 'src/app/interfaces/IProfesorDialogData';

@Component({
  selector: 'app-consultar-profesor',
  templateUrl: './consultar-profesor.component.html',
  styleUrls: ['./consultar-profesor.component.css'],
})
export class ConsultarProfesorComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: IProfesorDialogData) {}

  ngOnInit(): void {}
}
