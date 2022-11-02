import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Admin} from "../Model/admin";

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  private adminURL:string;
  constructor(private http:HttpClient) { this.adminURL='http://localhost:8080/admin';}

  public findAll(): Observable<Admin[]>
  {
    return this.http.get<Admin[]>(this.adminURL);
  }

  public save(admin:Admin)
  {
    return this.http.post<Admin>(this.adminURL,admin);
  }

  public delete(admin: Admin)
  {
    this.http.delete(this.adminURL+"/"+admin.id).subscribe();
  }

  public findByLastName(input: String)
  {
    return this.http.get<Admin[]>(this.adminURL+"/lastname/"+input);
  }
  public findByFirstName(input:String)
  {
    return this.http.get<Admin[]>(this.adminURL+"/firstname/"+input);
  }

  public findByEmail(input:String)
  {
    return this.http.get<Admin[]>(this.adminURL+"/email/"+input);
  }
}
