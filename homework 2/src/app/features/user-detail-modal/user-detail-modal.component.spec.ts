import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDetailModalComponent } from './user-detail-modal.component';
import { User } from '../../core/user/user.model';
import { By } from '@angular/platform-browser';

const mockUser: User = {
  id: 1,
  name: 'Test User',
  username: 'test',
  email: 'test@example.com',
  address: { street: 'Main', suite: '1', city: 'City', zipcode: '12345', geo: { lat: '1', lng: '2' } },
  phone: '123',
  website: 'test.com',
  company: { name: 'TestCo', catchPhrase: 'Catch', bs: 'BS' }
};

describe('UserDetailModalComponent', () => {
  let component: UserDetailModalComponent;
  let fixture: ComponentFixture<UserDetailModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDetailModalComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(UserDetailModalComponent);
    component = fixture.componentInstance;
    component.user = mockUser;
    fixture.detectChanges();
  });

  it('should render user details', () => {
    const name = fixture.debugElement.query(By.css('h2')).nativeElement.textContent;
    expect(name).toContain('Test User');
    const email = fixture.debugElement.query(By.css('.user-email')).nativeElement.textContent;
    expect(email).toContain('test@example.com');
  });

  it('should emit close event', () => {
    spyOn(component.close, 'emit');
    const btn = fixture.debugElement.query(By.css('.close-btn'));
    btn.triggerEventHandler('click', null);
    expect(component.close.emit).toHaveBeenCalled();
  });
}); 