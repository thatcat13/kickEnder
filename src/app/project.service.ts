import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.projects = database.list('projects')
   }

   getProjects() {
     return this.projects;
   }

   getProjectById(projectId) {
     return this.database.object('projects/' + projectId);
   }

   addProject(newProject: Project) {
     this.projects.push(newProject);
   }

   updateProject(localUpdatedProject){
     let projectEntryInFirebase = this.getProjectById(localUpdatedProject.$key);
     projectEntryInFirebase.update({title: localUpdatedProject.title,
                                 description: localUpdatedProject.description,
                                 percentFunded: localUpdatedProject.percentFunded,
                                image: localUpdatedProject.image});
   }
   //takes a local copy of the Project as an argument; this local version has been edited with two-way binding edit form; calls existing getProjectById() method to locate Firebase entry corresponding to this Project; assign Firebase entry to the variable projectEntryInFirebase; getProjectById() requires Firebase $key as an argument so localUpdatedProject.$key is called within the argument to getProjectById(); after database entry is located, call AngularFire's update() method on projectEntryInFirebase; update Project's new properties, formatted as key-value pairs.

   deleteProject(localProjectToDelete){
    let projectEntryInFirebase = this.getProjectById(localProjectToDelete.$key);
    console.log(projectEntryInFirebase)
    projectEntryInFirebase.remove();
}

}
