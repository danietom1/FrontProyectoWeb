import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Caso } from '../model/caso';

const baseUrl = 'http://localhost:8080/proyecto';

@Injectable({
  providedIn: 'root'
})
export class CasoService {

  constructor(private http: HttpClient) { }

  getAll(Email: String): Observable<Caso[]> {
    return this.http.get<Caso[]>(`${baseUrl}/casos/${Email}`);
  }

  get(id: String): Observable<Caso> {
    return this.http.get<Caso>(`${baseUrl}/caso/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/caso`, data);
  }

  update(id: string, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/caso/${id}`, data);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${baseUrl}/caso/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

}
