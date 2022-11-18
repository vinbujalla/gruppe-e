import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {League} from "../Model/league";

@Injectable({
  providedIn: 'root'
})
export class LeagueServiceService {

  private leagueURL:string;
  constructor(private http:HttpClient) { this.leagueURL="http://localhost:8080";}

  public findAll(): Observable<League[]>
  {
    return this.http.get<League[]>(this.leagueURL);
  }

  public createLeague(league:League)
  {
    return this.http.post<League>(this.leagueURL+"/create-league",league);
  }

  public delete(league: League)
  {
    this.http.delete(this.leagueURL+"/"+league.id).subscribe();
  }

}
