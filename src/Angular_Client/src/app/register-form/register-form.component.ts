import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {UserServiceService} from "../Service/user-service.service";
import {User} from "../Model/user";
import {HttpStatusCode} from "@angular/common/http";
import {compileResults} from "@angular/compiler-cli/src/ngtsc/annotations/common";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {

  user:User;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserServiceService) {this.user=new User()}

  onSubmit() {
    this.userService.registerUser(this.user).subscribe(result=>{this.userRegistered()});
  }

  userRegistered() {
    window.location.href=('http://localhost:4200/');
    alert("HALLO");
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
