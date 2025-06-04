import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) { }
  url="http://localhost:3000/users";
  // getUsers(){
  //   return this.http.get<Users[]>(this.url)
  // }
}
