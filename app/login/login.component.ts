import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user';
import { UserService } from './user-service';

@Component({
  selector: 'login',
  host:{
      class: 'LoginComponent'
  },
    templateUrl: 'app/login/login.component.html',
    providers: [UserService]
})


export class LoginComponent implements OnInit {
    user: User = {
    username: "",
    password: ""
    };
    
    constructor(private userService: UserService, private router: Router) 
    {

    }

    ngOnInit() { }

    onSubmit()
    {
        this.userService.login(this.user.username, this.user.password).then(
            (result) => {
            if (result) {
                this.router.navigate(['/app/dashboard']);
                        }
                    }, (error) => {
            if(error.json().message == "Bad credentials"){
                alert("Invalid username or password");
            }
            });
    }
}