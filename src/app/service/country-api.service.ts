import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryApiService {

  private apiUrl = 'https://restcountries.com/v3.1/';

  constructor(private http: HttpClient) { }

  searchCountryByName(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}name/${name}`);
  }

  searchCountryByCapital(capital: string): Observable<any> {
    return this.http.get(`${this.apiUrl}capital/${capital}`);
  }

  searchCountryByContinent(continent: string): Observable<any> {
    return this.http.get(`${this.apiUrl}region/${continent}`);
  }
}
