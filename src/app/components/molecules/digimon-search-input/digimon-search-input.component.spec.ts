import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonSearchInputComponent } from './digimon-search-input.component';

describe('DigimonSearchInputComponent', () => {
  let component: DigimonSearchInputComponent;
  let fixture: ComponentFixture<DigimonSearchInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigimonSearchInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DigimonSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
