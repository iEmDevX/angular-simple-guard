import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  public isLoggedIn = false;
  public redirectUrl: string;

  constructor(
    private router: Router,
  ) { }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      this.isLoggedIn = true;
      return true;
    }
    return false;
  }

  login(): Observable<boolean> {
    return new Observable<boolean>(observer => {
      setTimeout(() => {
        this.isLoggedIn = true;
        localStorage.setItem('token', 'xxx');
        observer.next(this.isLoggedIn);
      }, 1000);
    });
  }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
