import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:4000/users';

  constructor(private http: HttpClient) {}

  signup(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }
 login(email: string, password: string): Observable<any> {
  return this.http.get(`${this.apiUrl}?email=${email}&password=${password}`);
}  
  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }
}

