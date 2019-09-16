import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {

  @Input() is_edit: boolean;
  @Input() _title;
  @Input() _keys;
  @Input() _data;
  @Input() _data_new;

  constructor() { }

  ngOnInit() {
  }

}
