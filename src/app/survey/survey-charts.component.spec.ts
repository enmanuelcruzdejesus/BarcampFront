import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyChartsComponent } from './survey-charts.component';

describe('SurveyChartsComponent', () => {
  let component: SurveyChartsComponent;
  let fixture: ComponentFixture<SurveyChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
