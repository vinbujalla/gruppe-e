import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {GeneralUser} from "../Model/generaluser";

@Injectable({
  providedIn: 'root'
})
export class GeneralUserServiceService {

  private generaluserURL:string;
  constructor(private http:HttpClient) { this.generaluserURL='http://localhost:8080/generaluser';}

  public findAll(): Observable<GeneralUser[]>
  {
    return this.http.get<GeneralUser[]>(this.generaluserURL);
  }

  public save(generaluser:GeneralUser)
  {
    return this.http.post<GeneralUser>(this.generaluserURL,generaluser);
  }

  public delete(generaluser: GeneralUser)
  {
    this.http.delete(this.generaluserURL+"/"+generaluser.id).subscribe();
  }

  public findByLastName(input: String)
  {
    return this.http.get<GeneralUser[]>(this.generaluserURL+"/lastname/"+input);
  }
  public findByFirstName(input:String)
  {
    return this.http.get<GeneralUser[]>(this.generaluserURL+"/firstname/"+input);
  }

  public findByEmail(input:String)
  {
    return this.http.get<GeneralUser[]>(this.generaluserURL+"/email/"+input);
  }
}
