import { HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherapiService {

  constructor(public http:HttpClient) { }
 access_key='3b5bce5be1362fc71904bba0486568bd'

 weatherUrl=`http://api.weatherstack.com/current`;
  getWeatherDetails(data:any)
  {
    let params=new HttpParams();
    params=params.set('access_key',this.access_key);
    params=params.set('query',data)
    return this.http.get(this.weatherUrl,{params});
  }
}
