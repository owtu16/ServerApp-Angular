import { Component, OnInit } from '@angular/core';

import { ServerService } from '../services/server.service';
import { Router } from '@angular/router';
import { Server } from '../classes/Server';

@Component({
  selector: 'app-add-server',
  templateUrl: './add-server.component.html',
  styleUrls: ['./add-server.component.css']
})
export class AddServerComponent implements OnInit {

  server: Server = new Server();
  submitted = false;

  constructor(private serverService: ServerService, private router: Router) { }

  ngOnInit() {
  }

  newServer(): void{
    this.submitted = false;
    this.server = new Server();
  }

  save(){
    this.serverService.addServer(this.server)
    .subscribe(data=> console.log(data), error=>console.log(error));
    this.server = new Server();
    this.goToList();
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  goToList(){
    this.router.navigate(['/findall']);
  }

}
