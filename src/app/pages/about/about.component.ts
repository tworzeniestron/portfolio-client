import { Component } from '@angular/core';
import { slideInAnimation } from '../../../../route-animations';

@Component({
  standalone: true,
  imports: [],
  animations: [slideInAnimation],
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
