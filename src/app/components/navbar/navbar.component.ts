import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  containsMyProjects = false; // flaga zmiany tła

  ngAfterViewInit(): void {
    const bodyText = document.body.innerText; // pobiera całą treść body
    this.containsMyProjects = bodyText.includes('Moje projekty'); // sprawdza frazę
  }
}
