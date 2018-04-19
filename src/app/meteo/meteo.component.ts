import { Component, Input, OnInit } from '@angular/core';
import { Town } from '../town';
import { MeteoService } from '../meteo.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css'],
  providers: [MeteoService]
})
export class MeteoComponent implements OnInit {
  

  cities: Town;
  city = new Town();
  
  constructor(private MeteoService: MeteoService) { }

  ngOnInit() {
    this.MeteoService.GetTownById(4).subscribe(town => this.city = town);
  }

}
