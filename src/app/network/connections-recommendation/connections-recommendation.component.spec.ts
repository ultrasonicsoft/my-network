import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionsRecommendationComponent } from './connections-recommendation.component';

describe('ConnectionsRecommendationComponent', () => {
  let component: ConnectionsRecommendationComponent;
  let fixture: ComponentFixture<ConnectionsRecommendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ConnectionsRecommendationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectionsRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
