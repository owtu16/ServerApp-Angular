import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ServerService } from '../services/server.service';
import { Server } from '../classes/Server';

@Component({
  selector: 'app-update-server',
  templateUrl: './update-server.component.html',
  styleUrls: ['./update-server.component.css']
})
export class UpdateServerComponent implements OnInit {

  ip: string;
  server: Server;

  constructor(private route: ActivatedRoute, private router: Router, private serverService: ServerService) { }

  ngOnInit() {
    this.server = new Server();

    this.ip = this.route.snapshot.params['ip'];

    this.serverService.getServer(this.ip)
    .subscribe(data=>{
      console.log(data)
      this.server = data;
    }, error => console.log(error));
  }

  updateServer(){
    this.serverService.updateServer(this.server)
    .subscribe(data => console.log(data), error => console.log(error));
    this.server = new Server();
    this.goToList();
  }

  onSubmit(){
    this.updateServer();
  }

  goToList(){
    this.router.navigate(['/findall']);
  }

}
