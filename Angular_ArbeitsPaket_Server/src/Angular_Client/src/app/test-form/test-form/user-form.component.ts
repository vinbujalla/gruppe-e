import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserServiceService} from "../../Service/user-service.service";
import {User} from "../../Model/user";
import {Observable} from "rxjs";

@Component({
  selector: 'app-user-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class UserFormComponent {

  user:User;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserServiceService) {this.user=new User()}

  onSubmit()
  {
    this.userService.save(this.user).subscribe(result=>this.gotoUserList(),this.errorWithSubmit);
  }

  gotoUserList()
  {
    this.router.navigate(['users']);
  }

  errorWithSubmit()
  {
    alert("E-Mail-Adress bereits vergeben")
  }
}
