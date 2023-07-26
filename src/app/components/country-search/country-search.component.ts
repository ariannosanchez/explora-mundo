import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Country } from 'src/app/models/country.interface';
import { CountryApiService } from 'src/app/service/country-api.service';

@Component({
  selector: 'app-country-search',
  templateUrl: './country-search.component.html',
  styleUrls: ['./country-search.component.css']
})
export class CountrySearchComponent implements OnInit {
  searchForm!: FormGroup;
  countries: Country[] = [];

  constructor(private formBuilder: FormBuilder, private countryApi: CountryApiService) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      countryName: ['']
    });
  }

  searchCountry(): void {
    const name = this.searchForm.value.countryName;
    if (name.trim() === '') {
      return;
    }

    this.countryApi.searchCountryByName(name).subscribe(
      (data) => {
        console.log(data);
        if (data.length > 0) {
          this.countries = [data[0]];
        } else {
          this.countries = [];
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSubmit(): void {
    this.countries = [];
    this.searchCountry();
  }
}