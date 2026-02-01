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

signup(user: any){
  return this.http.post("http://localhost:4000/signup", user);
}


login(email:string, password: string){
  return this.http.post("http://localhost:4000/login", {
    email,
    password
  });
} 
  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }
}

