import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-digimon-button',
  standalone: true,
  imports: [],
  templateUrl: './digimon-button.component.html',
  styleUrl: './digimon-button.component.scss'
})
export class DigimonButtonComponent {
@Input() label: string = "Button";
@Input() type: 'button' | 'submit'| 'reset' = "button"
@Input() btnClass: string = 'btn-primary'

onClick(){
  
}
}
