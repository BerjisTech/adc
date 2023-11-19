import { Injectable } from '@angular/core';
import countries from './countries.json';


@Injectable({
  providedIn: 'root'
})
export class RegionsService {

  constructor() { }

  getCountries(searchString: string) {
    return countries.filter(country => country.name.toLowerCase().includes(searchString.toLowerCase()))
  }
}
