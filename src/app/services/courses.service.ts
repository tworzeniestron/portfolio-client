import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export interface CourseDto {
    courses: string[];
}

@Injectable({
    providedIn: 'root'
})
export class CoursesService {
    private apiUrl = 'https://portfolioapi-production-0bd2.up.railway.app/api/courses';

    constructor(private http: HttpClient) { }

    getCourses(): Observable<string[]> {
    return this.http.get<CourseDto>(this.apiUrl).pipe(
        map(response => response.courses)
        );
    }
}

export class AuthService {

    constructor(private http: HttpClient) { }

    login(username: string, password: string): Observable<void> {
        return this.http.post<{ token: string }>('/api/auth/login', { username, password })
            .pipe(
                tap(response => {
                    localStorage.setItem('jwt_token', response.token);
                }),
                map(() => undefined)
            );
    }
}
