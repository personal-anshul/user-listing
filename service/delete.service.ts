import {Injectable} from "angular2/core"
import {Http} from 'angular2/http'
import 'rxjs/Rx'

@Injectable()
export class DeleteService{
   endpoint_url: string = "http://127.0.0.1:8085/";

   constructor(private http: Http){
     this.http = http;
   }

   deleteItem(region: string){
     return this.http.get(this.endpoint_url + region).map(res => res);
   }
}
