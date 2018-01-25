import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css'],
  providers: [ProjectService]
})

export class EditProjectComponent implements OnInit {
  @Input() selectedProject;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    console.log(this.selectedProject)
  }

  beginUpdatingProject(projectToUpdate){
    this.projectService.updateProject(projectToUpdate);
  }
  //triggered when the update button registers a click event; this event calls the updateProject() method, passing in the locally-updated Project
  //updateProject() then locates and updates Project's Firebase entry

  beginDeletingProject(projectToDelete){
    if(confirm("Are you sure you want to delete this project from the inventory?")){
      console.log(projectToDelete)
      this.projectService.deleteProject(projectToDelete);
    }
  }

}
