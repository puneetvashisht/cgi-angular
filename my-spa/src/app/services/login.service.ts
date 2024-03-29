import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthData } from 'src/app/auth-data.model';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private isAuthenticated = false;
  private authStatusListener = new Subject<boolean>();
  private token: string | undefined;
  constructor(private http: HttpClient) {}
  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getToken() {
    return this.token;
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode.default(token);
    } catch (Error) {
      return null;
    }
  }

  login(email: string, password: string) {
    const authData: AuthData = { email, password };

    this.http
      .get('http://localhost:8000/login')
      .subscribe((res: any) => {
        let response = res.auth;
        this.isAuthenticated = response.success;
        this.authStatusListener.next(true);
        const token = response.token;
        this.token = token;
        localStorage.setItem('token', token);
        const tokenInfo = this.getDecodedAccessToken(token);
        console.log(tokenInfo);
      });
  }
}
