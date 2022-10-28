import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageEntryComponent } from './message-entry/message-entry.component';

@Component({
  selector: 'message-summary',
  standalone: true,
  imports: [
    CommonModule,
    MessageEntryComponent,
  ],
  templateUrl: './message-summary.component.html',
  styleUrls: ['./message-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageSummaryComponent implements OnInit {

  messages = [1, 2, 3, 4, 5]
  constructor() { }

  ngOnInit(): void {
  }

}
