import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Etage2LevelThreeConfortComponent } from './etage2-level-three-confort.component';

describe('Etage2LevelThreeConfortComponent', () => {
  let component: Etage2LevelThreeConfortComponent;
  let fixture: ComponentFixture<Etage2LevelThreeConfortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Etage2LevelThreeConfortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Etage2LevelThreeConfortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
