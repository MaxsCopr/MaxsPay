import { Component, Input } from '@angular/core';

@Component({ selector: 'app-data-table', templateUrl: './data-table.component.html', standalone: false })
export class DataTableComponent { @Input() columns: string[] = []; @Input() dataSource: any[] = []; }
