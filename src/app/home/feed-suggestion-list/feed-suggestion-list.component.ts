import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'feed-suggestion-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feed-suggestion-list.component.html',
  styleUrls: ['./feed-suggestion-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedSuggestionListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
