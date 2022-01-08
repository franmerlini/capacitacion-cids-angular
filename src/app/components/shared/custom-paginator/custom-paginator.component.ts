import { Component, Injectable, NgModule } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { Subject } from 'rxjs';

@Injectable()
export class MyCustomPaginatorIntl implements MatPaginatorIntl {
  changes = new Subject<void>();

  firstPageLabel = 'Primer página';
  itemsPerPageLabel = 'Items por página:';
  lastPageLabel = 'Última página';

  nextPageLabel = 'Siguiente página';
  previousPageLabel = 'Página anterior';

  getRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0) {
      return `Página 1 de 1`;
    }
    const amountPages = Math.ceil(length / pageSize);
    return `Página ${page + 1} de ${amountPages}`;
  }
}

@Component({
  selector: 'custom-paginator.component',
  templateUrl: 'custom-paginator.component.html',
})
export class CustomPaginatorComponent {}
