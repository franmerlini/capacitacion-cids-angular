import { Component, OnInit } from '@angular/core';
import { Tema } from 'src/app/models/tema';
import { TemasService } from 'src/app/services/temas.service';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.component.html',
  styleUrls: ['./temas.component.css'],
})
export class TemasComponent implements OnInit {
  temas!: Tema[];
  loading = true;

  constructor(private temasService: TemasService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.cargarTemas();
    }, 500);
  }

  cargarTemas() {
    this.temasService.obtenerTemas().subscribe((data) => {
      this.temas = data;
      this.loading = false;
    });
  }
}
