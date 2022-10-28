import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'contact-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-summary.component.html',
  styleUrls: ['./contact-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactSummaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
