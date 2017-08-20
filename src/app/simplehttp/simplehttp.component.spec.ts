import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplehttpComponent } from './simplehttp.component';

describe('SimplehttpComponent', () => {
  let component: SimplehttpComponent;
  let fixture: ComponentFixture<SimplehttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplehttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplehttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
