import { Component, OnInit } from '@angular/core';
import { TecnologiasService } from 'src/app/services/tecnologias.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  frontEnd!: any[];
  backEnd!: any[];

  constructor(private tecnologiasService: TecnologiasService) {}

  ngOnInit(): void {
    this.cargarTecnologias();
  }

  cargarTecnologias() {
    this.tecnologiasService.obtenerTecnologiasFrontEnd().subscribe((res) => {
      this.frontEnd = res;
    });
    this.tecnologiasService.obtenerTecnologiasBackEnd().subscribe((res) => {
      this.backEnd = res;
    });
  }
}
