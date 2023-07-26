import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Country } from 'src/app/models/country.interface';
import { CountryApiService } from 'src/app/service/country-api.service';

@Component({
  selector: 'app-capital-search',
  templateUrl: './capital-search.component.html',
  styleUrls: ['./capital-search.component.css']
})
export class CapitalSearchComponent implements OnInit {
  searchForm!: FormGroup;
  capitals: Country[] = [];

  constructor(private formBuilder: FormBuilder, private countryApi: CountryApiService) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      capitalName: ['']
    });
  }

  searchCapitals(): void {
    const name = this.searchForm.value.capitalName;
    if (name.trim() === '') {
      return;
    }

    this.countryApi.searchCountryByCapital(name).subscribe(
      (data) => {
        console.log(data);
        if (data.length > 0) {
          this.capitals = [data[0]];
        } else {
          this.capitals = [];
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSubmit(): void {
    this.capitals = [];
    this.searchCapitals();
  }
}

