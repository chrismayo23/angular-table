import { Component, Input } from '@angular/core';
import { DataModel } from '../data/data.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() public data: DataModel[];
  @Input() public columns: string[];
  public dimensions = ['length', 'width', 'height'];
}
