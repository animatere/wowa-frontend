import { Component, Injectable } from '@angular/core';
import { UserRole } from'../../enums/Enums';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularToastService } from "angular-toasts";
import { UserService } from 'src/Services/user.service';
import { User } from 'src/models/Models';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  userList: User[] = [];

  userRole = UserRole;
    roleKeys: string[] =[];

  User = new FormGroup({
    userName: new FormControl<string>(''),
    userPassword: new FormControl<string>(''),
    userRole: new FormControl<string>(''),
  });
 
  constructor(private userService: UserService, private _toast: AngularToastService) {
    this.roleKeys = Object.values(this.userRole);
    console.log(this.roleKeys);

    this.getUsers()

    var mainCards = this.userList

    const randomElement = this.userList[Math.floor(Math.random() * this.userList.length)];
    console.log(randomElement);
  }
 
  public getUsers() {
    this.userService.getUsers()
      .subscribe(
        (response) => {
          this.userList = response; 
        }, (error) => {
          this._toast.error("Error", "Error while fetching users.");
        }
      )
  }

  public refreshForm() {
    this.User = new FormGroup({
      userName: new FormControl<string>(''),
      userPassword: new FormControl<string>(''),
      userRole: new FormControl<string>('')
    });
  }

  public createUser() {
    var userRole = "";
    var userName = "";
    var userPassword = "";

    if(this.User.controls.userRole.value){
      userRole = this.User.controls.userRole.value;
    }

    if(this.User.controls.userName.value){
      userName = this.User.controls.userName.value;
    }

    if(this.User.controls.userPassword.value){
      userPassword = this.User.controls.userPassword.value;
    }

    debugger;

    this.userService.createUser(userRole, userName, userPassword)
      .subscribe(
        (response) => {
          console.log(response);
          debugger;
          this.refreshForm();
          this._toast.success("Success", "User was created.");
        }, (error) => {
          console.log(error);
          debugger;
          this._toast.error("Error", "Error while creating User.");
        }
    )
  }
}
