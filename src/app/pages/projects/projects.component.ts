import { Component } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Repozytorium na GitHubie',
      description: 'Repozytorium na GitHubie zawierające moje projekty i kod źródłowy.',
      image: 'assets/img/logo.svg',
      githubUrl: 'https://github.com/tworzeniestron?tab=repositories'
    }
  ];
}