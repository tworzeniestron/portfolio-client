import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private apiUrl = '/api/auth/login';

    constructor(private http: HttpClient) {}

    login(username: string, password: string) {
        return this.http.post<{ token: string }>(this.apiUrl, { username, password })
        .pipe(
            tap(response => {
            localStorage.setItem('jwt_token', response.token);
            })
        );
    }

    logout() {
        localStorage.removeItem('jwt_token');
    }

    isLoggedIn(): boolean {
        return !!localStorage.getItem('jwt_token');
    }
}