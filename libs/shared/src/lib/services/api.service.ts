import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getLocalData<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(url);
  }

  getApiData<T>(apiUrl: string): Observable<T> {
    return this.httpClient.get<T>(apiUrl);
  }
}
