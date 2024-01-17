import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonButtonComponent } from './digimon-button.component';

describe('DigimonButtonComponent', () => {
  let component: DigimonButtonComponent;
  let fixture: ComponentFixture<DigimonButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigimonButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DigimonButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
