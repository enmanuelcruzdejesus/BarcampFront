import { UserService } from './services/user.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'barcamp-front';
  constructor(private service: UserService, private router: Router){
    
  }

  showNav(): boolean {

    // if(this.getCurrentUrl() ==='/login' || this.getCurrentUrl() === '/register')
    // return false;

    return true;

    // return this.service.loggedIn();

  }

  getCurrentUrl(): string{
    return this.router.url;
  }
  
  userLoggedIn(): boolean{
    // return this.service.loggedIn(); 
    return true;   
  }


  ngOnInit(){

     
  }
  Logout(){
    this.service.logoutUser();
    this.router.navigate(['/login']);
      
  }

}
