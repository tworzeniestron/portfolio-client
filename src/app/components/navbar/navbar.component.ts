import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  containsMyProjects = false;
  showLoginForm = false;
  username = '';
  password = '';
  @ViewChild('loginForm') loginFormRef!: ElementRef;

  constructor(public authService: AuthService) {}

  ngAfterViewInit(): void {
    const bodyText = document.body.innerText;
    this.containsMyProjects = bodyText.includes('Moje projekty');
  }

  openLogin() {
    this.showLoginForm = true;
  }

  closeLogin() {
    this.showLoginForm = false;
  }

  login() {
    this.authService.login(this.username, this.password).subscribe({
      next: () => {
        this.showLoginForm = false;
        this.username = '';
        this.password = '';
        alert('Zalogowano!');
      },
      error: () => alert('Błędny login lub hasło')
    });
  }

  logout() {
    this.authService.logout();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (
      this.showLoginForm &&
      this.loginFormRef &&
      !this.loginFormRef.nativeElement.contains(event.target)
    ) {
      this.closeLogin();
    }
  }
}

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('jwt_token');
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(request);
  }
}
