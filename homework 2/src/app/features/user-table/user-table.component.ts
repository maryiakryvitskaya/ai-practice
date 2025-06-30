import { Component, Output, EventEmitter, inject } from '@angular/core';
import { UserService } from '../../core/user/user.service';
import { User } from '../../core/user/user.model';
import { UserDetailModalComponent } from '../user-detail-modal/user-detail-modal.component';
import { NgFor, NgIf, AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [UserDetailModalComponent, NgFor, NgIf, AsyncPipe],
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent {
  users$ = inject(UserService).users$;
  selectedUser: User | null = null;
  private userService = inject(UserService);

  constructor() {
    this.userService.fetchUsers();
  }

  openUser(user: User) {
    this.selectedUser = user;
  }

  closeModal() {
    this.selectedUser = null;
  }

  deleteUser(id: number, event: Event) {
    event.stopPropagation();
    this.userService.deleteUser(id);
    if (this.selectedUser && this.selectedUser.id === id) {
      this.closeModal();
    }
  }

  trackByUserId(index: number, user: User) {
    return user.id;
  }
} 