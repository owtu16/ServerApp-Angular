import { Component, OnInit } from '@angular/core';
import { ServerService } from '../services/server.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Server } from '../classes/Server';

@Component({
  selector: 'app-cluster',
  templateUrl: './cluster.component.html',
  styleUrls: ['./cluster.component.css']
})
export class ClusterComponent implements OnInit {
  _postsArray: Array<any> = [];
  // keys: Observable<Server>;
  // keys: Array<any> = [];
  keysStringified: any;

  constructor(private serverService: ServerService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
    // this.keysStringified = JSON.parse(this.keys);
    // console.log("Stringified: ", this.keysStringified);
  }

  // reloadData(){
    
  //   // this.keys = this.serverService.getCluster();
  //   this.serverService.getCluster().subscribe((data: any) => {
  //     console.log(data);
  //     Object.keys(data).forEach(key => {
  //       var obj1 = data[key];
  //       console.log('key is ' + key);
  //       Object.keys(obj1).forEach(key1 => {
  //         console.log('key inner is ' + key1 + ' val is ' + obj1[key1]);
  //         this._postsArray.push({k: key, l: key1, m: obj1[key1]});
  //       })
  //     });
  //     console.log('array is ' + this._postsArray.toString());
  //   })
  // }

  reloadData(){
    this.serverService.getCluster()
    .subscribe((data: any) => {
      console.log(data);
      Object.keys(data).forEach(key => {
        // var obj1 = data[key];
        console.log('key is ' + key);
        console.log('value is ' + data[key]);
        this._postsArray.push({k: key, m: data[key]});
      })
    });
    console.log('array is ' + this._postsArray.toString());
  }

  
}
