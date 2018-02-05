import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerWebComponent } from './inner-web.component';

describe('InnerWebComponent', () => {
  let component: InnerWebComponent;
  let fixture: ComponentFixture<InnerWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
