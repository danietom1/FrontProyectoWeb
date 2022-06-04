import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

const baseUrl = 'http://localhost:8080/proyecto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  getUser(Email: String): Observable<User> {
    return this.http.get<User>(`${baseUrl}/user/${Email}`);
  }

}
