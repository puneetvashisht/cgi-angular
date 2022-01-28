import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthData } from '../auth-data.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isAuthenticated : boolean = false;

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    const authData: AuthData = { email, password };
    console.log(authData)
    return this.http.get('http://localhost:8000/login')
      
  }
}
