import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Server } from '../classes/Server';
import { ServerService } from '../services/server.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})
export class ServerListComponent implements OnInit {

  servers : Observable<Server[]>;

  constructor(private serverService: ServerService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.servers = this.serverService.getServerList();
  }

  deleteServer(ip: string){
    this.serverService.deleteServer(ip)
    .subscribe(
      data=>{
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }

  // serverDetails(id:number){
  //   this.router.navigate(['details',id]);
  // }

}
