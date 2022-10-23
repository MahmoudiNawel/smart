import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Etage2LevelThreeOneComponent } from './etage2-level-three-one.component';

describe('Etage2LevelThreeOneComponent', () => {
  let component: Etage2LevelThreeOneComponent;
  let fixture: ComponentFixture<Etage2LevelThreeOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Etage2LevelThreeOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Etage2LevelThreeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
