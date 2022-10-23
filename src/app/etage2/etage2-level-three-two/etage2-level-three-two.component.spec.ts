import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Etage2LevelThreeTwoComponent } from './etage2-level-three-two.component';

describe('Etage2LevelThreeTwoComponent', () => {
  let component: Etage2LevelThreeTwoComponent;
  let fixture: ComponentFixture<Etage2LevelThreeTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Etage2LevelThreeTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Etage2LevelThreeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
