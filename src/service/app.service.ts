import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private jsonFilePath = '/assets/list.json';

  constructor(private http: HttpClient) { 
    
  }

  getNotes():Observable<any> {
    return this.http.get(this.jsonFilePath);
  }

}