import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{employees} from './employees'
@Injectable({
  providedIn: 'root'
})
export class RestService {
  // employees=[] as any;
private url="./assets/data/employee.json"
  constructor(private http:HttpClient) { }
  getEmployee():Observable<employees[]>{
   return this.http.get<employees[]>(this.url);
    
  }
}
