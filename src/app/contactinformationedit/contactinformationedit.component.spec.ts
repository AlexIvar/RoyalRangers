import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactinformationeditComponent } from './contactinformationedit.component';

describe('ContactinformationeditComponent', () => {
  let component: ContactinformationeditComponent;
  let fixture: ComponentFixture<ContactinformationeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactinformationeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactinformationeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
