import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'feed-entry',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feed-entry.component.html',
  styleUrls: ['./feed-entry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedEntryComponent implements OnInit {

  @Input() id!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
