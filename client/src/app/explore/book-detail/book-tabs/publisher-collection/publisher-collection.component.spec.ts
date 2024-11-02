import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherCollectionComponent } from './publisher-collection.component';

describe('PublisherCollectionComponent', () => {
  let component: PublisherCollectionComponent;
  let fixture: ComponentFixture<PublisherCollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublisherCollectionComponent]
    });
    fixture = TestBed.createComponent(PublisherCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
