import { Routes } from '@angular/router';
import { HomeComponent } from './features/components/home/home.component';
import { UserListComponent } from './features/components/user-list/user-list.component';
import { UserPostsComponent } from './features/components/user-posts/user-posts.component';
import { WildCardComponent } from './features/components/wild-card/wild-card.component';
import { UserCardComponent } from './shared/components/user-card/user-card.component';
import { LoginComponent } from './features/components/login/login.component';
import { authGuard } from './core/guard/auth.guard';

export const routes: Routes = [
    {path:'' , redirectTo:'home', pathMatch:'full'},
    {path:'login' , component:LoginComponent , title:'Home'},
    {path:'home' , component:HomeComponent , canActivate:[authGuard] ,title:'Home'},
    {path:'UserList' , component:UserListComponent,canActivate:[authGuard] , title:'User List'},
    {path:'UserCard' , component:UserCardComponent,canActivate:[authGuard] , title:'User Card'},
    {path:'UserPosts/:id' , component:UserPostsComponent,canActivate:[authGuard] , title:'User Posts'},
    {path:'**' , component:WildCardComponent , title:'404 page'}
];
