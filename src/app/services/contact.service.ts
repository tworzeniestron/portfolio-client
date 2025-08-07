import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface CourseDto {
  courses: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http: HttpClient) { }
}

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private apiUrl = 'http://localhost:5051/api/courses'; // Sprawdź czy backend działa na tym porcie

  constructor(private http: HttpClient) { }

  getCourses(): Observable<string[]> {
    return this.http.get<CourseDto>(this.apiUrl).pipe(
      map(response => response.courses)
    );
  }
}