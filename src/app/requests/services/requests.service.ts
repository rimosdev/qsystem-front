import { Injectable } from '@angular/core';
import { HttpService } from './../../services/http.service';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private httpService: HttpService) { }
  getRequests() {
    return this.httpService.get(`${environment.url.requests}`);
  }
}
