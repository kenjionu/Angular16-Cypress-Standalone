import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonIconComponent } from './digimon-icon.component';

describe('DigimonIconComponent', () => {
  let component: DigimonIconComponent;
  let fixture: ComponentFixture<DigimonIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigimonIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DigimonIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
