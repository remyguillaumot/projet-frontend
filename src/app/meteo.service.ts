import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Town } from './town';
import "rxjs/add/operator/catch";

const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
const URL = "https://projet-pierrat.herokuapp.com";

@Injectable()
export class MeteoService {
  

  constructor(private http: HttpClient) {}

  
  public GetAllTowns(): Observable<Town[]> {
    return this.http.get<Town[]>(URL + '/towns.json');
  }

  public GetTownById(id: number) : Observable<Town> {
    return this.http.get<Town>(URL + '/towns/' + id + '.json');
  }

  public UpdateTown (town: Town): Observable<Town> {
   return this.http.put<Town>(URL + '/towns/' + town.id + '.json', town, {headers});
  }
}
