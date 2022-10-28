import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionsRecommendationEntryComponent } from './connections-recommendation-entry.component';

describe('ConnectionsRecommendationEntryComponent', () => {
  let component: ConnectionsRecommendationEntryComponent;
  let fixture: ComponentFixture<ConnectionsRecommendationEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ConnectionsRecommendationEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectionsRecommendationEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
