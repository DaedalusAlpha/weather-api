import { Component, Input, OnInit } from '@angular/core';
import { Period } from 'src/app/models/weather-forecast-api-model';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css'],
})
export class WeatherForecastComponent implements OnInit {
  @Input() period?: Period;
  constructor() {}

  ngOnInit(): void {}
}
