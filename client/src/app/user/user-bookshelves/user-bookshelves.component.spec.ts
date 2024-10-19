import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBookshelvesComponent } from './user-bookshelves.component';

describe('UserBookshelvesComponent', () => {
  let component: UserBookshelvesComponent;
  let fixture: ComponentFixture<UserBookshelvesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserBookshelvesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserBookshelvesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
