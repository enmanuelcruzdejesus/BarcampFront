import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Survey } from '../models/survey';
import { HttpClientHelper } from './HttpClientHelper';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  private httpOptions = {
    headers : new HttpHeaders({"Content-Type":"application/json"})
  };

  constructor(private httpClient: HttpClient) { }
  getSurverys(): Observable<Survey[]>{
    return this.httpClient.get<Survey[]>(`${HttpClientHelper.baseURL}/survey/getAll`,this.httpOptions);
  }

  getSurveyById(id: number){

    return this.httpClient.get<Survey>(`${HttpClientHelper.baseURL}/survey/getById`+id,this.httpOptions);
  }

  saveProduct(survey: Survey): Observable<any>{
    return this.httpClient.post<Survey>(`${HttpClientHelper.baseURL}/survey/save`,survey);
  }

}
