import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageReadComponent } from './manage-read.component';

describe('ManageReadComponent', () => {
  let component: ManageReadComponent;
  let fixture: ComponentFixture<ManageReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
