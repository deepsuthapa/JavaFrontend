import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStore } from './user-store';

describe('UserStore', () => {
  let component: UserStore;
  let fixture: ComponentFixture<UserStore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserStore],
    }).compileComponents();

    fixture = TestBed.createComponent(UserStore);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
