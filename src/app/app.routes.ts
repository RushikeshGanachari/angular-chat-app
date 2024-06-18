import { authGuard } from './auth.guard';
import { Routes } from '@angular/router';
import { ChatComponent } from './pages/chat/chat.component';

export const routes: Routes = [
    {
        path:'chat', 
        canActivate:[authGuard],
        loadComponent:() => import('./pages/chat/chat.component').then((con) => con.ChatComponent)
    },
    {
        path:'login',
        loadComponent:() => import('./pages/login/login.component').then((con)=> con.LoginComponent)
    },
    {
        path:'',
        loadComponent:() => import('./pages/login/login.component').then((con)=> con.LoginComponent)
    }
];
