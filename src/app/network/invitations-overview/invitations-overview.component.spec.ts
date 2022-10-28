import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitationsOverviewComponent } from './invitations-overview.component';

describe('InvitationsOverviewComponent', () => {
  let component: InvitationsOverviewComponent;
  let fixture: ComponentFixture<InvitationsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ InvitationsOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvitationsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
