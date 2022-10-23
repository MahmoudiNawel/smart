import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsRegisterComponent } from './settings-register.component';

describe('SettingsRegisterComponent', () => {
  let component: SettingsRegisterComponent;
  let fixture: ComponentFixture<SettingsRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
