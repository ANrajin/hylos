import { NgClass } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { DataTableComponent } from 'src/app/shared/components/data-table/data-table.component';
import {
  Datatable,
  DatatableAction,
  DatatableColumn,
} from 'src/app/shared/components/data-table/types/data-table.type';
import { FilterColumn } from 'src/app/shared/components/data-table/types/paging.type';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [NgClass, DataTableComponent],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css',
})
export class AdminDataTableComponent {
  filters: FilterColumn[] = []


  apiUrl: string = 'v1/tours';

  dtSetting: Datatable = new Datatable(
    [
      new DatatableColumn('Name', 'name', { width: '20%', align: 'justify-start', display:'xxl:visible' }, false, true),
      new DatatableColumn('Price', 'price', { width: '20%', align: 'justify-center' }, false, true),
      new DatatableColumn('Description', 'description', { width: '30%', align: 'justify-start' }, false, true),
      new DatatableColumn('Status', 'isGuide', { width: '3%', align: 'justify-start' }, false, false, (row) => this.prepare(row)),
      new DatatableColumn('Action', 'status', { width: '27%', align: 'justify-center' }, true, false, (row) => this.prepare(row), undefined,
        [
          new DatatableAction({tittle:'Delete', icon:'bi bi-trash' }, 'danger', (x) => this.hitAction(x)),
          new DatatableAction({ tittle: 'action' }, 'primary', (x) => this.hitAction(x)),
        ]
      ),
    ],
    'Custom Table'
  );

  @ViewChild(DataTableComponent) datatable?: DataTableComponent;

  hitAction(x: any) { }

  onSearch(filters: FilterColumn[]) {
    this.datatable?.onAdvanceSearch(filters);
  }

  prepare(row: any) {
    return `<span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded uppercase">
    ${row.isGuide}
    </span>`;
  }
}
