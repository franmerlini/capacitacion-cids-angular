import { Component, OnInit } from '@angular/core';
import { Reparticion } from 'src/app/models/reparticion';
import { ReparticionesService } from 'src/app/services/reparticiones.service';

@Component({
  selector: 'app-reparticiones',
  templateUrl: './reparticiones.component.html',
  styleUrls: ['./reparticiones.component.css'],
})
export class ReparticionesComponent implements OnInit {
  reparticiones!: Reparticion[];
  loading = true;

  constructor(private reparticionesService: ReparticionesService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    //fake loading
    setTimeout(() => {
      this.cargarReparticiones();
    }, 500);
  }

  cargarReparticiones() {
    this.reparticionesService
      .obtenerReparticionesFakeData()
      .subscribe((data) => {
        this.reparticiones = data;
        this.loading = false;
      });
  }
}
