import { Component, OnInit } from '@angular/core';
import {User} from "../../Model/user";
import {UserServiceService} from "../../Service/user-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[]|undefined;

  constructor(private userService:UserServiceService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void
  {
    this.userService.findAll().subscribe(data=>{this.users=data});
  }

  deleteStudent(user:User)
  {
    this.userService.delete(user);
    window.location.reload();
  }

}
