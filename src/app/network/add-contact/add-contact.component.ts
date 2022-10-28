import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'add-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
