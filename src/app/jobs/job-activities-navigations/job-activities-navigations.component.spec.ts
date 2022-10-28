import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobActivitiesNavigationsComponent } from './job-activities-navigations.component';

describe('JobActivitiesNavigationsComponent', () => {
  let component: JobActivitiesNavigationsComponent;
  let fixture: ComponentFixture<JobActivitiesNavigationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ JobActivitiesNavigationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobActivitiesNavigationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
