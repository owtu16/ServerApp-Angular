import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ServerListComponent } from './server-list/server-list.component';
import { AddServerComponent } from './add-server/add-server.component';
import { ClusterComponent } from './cluster/cluster.component';
import { ServerByLocationComponent } from './server-by-location/server-by-location.component';
import { UpdateServerComponent } from './update-server/update-server.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'cluster', component: ClusterComponent},
  {path: 'serverByLocation/:location', component: ServerByLocationComponent},
  {path: 'findall', component: ServerListComponent},
  {path: 'add', component: AddServerComponent},
  {path: 'update', component: UpdateServerComponent},
  
  {path: '**', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
