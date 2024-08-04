import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DepartmentComponent } from './pages/department/department.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"department",component:DepartmentComponent},
    {path:"aboutus",component:AboutusComponent},
    {path:"services",component:ServicesComponent},
    {path:"contact",component:ContactComponent}
];
