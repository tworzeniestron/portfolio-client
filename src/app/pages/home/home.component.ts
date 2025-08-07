import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  courses: string[] = [
    'Angular i Java Spring Od zera do Fullstack developera (Udemy)',
    'Praktyczny kurs ASP.NET Core REST Web API (C#) (Udemy)',
    'ASP.NET Core MVC - praktyczny kurs od podstaw (C# .NET 7) (Udemy)',
    'Kompletny kurs C# dla developerów .NET (Udemy)',
    'Microsoft Azure - praktyczny kurs dla developerów .NET (Udemy)',
    'Kurs Tworzenia Stron WWW w HTML i CSS od Podstaw do Eksperta (Udemy)',
    'CCNAv7: Enterprise Networking, Security, and Automation (WWSI)'
  ];
  isLoading = false;
  error: string | null = null;

  ngOnInit(): void {} 
}
