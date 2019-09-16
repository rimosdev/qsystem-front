import { Injectable } from '@angular/core';
import { HttpService } from './../../services/http.service';
import { environment } from './../../../environments/environment';

@Injectable()
export class DataTablesService {

  constructor(private httpService: HttpService) { }

  getDataTables() {
    return this.httpService.get(`${environment.url.data_tables}`);
  }
  getDataTable(id) {
    return this.httpService.get(`${environment.url.data_tables}/${id}`);
  }
  saveDataTable(id, values) {
    return this.httpService.put(`${environment.url.data_tables}/${id}`, values);
  }
}
