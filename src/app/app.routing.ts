import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { ProjectGalleryComponent } from './project-gallery/project-gallery.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { AdminComponent} from './admin/admin.component';

const APP_ROUTES: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'project-gallery', component: ProjectGalleryComponent},
  {path: 'project-detail', component: ProjectDetailComponent},
  {path: 'admin', component: AdminComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
