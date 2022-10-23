import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationHistoriqueComponent } from './station-historique.component';

describe('StationHistoriqueComponent', () => {
  let component: StationHistoriqueComponent;
  let fixture: ComponentFixture<StationHistoriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StationHistoriqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StationHistoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
