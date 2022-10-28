import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs.component';
import { JobUpdateComponent } from './job-update/job-update.component';
import { JobActivitiesNavigationsComponent } from './job-activities-navigations/job-activities-navigations.component';
import { NewFeatureAnnouncementComponent } from '../@components/new-feature-announcement/new-feature-announcement.component';
import { RecentJobSearchesComponent } from './recent-job-searches/recent-job-searches.component';
import { JobRecommendationsComponent } from './job-recommendations/job-recommendations.component';
import { OpenToWorkComponent } from './open-to-work/open-to-work.component';
import { JobGuidanceComponent } from './job-guidance/job-guidance.component';
import { FooterComponent } from '../@components/footer/footer.component';


@NgModule({
  declarations: [
    JobsComponent
  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    JobUpdateComponent,
    JobActivitiesNavigationsComponent,
    NewFeatureAnnouncementComponent,
    RecentJobSearchesComponent,
    JobRecommendationsComponent,
    OpenToWorkComponent,
    JobGuidanceComponent,
    FooterComponent,
  ]
})
export class JobsModule { }
