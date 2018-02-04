import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockItemsComponent } from './mock-items.component';

describe('MockItemsComponent', () => {
  let component: MockItemsComponent;
  let fixture: ComponentFixture<MockItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
