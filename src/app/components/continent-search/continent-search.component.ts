import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Country } from 'src/app/models/country.interface';
import { CountryApiService } from 'src/app/service/country-api.service';

@Component({
  selector: 'app-continent-search',
  templateUrl: './continent-search.component.html',
  styleUrls: ['./continent-search.component.css']
})
export class ContinentSearchComponent implements OnInit {
  searchForm!: FormGroup;
  continents: Country[] = [];

  constructor(private formBuilder: FormBuilder, private countryApi: CountryApiService) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      continentName: ['']
    });
  }

  searchContinents(): void {
    const name = this.searchForm.value.continentName;
    if (name.trim() === '') {
      return;
    }

    this.countryApi.searchCountryByContinent(name).subscribe(
      (data) => {
        console.log(data);
        this.continents = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSubmit(): void {
    this.continents = [];
    this.searchContinents();
  }
}
