import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NetworkRoutingModule } from './network-routing.module';
import { NetworkComponent } from './network.component';
import { NetworkSummaryComponent } from './network-summary/network-summary.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { FooterComponent } from '../@components/footer/footer.component';
import { InvitationsOverviewComponent } from './invitations-overview/invitations-overview.component';
import { ConnectionsRecommendationComponent } from './connections-recommendation/connections-recommendation.component';
import { FollowersRecommendationComponent } from './followers-recommendation/followers-recommendation.component';


@NgModule({
  declarations: [
    NetworkComponent
  ],
  imports: [
    CommonModule,
    NetworkRoutingModule,
    NetworkSummaryComponent,
    AddContactComponent,
    FooterComponent,
    InvitationsOverviewComponent,
    ConnectionsRecommendationComponent,
    FollowersRecommendationComponent,
  ]
})
export class NetworkModule { }
