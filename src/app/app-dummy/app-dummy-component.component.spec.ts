import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDummyComponent } from './app-dummy.component';

describe('AppDummyComponent', () => {
  let component: AppDummyComponent;
  let fixture: ComponentFixture<AppDummyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDummyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
