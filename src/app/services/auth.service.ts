import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticated = false;

  login(username: string, password: string): boolean {
    if (username === 'rastmobile' && password === 'rastmobile') {
      this.authenticated = true;
      return true;
    }
    return false;
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  logout(): void {
    this.authenticated = false;
  }
}
