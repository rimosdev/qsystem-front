import { Component, OnInit } from '@angular/core';
import { RequestsService } from './../services/requests.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {

  data_table;
  filtered_data_table;
  status = ['All', 'Pending', 'Approved', 'Denied'];
  selected_status = 'All';

  constructor(private requestService: RequestsService) { }

  ngOnInit() {
    this.getRequests();
  }

  getRequests() {
    this.requestService.getRequests().subscribe(res => {
      this.data_table = [];
      Object.values(res).map(resultado => {
        this.data_table.push(resultado);
      });
      this.doFilterStatus('All');
      console.log(this.data_table);
    }, error => {
      console.log('Error');
    });  
  }

  doFilterStatus(_status) {
    this.filtered_data_table = null;
    setTimeout(() => {
      this.selected_status = _status;
      if(_status == 'All') {
        this.filtered_data_table = this.data_table;
      }
      else {
        this.filtered_data_table = this.data_table.filter(data => data.status == _status );
      }
      console.log(this.filtered_data_table);
      
    }, 1);
    
  }

}
