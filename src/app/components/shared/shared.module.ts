import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { ReactiveFormsModule } from '@angular/forms';

// Angular Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';

// Components
import { EliminarAlumnoComponent } from '../alumnos/eliminar-alumno/eliminar-alumno.component';
import { EditarAlumnoComponent } from '../alumnos/editar-alumno/editar-alumno.component';
import { ConsultarAlumnoComponent } from '../alumnos/consultar-alumno/consultar-alumno.component';

@NgModule({
  declarations: [
    EliminarAlumnoComponent,
    EditarAlumnoComponent,
    ConsultarAlumnoComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatSnackBarModule,
    MatSelectModule,
    MatDialogModule,
    MatProgressBarModule,
    MatDividerModule,
  ],
  exports: [
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatSnackBarModule,
    MatSelectModule,
    MatDialogModule,
    MatProgressBarModule,
    MatDividerModule,
  ],
})
export class SharedModule {}
