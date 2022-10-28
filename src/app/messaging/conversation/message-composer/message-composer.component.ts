import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'message-composer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message-composer.component.html',
  styleUrls: ['./message-composer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageComposerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
