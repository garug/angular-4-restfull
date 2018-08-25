import { Country } from './Country/Country';
import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private apiUrl: string = 'https://restcountries.eu/rest/v2/';
  countries: any[];
  country: Country = new Country;

  constructor(private _http: Http) {
    this.getCountries();
  }

  private getCountries() {
    return this._http.get(this.apiUrl + 'all')
      .map((res: Response) => res.json())
      .subscribe(countries => {
        console.log(countries);
        this.countries = countries;
      })
  }

  getCountry(country) {
    for(var i = 0; i < this.countries.length; i++) {      
      if(this.countries[i].name === country){
        this.country.name = this.countries[i].name;
        this.country.area = this.countries[i].area;
        this.country.subregion = this.countries[i].subregion;
        this.country.population = this.countries[i].population;
        this.country.language = this.countries[i].languages[0].name;
        this.country.flag = this.countries[i].flag;
        break;
      }
    }
  }

}
