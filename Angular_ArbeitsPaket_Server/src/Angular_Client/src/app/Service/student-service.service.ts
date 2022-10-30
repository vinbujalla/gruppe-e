import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Student} from "../Model/student";

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  private studentURL:string;
  constructor(private http:HttpClient) { this.studentURL='http://localhost:8080/students';}

  public findAll(): Observable<Student[]>
  {
    return this.http.get<Student[]>(this.studentURL);
  }

  public save(student:Student)
  {
    return this.http.post<Student>(this.studentURL,student);
  }

  public delete(student: Student)
  {
    this.http.delete(this.studentURL+"/"+student.id).subscribe();
  }

  public findByLastName(input: String)
  {
    return this.http.get<Student[]>(this.studentURL+"/lastname/"+input);
  }
  public findByFirstName(input:String)
  {
    return this.http.get<Student[]>(this.studentURL+"/firstname/"+input);
  }

  public findBySubject(input:String)
  {
    return this.http.get<Student[]>(this.studentURL+"/subject/"+input);
  }

  public findByEmail(input:String)
  {
    return this.http.get<Student[]>(this.studentURL+"/email/"+input);
  }
}
