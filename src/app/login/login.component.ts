import { Component, Injectable } from '@angular/core';
import { UserRole } from'../../enums/Enums';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularToastService } from "angular-toasts";
import { UserService } from 'src/Services/user.service';
import { User } from 'src/models/Models';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userList: User[] = [];

  userRole = UserRole;
    roleKeys: string[] =[];

  User = new FormGroup({
    userName: new FormControl<string>(''),
    userPassword: new FormControl<string>(''),
    userRole: new FormControl<string>(''),
  });

  loginSuccess: boolean = false;
 
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

  public loginUser() {
    var userName = "";
    var userPassword = "";

    if(this.User.controls.userName.value){
      userName = this.User.controls.userName.value;
    }

    if(this.User.controls.userPassword.value){
      userPassword = this.User.controls.userPassword.value;
    }

    debugger;

    this.userService.loginUser(userName, userPassword)
      .subscribe(
        (response) => {
          console.log(response.id == true);
          debugger;
          if(response.id == true){
            this.refreshForm();
            this._toast.success("Success", "User was logged in.");
          }
          else{
            this._toast.error("Error", "Wrong Username or Password.");
          }

        }, (error) => {
          console.log(error);
          debugger;
          this._toast.error("Error", "Wrong Username or Password.");
        }
    )
  }
}
