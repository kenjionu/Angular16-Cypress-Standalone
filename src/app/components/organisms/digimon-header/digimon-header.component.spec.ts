import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonHeaderComponent } from './digimon-header.component';

describe('DigimonHeaderComponent', () => {
  let component: DigimonHeaderComponent;
  let fixture: ComponentFixture<DigimonHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigimonHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DigimonHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
