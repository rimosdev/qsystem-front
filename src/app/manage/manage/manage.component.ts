import { Component, OnInit } from '@angular/core';
import { DataTablesService } from '../services/data-tables.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {

  public data_tables = [];
  public action_type;
  selected_data_table;

  constructor(private dataTablesService: DataTablesService, private route:ActivatedRoute, private router:Router) {
  }

  ngOnInit() {
    this.getDataTables();  
  }

  getDataTables() {
    this.data_tables = [];
    this.selected_data_table = null;
    this.dataTablesService.getDataTables().subscribe(res => {
      Object.values(res).map(resultado => {
        this.data_tables.push(resultado);
      });
      console.log(this.data_tables);
      this.checkActionSelected();
      this.checkIdSelected();
    }, error => {
      console.log('Error');
    });  
  }

  checkActionSelected() {
    this.action_type = this.route.snapshot.params.action;

    this.route.paramMap.subscribe(params => {
      this.action_type = this.route.snapshot.params.action;
    });
  }

  checkIdSelected() {
    this.data_tables.forEach((d) => {
      if (d.id == this.route.snapshot.params.id) {
        this.selected_data_table = null;
        this.selected_data_table = d;
      }
    });

    this.route.paramMap.subscribe(params => {
      this.selected_data_table = null;
      console.log(this.route.snapshot.params.id);
      setTimeout(() => {
        this.data_tables.forEach((d) => {
          if (d.id == this.route.snapshot.params.id) {
            this.selected_data_table = d;
          }
        });
      }, 1);
    });
  }

  field_save() {
    // Need to update values
    this.getDataTables();
  }

}
