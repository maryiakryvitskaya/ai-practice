import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserTableComponent } from './user-table.component';
import { UserService } from '../../core/user/user.service';
import { of } from 'rxjs';
import { User } from '../../core/user/user.model';
import { By } from '@angular/platform-browser';

const mockUsers: User[] = [
  { id: 1, name: 'Test User', username: 'test', email: 'test@example.com', address: { street: '', suite: '', city: '', zipcode: '', geo: { lat: '', lng: '' } }, phone: '', website: '', company: { name: '', catchPhrase: '', bs: '' } }
];

describe('UserTableComponent', () => {
  let component: UserTableComponent;
  let fixture: ComponentFixture<UserTableComponent>;
  let userServiceSpy: jasmine.SpyObj<UserService>;

  beforeEach(async () => {
    userServiceSpy = jasmine.createSpyObj('UserService', ['fetchUsers', 'deleteUser'], { users$: of(mockUsers) });
    await TestBed.configureTestingModule({
      imports: [UserTableComponent],
      providers: [
        { provide: UserService, useValue: userServiceSpy }
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(UserTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render user rows', () => {
    const rows = fixture.debugElement.queryAll(By.css('.user-row'));
    expect(rows.length).toBe(1);
    expect(rows[0].nativeElement.textContent).toContain('Test User');
  });

  it('should open modal on row click', () => {
    const row = fixture.debugElement.query(By.css('.user-row'));
    row.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.selectedUser).toEqual(mockUsers[0]);
    const modal = fixture.debugElement.query(By.css('app-user-detail-modal'));
    expect(modal).toBeTruthy();
  });

  it('should close modal', () => {
    component.selectedUser = mockUsers[0];
    component.closeModal();
    expect(component.selectedUser).toBeNull();
  });

  it('should call deleteUser on service', () => {
    component.deleteUser(1, { stopPropagation: () => {} } as any);
    expect(userServiceSpy.deleteUser).toHaveBeenCalledWith(1);
  });
}); 