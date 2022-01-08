import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Puntaje } from 'src/app/models/puntaje';
import { PuntajesService } from 'src/app/services/puntajes.service';
import { ConsultarPuntajeComponent } from './consultar-puntaje/consultar-puntaje.component';
import { EliminarPuntajeComponent } from './eliminar-puntaje/eliminar-puntaje.component';

@Component({
  selector: 'app-puntajes',
  templateUrl: './puntajes.component.html',
  styleUrls: ['./puntajes.component.css'],
})
export class PuntajesComponent implements OnInit {
  loading = true;
  puntaje!: Puntaje;

  displayedColumns: string[] = [
    'idPuntaje',
    'alumno',
    'profesor',
    'tema',
    'promedio',
    'acciones',
  ];
  dataSource!: MatTableDataSource<Puntaje>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private puntajesService: PuntajesService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.cargarPuntajes();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  cargarPuntajes(): void {
    this.puntajesService.obtenerPuntajes().subscribe((res) => {
      this.dataSource = new MatTableDataSource<Puntaje>(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      this.loading = false;
    });
  }

  openDialogAgregar(): void {}

  openDialogEditar(puntaje: Puntaje): void {}

  openDialogEliminar(puntaje: Puntaje): void {
    const dialogRef = this.dialog.open(EliminarPuntajeComponent, {
      width: '250px',
      data: {
        msg: '¿Seguro que desea eliminar el registro?',
        puntaje: {
          idAlumno: puntaje.alumno.idAlumno,
          idProfesor: puntaje.profesor.idProfesor,
          idTema: puntaje.tema.idTema,
        },
      },
    });

    dialogRef.afterClosed().subscribe((res) => {
      console.log(res);
    });
  }

  openDialogConsultar(puntaje: Puntaje): void {
    console.log(puntaje);

    const dialogRef = this.dialog.open(ConsultarPuntajeComponent, {
      data: {
        idPuntaje: puntaje.idPuntaje,
        nombreAlumno: puntaje.alumno.nombre,
        apellidoAlumno: puntaje.alumno.apellido,
        nombreProfesor: puntaje.profesor.nombre,
        apellidoProfesor: puntaje.profesor.apellido,
        idTema: puntaje.tema.idTema,
        tema: puntaje.tema.nombre,
        interes: puntaje.interes,
        complejidad: puntaje.complejidad,
        entendimiento: puntaje.entendimiento,
        valoracion: puntaje.valoracion,
        observaciones: puntaje.observaciones,
      },
    });

    dialogRef.afterClosed().subscribe((res) => {
      console.log(res);
    });
  }
}
