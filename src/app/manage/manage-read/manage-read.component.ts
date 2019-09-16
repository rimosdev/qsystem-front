import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-manage-read',
  templateUrl: './manage-read.component.html',
  styleUrls: ['./manage-read.component.scss']
})
export class ManageReadComponent implements OnInit {
  @Input() _data_table;
  data_table;

  constructor() { }

  ngOnInit() {
    this.data_table = this._data_table;
  }

}
