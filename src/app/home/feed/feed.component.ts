import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedEntryComponent } from './feed-entry/feed-entry.component';

@Component({
  selector: 'feed',
  standalone: true,
  imports: [
    CommonModule,
    FeedEntryComponent
  ],
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedComponent implements OnInit {

  feed = [1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit(): void {
  }

}
