import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProfileOverviewComponent } from './profile-overview/profile-overview.component';
import { FeedComponent } from './feed/feed.component';
import { FeedSuggestionListComponent } from './feed-suggestion-list/feed-suggestion-list.component';
import { GroupsOverviewComponent } from './groups-overview/groups-overview.component';
import { OrganizationOverviewComponent } from './organization-overview/organization-overview.component';
import { FooterComponent } from '../@components/footer/footer.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ProfileOverviewComponent,
    FeedComponent,
    GroupsOverviewComponent,
    FeedSuggestionListComponent,
    OrganizationOverviewComponent,
    FooterComponent
  ]
})
export class HomeModule { }
