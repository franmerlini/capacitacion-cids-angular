import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Profesor } from 'src/app/models/profesor';
import { ProfesoresService } from 'src/app/services/profesores.service';
import { AgregarProfesorComponent } from './agregar-profesor/agregar-profesor.component';
import { ConsultarProfesorComponent } from './consultar-profesor/consultar-profesor.component';
import { EditarProfesorComponent } from './editar-profesor/editar-profesor.component';
import { EliminarProfesorComponent } from './eliminar-profesor/eliminar-profesor.component';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css'],
})
export class ProfesoresComponent implements OnInit {
  loading = true;

  displayedColumns: string[] = [
    'idProfesor',
    'apellido',
    'nombre',
    'cuil',
    'acciones',
  ];
  dataSource!: MatTableDataSource<Profesor>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private profesoresService: ProfesoresService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.cargarProfesores();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  cargarProfesores(): void {
    this.profesoresService.obtenerProfesores().subscribe((res) => {
      this.dataSource = new MatTableDataSource<Profesor>(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      this.loading = false;
    });
  }

  openDialogAgregar(): void {
    const dialogRef = this.dialog.open(AgregarProfesorComponent);

    dialogRef.afterClosed().subscribe((res) => {
      console.log(res);
    });
  }

  openDialogEditar(profesor: Profesor): void {
    const dialogRef = this.dialog.open(EditarProfesorComponent, {
      data: {
        idProfesor: profesor.idProfesor,
        cuil: profesor.cuil,
        nombre: profesor.nombre,
        apellido: profesor.apellido,
        edad: profesor.edad,
        idCargo: profesor.idCargo,
      },
    });

    dialogRef.afterClosed().subscribe((res) => {
      console.log(res);
    });
  }

  openDialogEliminar(cuil: string): void {
    const dialogRef = this.dialog.open(EliminarProfesorComponent, {
      width: '250px',
      data: { msg: '¿Seguro que desea eliminar el registro?', cuil },
    });

    dialogRef.afterClosed().subscribe((res) => {
      console.log(res);
    });
  }

  openDialogConsultar(profesor: Profesor): void {
    const dialogRef = this.dialog.open(ConsultarProfesorComponent, {
      data: {
        idProfesor: profesor.idProfesor,
        cuil: profesor.cuil,
        nombre: profesor.nombre,
        apellido: profesor.apellido,
        edad: profesor.edad,
        cargo: profesor.cargo,
      },
    });

    dialogRef.afterClosed().subscribe((res) => {
      console.log(res);
    });
  }
}
