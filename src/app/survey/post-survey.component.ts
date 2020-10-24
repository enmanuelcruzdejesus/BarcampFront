import { Survey } from './../models/survey';
import { SurveyService } from './../services/survey.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-survey',
  templateUrl: './post-survey.component.html',
  styleUrls: ['./post-survey.component.css']
})
export class PostSurveyComponent implements OnInit {

   survey  = new Survey();

  constructor(private service: SurveyService, private router: Router) { }

  ngOnInit(): void {

   
  }

  save(){
    this.service.save(this.survey).subscribe((res)=>{
      
      console.log(JSON.stringify(this.survey));
      

    },(err)=>{
      console.error(err);
    });

    
    
  }

}
