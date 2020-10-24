import { User } from './../models/user';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new User();
  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  register() : void{
      
    this.service.registerUser(this.user).subscribe((res)=>{
    //  this.service.setToken(res.token);      
    //  this.toastr.Success("Sign Up was completed succesfully");
     this.router.navigate(['/login']);
   },(err)=>{
     console.error(err);
   });


}

}
