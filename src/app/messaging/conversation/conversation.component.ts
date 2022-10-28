import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactSummaryComponent } from './contact-summary/contact-summary.component';
import { ConversationMessagesComponent } from './conversation-messages/conversation-messages.component';
import { MessageComposerComponent } from './message-composer/message-composer.component';

@Component({
  selector: 'conversation',
  standalone: true,
  imports: [
    CommonModule,
    ContactSummaryComponent,
    ConversationMessagesComponent,
    MessageComposerComponent,
  ],
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConversationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
