import { User } from './../models/user';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   user = new User();
  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {

  }

  Login(): void{
    
   //hashing password
   // const salt = bcrypt.genSaltSync(10);
   // var pass = bcrypt.hashSync(this.user.password, salt);  
   // this.user.password = pass;

    this.service.login(this.user).subscribe((res)=>{
 
        // store user details and basic auth credentials in local storage 
                    // to keep user logged in between page refreshes
      

      var token  = window.btoa(this.user.username + ':' + this.user.password);

       this.user = res;
       this.service.setToken(res.token);
       localStorage.setItem('user',JSON.stringify(this.user));
      //  this.toastr.Success("Login was completed succesfully");
   
       this.router.navigate(['/post-survey']);
    },(err)=>{
       console.error(err);
    })
   }

}
