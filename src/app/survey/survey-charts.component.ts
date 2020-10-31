import { Survey } from './../models/survey';
import { Router } from '@angular/router';
import { SurveyService } from './../services/survey.service';
import { Component, OnInit } from '@angular/core';
import {Chart} from 'node_modules/chart.js';

@Component({
  selector: 'app-survey-charts',
  templateUrl: './survey-charts.component.html',
  styleUrls: ['./survey-charts.component.css']
})
export class SurveyChartsComponent implements OnInit {
   
  surveys: Survey[] ;
  
   public barChartOptions = {
       scaleShowVerticalLines: false,
       responsive: true
   };

   barChartsLabels = ["1","2","3","4","5"];
   barChartType = "bar";
   barChartLegend = true;
   r1 = [];
   r2 = [];
   r3 = [];
   barChartData1 = [
     {data: this.r1 ,label: '¿ Las charlas donde usted participó cumplieron con sus expectativas?'} 
   ]   

   barChartData2 = [
    {data: this.r2 ,label: '¿Los expositores mostraron tener dominio del tema?.'} 
  ]   

  barChartData3 = [
    {data: this.r3 ,label: '¿Las instalaciones del evento fueron confortables para usted?'} 
  ]   


  constructor(private service: SurveyService, private router: Router) { }

  ngOnInit(): void {
      this.service.getSurverys().subscribe((res)=>{
        this.surveys = res;
        this.surveys.forEach(x => {
          
          this.r1.push( x.ratingQ1);
          this.r2.push(x.ratingQ2);
          this.r3.push(x.ratingQ3);

          
        });
        
      },
      (err)=>{ console.error(err); });
  }

}
