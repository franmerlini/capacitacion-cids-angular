import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IPuntajeDialogData } from 'src/app/interfaces/IPuntajeDialogData';

@Component({
  selector: 'app-consultar-puntaje',
  templateUrl: './consultar-puntaje.component.html',
  styleUrls: ['./consultar-puntaje.component.css'],
})
export class ConsultarPuntajeComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: IPuntajeDialogData) {}

  ngOnInit(): void {}
}
