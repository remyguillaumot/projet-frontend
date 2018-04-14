import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Town } from './town';

@Injectable()
export class MeteoService {

  private URL = "https://lpa2sgadot.herokuapp.com";
  constructor(private http: HttpClient) {
    
      getTown(id: number) : Observable<meteo[]> {
        return this.http.get<Town[]>(URL + 'towns/' + id + '.json');
      }
    }

}
