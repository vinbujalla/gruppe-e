import {Component} from '@angular/core';
import {User} from "../Model/user";
import {UserServiceService} from "../Service/user-service.service";

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: [`./user-search.component.scss`]
})
export class UserSearchComponent{
  users: User[]|undefined;
  searchInput:String ="";
  searchType:String="lastName";

  constructor(private userService:UserServiceService) { }


  submitSearch(input:String)
  {
    switch (this.searchType)
    {
      case "lastName":
        this.userService.findByLastName(input).subscribe(data=>{this.users=data});
        break;
      case "firstName":
        this.userService.findByFirstName(input).subscribe(data=>{this.users=data});
        break;
      case "email":
        this.userService.findByEmail(input).subscribe(data=>{this.users=data});
        break;
    }
  }
}
