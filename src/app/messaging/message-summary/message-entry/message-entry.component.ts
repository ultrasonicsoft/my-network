import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'message-entry',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message-entry.component.html',
  styleUrls: ['./message-entry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageEntryComponent implements OnInit {

  @Input() id!: number;
  
  constructor() { }

  ngOnInit(): void {
  }

}
