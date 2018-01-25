import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProjectService]
})
export class AdminComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  submitForm(title: string, description: string, percentFunded: number, dollarAmt: string, image: string, category: string) {
    let newProject: Project = new Project(title, description, percentFunded, parseInt(dollarAmt), image, category);
    this.projectService.addProject(newProject);
  }
}
