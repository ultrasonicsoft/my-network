import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobGuidanceComponent } from './job-guidance.component';

describe('JobGuidanceComponent', () => {
  let component: JobGuidanceComponent;
  let fixture: ComponentFixture<JobGuidanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ JobGuidanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobGuidanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
