import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFeatureAnnouncementComponent } from './new-feature-announcement.component';

describe('NewFeatureAnnouncementComponent', () => {
  let component: NewFeatureAnnouncementComponent;
  let fixture: ComponentFixture<NewFeatureAnnouncementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NewFeatureAnnouncementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewFeatureAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
