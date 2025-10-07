import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CoursesService } from 'src/app/services/courses.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
      trigger('openClose', [ 
        state('open', style({
          height: '200px', opacity: 1, backgroundColor: 'lightblue'
        })),
        state('closed', style({
          height: '0px', opacity: 0, overflow: 'hidden'
        })),
        transition('open <=> closed', [
          animate('0.4s ease-in-out')
        ])
      ])
    ]
  })

export class HomeComponent implements OnInit {
  courses: string[] = [];
  showScrollTop = false;
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.coursesService.getCourses().subscribe(data => this.courses = data);
    window.addEventListener('scroll', this.onWindowScroll.bind(this));
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollTop = window.pageYOffset > 500;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
