import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonInputComponent } from './digimon-input.component';

describe('DigimonInputComponent', () => {
  let component: DigimonInputComponent;
  let fixture: ComponentFixture<DigimonInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigimonInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DigimonInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
