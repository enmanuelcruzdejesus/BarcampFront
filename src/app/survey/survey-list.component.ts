import { Survey } from './../models/survey';
import { SurveyService } from './../services/survey.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {

  surveys: Survey[];
  constructor(private service: SurveyService, private router: Router) { }

  ngOnInit(): void {

    this.service.getSurverys().subscribe((res)=>{
      this.surveys = res;

    }, (err)=>{
      console.error(err);
    })
  }

  goBack(){
    this.router.navigate(["/post-survey"]);
  }

}
