import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFactoryComponent } from './user-factory.component';

describe('UserFactoryComponent', () => {
  let component: UserFactoryComponent;
  let fixture: ComponentFixture<UserFactoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFactoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
