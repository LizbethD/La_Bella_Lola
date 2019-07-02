import {NgModule} from '@angular/core';

import { AppComponent } from '../app.component';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from '../components/users/users.component';
import { RolesComponent} from '../components/roles/roles.component';
import { ImagesComponent } from '../components/images/images.component';
import { UserComponent } from '../user/user.component';
import { Route } from '@angular/compiler/src/core';


const routes: Routes = [
    {path:'home', component: AppComponent},
    {path: 'roles', component: RolesComponent},
    {path: 'users', component: UsersComponent},
    {path: 'publicidad', component: ImagesComponent},
    {path: 'inicio', component: UserComponent}

]


@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports:[RouterModule],
})
export class RouteModule {}