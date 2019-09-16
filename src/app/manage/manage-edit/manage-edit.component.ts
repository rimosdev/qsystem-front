import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { environment } from './../../../environments/environment';
import { DataTablesService } from '../services/data-tables.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-edit',
  templateUrl: './manage-edit.component.html',
  styleUrls: ['./manage-edit.component.scss']
})
export class ManageEditComponent implements OnInit {
  @Input() _data_table;
  data_table; // Temporal information
  data_types = environment.data_types;
  _data_new = [];
  @Output() field_save = new EventEmitter();

  constructor(private dataTableService: DataTablesService, private router: Router) { }

  ngOnInit() {
    this.data_table = Object.assign({}, this._data_table);
    console.log(this.data_table);
  }

  add() {
    this._data_new.push({'value':'', 'description': ''});
  }

  save() {
    this.dataTableService.saveDataTable(this.data_table.id, this.data_table).subscribe(res => {
      console.log(res);
      this.router.navigate(['/manage/read/' + this.data_table.id]);
      this.field_save.emit(true);
    },
    error => {
      alert('Ocurrió un error');
      console.log('Error');
    }
    );
  }

}
