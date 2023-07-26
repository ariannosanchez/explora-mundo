import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CountrySearchComponent } from './components/country-search/country-search.component';
import { CapitalSearchComponent } from './components/capital-search/capital-search.component';
import { ContinentSearchComponent } from './components/continent-search/continent-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountrySearchComponent,
    CapitalSearchComponent,
    ContinentSearchComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule, // Agrega este módulo
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
