import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPoemeComponent } from './dialog-poeme.component';

describe('DialogPoemeComponent', () => {
  let component: DialogPoemeComponent;
  let fixture: ComponentFixture<DialogPoemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogPoemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPoemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
