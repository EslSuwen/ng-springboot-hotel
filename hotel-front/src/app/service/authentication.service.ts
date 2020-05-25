import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {throwError} from 'rxjs/internal/observable/throwError';
import {environment} from '../../environments/environment';
import {User} from '../dto/user';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
  withCredentials: true
};

@Injectable({providedIn: 'root'})
export class AuthenticationService {
  private tokenParsed: any;

  constructor(private http: HttpClient) {
  }

  login(id: string, pass: string): Observable<boolean> {
    return this.http.post<any>(`${environment.apiUrl}/auth/login`, JSON.stringify({
      userId: id,
      password: pass,
    }), httpOptions).pipe(
      tap(response => {
        if (response.success) {
          // login successful, store username and jwt token in local storage to keep user logged in between page refreshes
          const tokenParsed = this.decodeToken(response.data.token);
          const user: User = response.data.user;
          console.log(user);
          localStorage.setItem('currentUserInfo', JSON.stringify(user));
          localStorage.setItem('currentUser', JSON.stringify({
            userId: id,
            token: response.data.token,
            expire: JSON.parse(tokenParsed).exp,
            tokenParsed: tokenParsed
          }));
          return of(true);
        } else {
          return of(false);
        }
      }),
      catchError((err) => {
        console.error(err);
        return of(false);
      })
    );
  }

  getCurrentUser(): any {
    const userStr = localStorage.getItem('currentUser');
    const nowTime = new Date().getTime().toString().substr(0, 10);
    const user = JSON.parse(userStr);
    return userStr && user.expire > nowTime ? user : this.logout();
  }

  getCurrentUserInfo(): any {
    const userInfoStr = localStorage.getItem('currentUserInfo');
    return this.isLoggedIn() ? JSON.parse(userInfoStr) : '';
  }

  getToken(): string {
    const currentUser = this.getCurrentUser();
    return currentUser ? currentUser.token : '';
  }

  getUserId(): string {
    const currentUser = this.getCurrentUser();
    return currentUser ? currentUser.userId : '';
  }

  getUserName(): string {
    const currentUser = this.getCurrentUserInfo();
    return currentUser ? currentUser.name : '';
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentUserInfo');
  }

  isLoggedIn(): boolean {
    const token: string = this.getToken();
    return token && token.length > 0;
  }

  hasRole(role: string): boolean {
    const currentUser = this.getCurrentUser();
    if (!currentUser) {
      return false;
    }
    const authorities: string[] = this.getAuthorities(currentUser.tokenParsed);
    return authorities.indexOf('ROLE_' + role) !== -1;
  }

  decodeToken(token: string): string {
    let payload: string = token.split('.')[1];

    payload = payload.replace('/-/g', '+').replace('/_/g', '/');
    switch (payload.length % 4) {
      case 0:
        break;
      case 2:
        payload += '==';
        break;
      case 3:
        payload += '=';
        break;
      default:
        throwError('Invalid token');
    }

    payload = (payload + '===').slice(0, payload.length + (payload.length % 4));

    return decodeURIComponent(escape(atob(payload)));
  }

  getAuthorities(tokenParsed: string): string[] {
    return JSON.parse(tokenParsed).authorities;
  }
}
