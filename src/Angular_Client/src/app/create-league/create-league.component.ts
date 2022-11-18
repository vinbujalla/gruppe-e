import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {LeagueServiceService} from "../Service/league-service.service";
import {League} from "../Model/league";
import {HttpStatusCode} from "@angular/common/http";
import {compileResults} from "@angular/compiler-cli/src/ngtsc/annotations/common";

@Component({
  selector: 'app-create-league',
  templateUrl: './create-league.component.html',
  styleUrls: ['./create-league.component.scss']
})
export class CreateLeagueComponent implements OnInit {

  league: League;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private LeagueService: LeagueServiceService) {
    this.league = new League()
  }

  onSubmit() {
    this.LeagueService.createLeague(this.league).subscribe(result => {
      this.leagueCreated()
    });
  }

  leagueCreated() {

  }

  ngOnInit(): void {
  }
}
