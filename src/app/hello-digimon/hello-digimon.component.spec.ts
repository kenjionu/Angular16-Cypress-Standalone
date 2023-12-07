import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloDigimonComponent } from './hello-digimon.component';

describe('HelloDigimonComponent', () => {
  let component: HelloDigimonComponent;
  let fixture: ComponentFixture<HelloDigimonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloDigimonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelloDigimonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
