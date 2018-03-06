import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import{ PostsComponent } from './views/posts/posts.component';
import{ MapComponent } from './views/map/map.component';
import { AuthGuard } from './services/auth-guard.service';

const appRoutes: Routes = [
    
    {
        path: '',
        canActivate: [AuthGuard],
        component: DashboardComponent
    },
    {
        path: 'Login',        
        component: LoginComponent
    },
    {
        path: 'dashboard',
        canActivate: [AuthGuard],
        component: DashboardComponent
    },
    {
        path: 'posts',
        canActivate: [AuthGuard],
        component: PostsComponent
    },
    {
        path: 'map',
        canActivate: [AuthGuard],
        component: MapComponent
    }
];

export const AppRoutes = RouterModule.forRoot(appRoutes);