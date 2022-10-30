import { Component, OnInit } from '@angular/core';
import {Student} from "../../Model/student";
import {StudentServiceService} from "../../Service/student-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-student-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.scss']
})
export class StudentListComponent implements OnInit {

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
