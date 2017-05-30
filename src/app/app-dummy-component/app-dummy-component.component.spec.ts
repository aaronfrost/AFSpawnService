import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDummyComponentComponent } from './app-dummy-component.component';

describe('AppDummyComponentComponent', () => {
  let component: AppDummyComponentComponent;
  let fixture: ComponentFixture<AppDummyComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDummyComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDummyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
