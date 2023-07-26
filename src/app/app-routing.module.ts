import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CountrySearchComponent } from './components/country-search/country-search.component';
import { CapitalSearchComponent } from './components/capital-search/capital-search.component';
import { ContinentSearchComponent } from './components/continent-search/continent-search.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'country', component: CountrySearchComponent },
  { path: 'capital', component: CapitalSearchComponent },
  { path: 'continent', component: ContinentSearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
