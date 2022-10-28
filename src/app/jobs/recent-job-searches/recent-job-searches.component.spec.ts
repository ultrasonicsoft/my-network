import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentJobSearchesComponent } from './recent-job-searches.component';

describe('RecentJobSearchesComponent', () => {
  let component: RecentJobSearchesComponent;
  let fixture: ComponentFixture<RecentJobSearchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RecentJobSearchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentJobSearchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
