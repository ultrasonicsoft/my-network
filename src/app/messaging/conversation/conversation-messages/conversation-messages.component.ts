import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'conversation-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './conversation-messages.component.html',
  styleUrls: ['./conversation-messages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConversationMessagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
