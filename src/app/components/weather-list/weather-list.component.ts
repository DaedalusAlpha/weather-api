import { Component, OnInit } from '@angular/core';
import { Period, Properties } from 'src/app/models/weather-forecast-api-model';
import { WeatherForecastApiService } from 'src/app/services/weather-forecast-api.service';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css'],
})
export class WeatherListComponent implements OnInit {
  periods: Period[] = [];

  constructor(private weatherForecastApiService: WeatherForecastApiService) {}

  ngOnInit(): void {
    this.weatherForecastApiService
      .fetchWeatherForecast()
      .subscribe((weatherResponse) => {
        this.periods = weatherResponse?.properties?.periods;
      });
  }
}
