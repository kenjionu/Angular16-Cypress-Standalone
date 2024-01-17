import { Component } from '@angular/core';
import { DigimonButtonComponent } from '../components/atoms/digimon-button/digimon-button.component';

@Component({
  selector: 'app-hello-digimon',
  standalone: true,
  imports: [DigimonButtonComponent],
  templateUrl: './hello-digimon.component.html',
  styleUrl: './hello-digimon.component.scss'
})
export class HelloDigimonComponent {

}
