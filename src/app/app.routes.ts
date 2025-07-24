import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component/home.component';
import { LoginComponent } from './pages/login.component/login.component';
import { DetailComponent } from './pages/detail.component/detail.component';

export const routes: Routes = [
    {
        path:"",
        component: HomeComponent
    },
    {
        path:"home",
        component: HomeComponent
    },
    {
        path:"login",
        component: LoginComponent
    },
     {
        path:"detail/:id",
        component: DetailComponent
    }
];
