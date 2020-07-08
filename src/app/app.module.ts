import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { AddServerComponent } from './add-server/add-server.component';
import { ClusterComponent } from './cluster/cluster.component';
import { ServerListComponent } from './server-list/server-list.component';
import { ServerByLocationComponent } from './server-by-location/server-by-location.component';
import { ServerDetailsComponent } from './server-details/server-details.component';
import { UpdateServerComponent } from './update-server/update-server.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddServerComponent,
    ClusterComponent,
    ServerListComponent,
    ServerByLocationComponent,
    ServerDetailsComponent,
    UpdateServerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
