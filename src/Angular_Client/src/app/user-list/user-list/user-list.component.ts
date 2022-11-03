import { Component, OnInit } from '@angular/core';
import {Student} from "../../Model/user";
import {StudentServiceService} from "../../Service/user-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-student-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  students: Student[]|undefined;

  constructor(private studentService:StudentServiceService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void
  {
    this.studentService.findAll().subscribe(data=>{this.students=data});
  }

  deleteStudent(student:Student)
  {
    this.studentService.delete(student);
    window.location.reload();
  }

}
