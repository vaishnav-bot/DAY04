import { Component } from '@angular/core';
import { ButtonComponent } from '../../unit/button/button.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
