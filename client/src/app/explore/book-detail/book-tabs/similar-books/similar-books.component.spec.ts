import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarBooksComponent } from './similar-books.component';

describe('SimilarBooksComponent', () => {
  let component: SimilarBooksComponent;
  let fixture: ComponentFixture<SimilarBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimilarBooksComponent]
    });
    fixture = TestBed.createComponent(SimilarBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
