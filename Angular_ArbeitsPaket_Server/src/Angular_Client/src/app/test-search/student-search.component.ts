import {Component} from '@angular/core';
import {Student} from "../Model/student";
import {StudentServiceService} from "../Service/student-service.service";

@Component({
  selector: 'app-student-search',
  templateUrl: './test-search.component.html',
  styleUrls: ['./test-search.component.scss']
})
export class StudentSearchComponent{
  students: Student[]|undefined;
  searchInput:String ="";
  searchType:String="lastName";

  constructor(private studentService:StudentServiceService) { }


  submitSearch(input:String)
  {
    switch (this.searchType)
    {
      case "lastName":
        this.studentService.findByLastName(input).subscribe(data=>{this.students=data});
        break;
      case "firstName":
        this.studentService.findByFirstName(input).subscribe(data=>{this.students=data});
        break;
      case "email":
        this.studentService.findByEmail(input).subscribe(data=>{this.students=data});
        break;
      case "subject":
        this.studentService.findBySubject(input).subscribe(data=>{this.students=data});
        break;
    }
  }
}
