import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {User} from "../Model/user";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private userURL:string;
  constructor(private http:HttpClient) { this.userURL="http://localhost:8080";}

  public findAll(): Observable<User[]>
  {
    return this.http.get<User[]>(this.userURL);
  }

  public save(user:User)
  {
    return this.http.post<User>(this.userURL+"/user/create",user);
  }

  public login(user:User)
  {
    return this.http.post<User>(this.userURL+"/user/login",user);
  }

  public delete(user: User)
  {
    this.http.delete(this.userURL+"/"+user.id).subscribe();
  }

  public findByLastName(input: String)
  {
    return this.http.get<User[]>(this.userURL+"/lastname/"+input);
  }
  public findByFirstName(input:String)
  {
    return this.http.get<User[]>(this.userURL+"/firstname/"+input);
  }

  public findByEmail(input:String)
  {
    return this.http.get<User[]>(this.userURL+"/email/"+input);
  }
}
