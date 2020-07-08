import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ServerService {
  
  // private baseUrl = 'http://localhost:8080/servers';
  private baseUrl = environment.serverAPIUrl;

  constructor(private http: HttpClient) { }

  getServer(ip:string): Observable<any>{
    return this.http.get(`${this.baseUrl}/${ip}`);
  }

  addServer(server: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl+'/save'}`, server);
  }

  updateServer(value: any): Observable<Object>{
    return this.http.put(`${this.baseUrl+'/update'}`,value);
  }

  deleteServer(ip: string): Observable<any>{
    return this.http.delete(`${this.baseUrl+'/delete'}/${ip}`, {responseType: 'text'});
  }

  getCluster(): any{
    return this.http.get(`${this.baseUrl + '/cluster'}`);
  }

  serversByLocation(): Observable<any>{
    return this.http.get(`${this.baseUrl + '/showServersByLocation'}/${location}`);
  }

  getServerList(): Observable<any>{
    return this.http.get(`${this.baseUrl+'/findall'}`);
  }
}
