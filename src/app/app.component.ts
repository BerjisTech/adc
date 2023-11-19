import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RegionsService } from './services/data/regions.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'adc';

  constructor(private regionsService: RegionsService) { }

  @ViewChild('countrySearchInput', { static: false }) countrySearchInputRef!: ElementRef<HTMLInputElement>;
  
  countries: any[] = [];
  selectCountry = '';

  ngOnInit() {
    
  }

  updateCountryValue(country: any) {
    this.selectCountry = country.code3;
    this.countrySearchInputRef.nativeElement.value = country.name
    this.countries = []
  }

  filterCountries(searchString: string) {
    this.countries = this.regionsService.getCountries(searchString);
  }
}
