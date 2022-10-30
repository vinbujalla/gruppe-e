import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {StudentServiceService} from "../../Service/student-service.service";
import {Student} from "../../Model/student";
import {Observable} from "rxjs";

@Component({
  selector: 'app-student-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class StudentFormComponent {

  student:Student;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private studentService: StudentServiceService) {this.student=new Student()}

  onSubmit()
  {
    this.studentService.save(this.student).subscribe(result=>this.gotoStudentList(),this.errorWithSubmit);
  }

  gotoStudentList()
  {
    this.router.navigate(['students']);
  }

  errorWithSubmit()
  {
    alert("E-Mail-Adress bereits vergeben")
  }
}
