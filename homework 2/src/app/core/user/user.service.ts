import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { User } from './user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private usersSubject = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubject.asObservable();

  constructor(private http: HttpClient) {}

  fetchUsers() {
    this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(users => this.usersSubject.next(users));
  }

  deleteUser(id: number) {
    const users = this.usersSubject.value.filter(user => user.id !== id);
    this.usersSubject.next(users);
  }
} 