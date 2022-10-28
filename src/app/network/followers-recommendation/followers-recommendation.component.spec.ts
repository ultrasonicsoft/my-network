import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowersRecommendationComponent } from './followers-recommendation.component';

describe('FollowersRecommendationComponent', () => {
  let component: FollowersRecommendationComponent;
  let fixture: ComponentFixture<FollowersRecommendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FollowersRecommendationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowersRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
