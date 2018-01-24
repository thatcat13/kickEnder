import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-gallery',
  templateUrl: './project-gallery.component.html',
  styleUrls: ['./project-gallery.component.css'],
  providers: [ProjectService]
})
export class ProjectGalleryComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;
  constructor(private router: Router, private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  goToDetailPage(clickedProject) {
    this.router.navigate(['projects', clickedProject.$key])
  }

}
