import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'open-to-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './open-to-work.component.html',
  styleUrls: ['./open-to-work.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OpenToWorkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
