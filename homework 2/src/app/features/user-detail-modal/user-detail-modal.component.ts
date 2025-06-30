import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../core/user/user.model';

@Component({
  selector: 'app-user-detail-modal',
  standalone: true,
  templateUrl: './user-detail-modal.component.html',
  styleUrls: ['./user-detail-modal.component.scss']
})
export class UserDetailModalComponent {
  @Input() user!: User;
  @Output() close = new EventEmitter<void>();

  get mapUrl() {
    const { lat, lng } = this.user.address.geo;
    return `https://www.google.com/maps?q=${lat},${lng}`;
  }
} 