import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from 'src/app/models/alumno';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { AgregarAlumnoComponent } from './agregar-alumno/agregar-alumno.component';
import { EditarAlumnoComponent } from './editar-alumno/editar-alumno.component';
import { EliminarAlumnoComponent } from './eliminar-alumno/eliminar-alumno.component';
import { ConsultarAlumnoComponent } from './consultar-alumno/consultar-alumno.component';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css'],
})
export class AlumnosComponent implements OnInit {
  alumno!: Alumno;
  loading = true;

  displayedColumns: string[] = [
    'idAlumno',
    'apellido',
    'nombre',
    'cuil',
    'acciones',
  ];

  dataSource = new MatTableDataSource<Alumno>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private alumnosService: AlumnosService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.cargarAlumnos();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  cargarAlumnos(): void {
    this.dataSource.data = [];
    this.alumnosService.obtenerAlumnos().subscribe({
      next: (res) => {
        this.dataSource.data.push(...res);
        this.dataSource._updateChangeSubscription();

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        this.loading = false;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  actualizarTabla(): void {
    this.alumnosService.obtenerAlumnos().subscribe({
      next: (res) => {
        this.dataSource.data = res;
        this.dataSource._updateChangeSubscription();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  openDialogAgregar(): void {
    const dialogRef = this.dialog.open(AgregarAlumnoComponent);

    dialogRef.afterClosed().subscribe((res) => {
      this.actualizarTabla();
      console.log(res);
    });
  }

  openDialogEliminar(cuil: string): void {
    const dialogRef = this.dialog.open(EliminarAlumnoComponent, {
      width: '250px',
      data: { msg: '¿Seguro que desea eliminar el registro?', cuil },
    });

    dialogRef.afterClosed().subscribe((res) => {
      this.actualizarTabla();
      console.log(res);
    });
  }

  openDialogEditar(alumno: Alumno): void {
    const dialogRef = this.dialog.open(EditarAlumnoComponent, {
      data: {
        idAlumno: alumno.idAlumno,
        cuil: alumno.cuil,
        nombre: alumno.nombre,
        apellido: alumno.apellido,
        edad: alumno.edad,
        idReparticion: alumno.idReparticion,
      },
    });

    dialogRef.afterClosed().subscribe((res) => {
      this.actualizarTabla();
      console.log(res);
    });
  }

  openDialogConsultar(alumno: Alumno): void {
    const dialogRef = this.dialog.open(ConsultarAlumnoComponent, {
      data: {
        idAlumno: alumno.idAlumno,
        cuil: alumno.cuil,
        nombre: alumno.nombre,
        apellido: alumno.apellido,
        edad: alumno.edad,
        reparticion: alumno.reparticion,
      },
    });

    dialogRef.afterClosed().subscribe((res) => {
      console.log(res);
    });
  }
}
