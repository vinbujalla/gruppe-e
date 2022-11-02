import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {User} from "../Model/user";
import {GeneralUserServiceService} from "./generaluser-service.service";
import {Admin} from "../Model/admin";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private userURL: string;

  constructor(private http: HttpClient) {
    this.userURL = 'http://localhost:8080/user';
  }

  public findAll(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.userURL);
  }

  public save(user: Admin) {
    return this.http.post<Admin>(this.userURL, user);
  }

  public delete(user: Admin) {
    this.http.delete(this.userURL + "/" + user.id).subscribe();
  }

  public findByLastName(input: String) {
    return this.http.get<Admin[]>(this.userURL + "/lastname/" + input);
  }

  public findByFirstName(input: String) {
    return this.http.get<Admin[]>(this.userURL + "/firstname/" + input);
  }

  public findByEmail(input: String) {
    return this.http.get<Admin[]>(this.userURL + "/email/" + input);
  }

}

