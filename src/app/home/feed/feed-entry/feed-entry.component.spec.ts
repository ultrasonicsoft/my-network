import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedEntryComponent } from './feed-entry.component';

describe('FeedEntryComponent', () => {
  let component: FeedEntryComponent;
  let fixture: ComponentFixture<FeedEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FeedEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
