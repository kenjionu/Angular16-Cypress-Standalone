import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonLabelComponent } from './digimon-label.component';

describe('DigimonLabelComponent', () => {
  let component: DigimonLabelComponent;
  let fixture: ComponentFixture<DigimonLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigimonLabelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DigimonLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
