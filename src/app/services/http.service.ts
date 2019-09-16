import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {

  private options = {
    headers: new HttpHeaders()
                            .set('Content-Type', 'application/json')
  };

  constructor(private http: HttpClient) { }
  
  get(url) {
    return this.http.get(url, this.options)
    // .catch(this.handleError);
  }

  post(url, data) {
    return this.http.post(url, data, this.options)
    // .catch(this.handleError);
  }

  put(url, data) {
    return this.http.put(url, data, this.options)
  }

  delete(url) {
    return this.http.delete(url, this.options)
  }

}
