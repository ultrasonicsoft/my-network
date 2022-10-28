import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenToWorkComponent } from './open-to-work.component';

describe('OpenToWorkComponent', () => {
  let component: OpenToWorkComponent;
  let fixture: ComponentFixture<OpenToWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ OpenToWorkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenToWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
