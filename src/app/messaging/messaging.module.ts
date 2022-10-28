import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagingRoutingModule } from './messaging-routing.module';
import { MessagingComponent } from './messaging.component';
import { MessageSummaryComponent } from './message-summary/message-summary.component';
import { ConversationComponent } from './conversation/conversation.component';
import { FooterComponent } from '../@components/footer/footer.component';


@NgModule({
  declarations: [
    MessagingComponent
  ],
  imports: [
    CommonModule,
    MessagingRoutingModule,
    MessageSummaryComponent,
    ConversationComponent,
    FooterComponent
  ]
})
export class MessagingModule { }
