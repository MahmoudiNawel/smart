import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponserequestComponent } from './responserequest.component';

describe('ResponserequestComponent', () => {
  let component: ResponserequestComponent;
  let fixture: ComponentFixture<ResponserequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponserequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponserequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
