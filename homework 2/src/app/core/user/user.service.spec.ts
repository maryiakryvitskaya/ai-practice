import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { User } from './user.model';

const mockUsers: User[] = [
  { id: 1, name: 'Test User', username: 'test', email: 'test@example.com', address: { street: '', suite: '', city: '', zipcode: '', geo: { lat: '', lng: '' } }, phone: '', website: '', company: { name: '', catchPhrase: '', bs: '' } }
];

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch users', () => {
    service.fetchUsers();
    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/users');
    expect(req.request.method).toBe('GET');
    req.flush(mockUsers);
    service.users$.subscribe(users => {
      expect(users.length).toBe(1);
      expect(users[0].name).toBe('Test User');
    });
  });

  it('should delete a user', () => {
    service['usersSubject'].next(mockUsers);
    service.deleteUser(1);
    service.users$.subscribe(users => {
      expect(users.length).toBe(0);
    });
  });
}); 