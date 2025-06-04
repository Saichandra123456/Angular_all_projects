// file.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  private baseUrl = 'http://your-flask-server/api'; // Replace with your Flask API endpoint

  constructor(private http: HttpClient) {} 

  // Define your API calls here
}
