import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {UserServiceService} from "../Service/user-service.service";
import {User} from "../Model/user";

@Component({
  selector: 'app-register-form',
  templateUrl: './log-in-fenster.component.html',
  styleUrls: ['./log-in-fenster.component.scss']
})
export class LogInFensterComponent {

  user:User;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserServiceService) {this.user=new User()}

  onSubmit()
  {
    this.userService.loginUser(this.user).subscribe(result=>this.hallo());
  }

  hallo() {
    alert("hallo!")
  }



  /*gotoUserList()
  {
    this.router.navigate(['users']);
  }*/

  /*errorWithSubmit()
  {
    alert("E-Mail-Adresse bereits vergeben")
  }*/
}
