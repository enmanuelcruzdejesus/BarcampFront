import { SurveyChartsComponent } from './survey/survey-charts.component';
import { PostSurveyComponent } from './survey/post-survey.component';
import { RegisterComponent } from './user/register.component';
import { LoginComponent } from './user/login.component';
import { SurveyListComponent } from './survey/survey-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '' , redirectTo: "/post-survey" , pathMatch: 'full'},
  {path:'login' , component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'survey-list' , component: SurveyListComponent},
  {path:'post-survey' , component: PostSurveyComponent},
  {path: 'survey-charts' , component: SurveyChartsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LoginComponent,RegisterComponent,SurveyListComponent,PostSurveyComponent,SurveyChartsComponent]
