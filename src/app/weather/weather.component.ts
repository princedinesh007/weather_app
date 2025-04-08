import { Component } from '@angular/core';
import { WeatherapiService } from '../weatherapi.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent {
  constructor(public weatherApi: WeatherapiService) {}

  WeatherData:any;
  imageUrl:any;
  city:any='';
  ishow=false;

  weatherImages = {
    sunny:
      'https://images.unsplash.com/photo-1572966101025-e199cab72196?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    cloudy:
      'https://plus.unsplash.com/premium_photo-1674475564066-f063d788abbe?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rainy:
      'https://images.unsplash.com/photo-1603041592657-0709d7796f44?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    foggy:
      'https://images.unsplash.com/photo-1524435497396-7bc897fa8d97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    snowy:
      'https://images.unsplash.com/photo-1463171515643-952cee54d42a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    stromy:
      'https://images.unsplash.com/photo-1696960402886-9f3cd99cc07d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  };
  ngOnInit() {
    this.getWeatherData(this.city);
  }

  getWeatherData(city: any) {
    if(this.city==''||this.city.length==0 ||this.city=='undefined')
    {
      this.ishow=false;
      return;
    }
    this.weatherApi.getWeatherDetails(city).subscribe((res: any) => {
      this.WeatherData=res.current;
      console.log(this.WeatherData)
      this.ishow=true;
      this.imageUrl=this.getWeatherImages(this.WeatherData.weather_code)
     
    });
    this.ishow=false;
  }

  getWeatherImages(code: any) {
    if (code <= 143) {
      return this.weatherImages.sunny;
    } else if (code <= 200) {
      return this.weatherImages.rainy;
    } else if (code <= 230) {
      return this.weatherImages.snowy;
    } else if (code <= 260) {
      return this.weatherImages.foggy;
    }
    return this.weatherImages.stromy;
  }
}
