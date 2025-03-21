import { Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: '**', component: ErrorComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
