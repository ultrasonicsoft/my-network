import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'connections-recommendation-entry',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './connections-recommendation-entry.component.html',
  styleUrls: ['./connections-recommendation-entry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConnectionsRecommendationEntryComponent implements OnInit {

  @Input() id!: number;
  
  constructor() { }

  ngOnInit(): void {
  }

}
