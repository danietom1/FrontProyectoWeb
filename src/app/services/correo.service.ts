import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Caso} from '../model/caso';
import {strict} from 'assert';

const baseUrl = 'http://localhost:8080/proyecto/msg';

@Injectable({
  providedIn: 'root'
})
export class CorreoService {

  constructor(private http: HttpClient) { }

  get(data: any): Observable<any> {
    return this.http.put<string>(baseUrl, data);
  }
}
