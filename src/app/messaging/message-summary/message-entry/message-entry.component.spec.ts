import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageEntryComponent } from './message-entry.component';

describe('MessageEntryComponent', () => {
  let component: MessageEntryComponent;
  let fixture: ComponentFixture<MessageEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MessageEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
