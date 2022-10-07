import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Period, Properties, WeatherResponse } from '../models/weather-forecast-api-model';

@Injectable({
  providedIn: 'root',
})
export class WeatherForecastApiService {
  constructor(private httpClient: HttpClient) {}

  fetchWeatherForecast(): Observable<WeatherResponse> {
    return this.httpClient.get<WeatherResponse>(
      'https://api.weather.gov/gridpoints/ARX/21,73/forecast'
    );
  }
}
