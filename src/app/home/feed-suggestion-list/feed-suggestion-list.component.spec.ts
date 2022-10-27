import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedSuggestionListComponent } from './feed-suggestion-list.component';

describe('FeedSuggestionListComponent', () => {
  let component: FeedSuggestionListComponent;
  let fixture: ComponentFixture<FeedSuggestionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FeedSuggestionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedSuggestionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
