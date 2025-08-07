import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface CourseDto {
    courses: string[];
}

@Injectable({
    providedIn: 'root'
})
export class CoursesService {
    private apiUrl = '/api/courses';

    constructor(private http: HttpClient) { }

    getCourses(): Observable<string[]> {
    console.log('Pobieranie z URL:', this.apiUrl);
    return this.http.get<CourseDto>(this.apiUrl).pipe(
        map(response => response.courses)
        );
    }
}
