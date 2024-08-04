import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
home=[
  {
    id:1,
    Text:"USA",
    Image:"../../../assets/OIP (1).jpeg"
  },
  {
    id:2,
    Text:"UAE",
    Image:"../../../assets/UAE-flag_18d6a133666_medium.jpg"
  },
  {
    id:3,
    Text:"UK",
    Image:"../../../assets/zwE4y3.jpg"
  },
  {
    id:4,
    Text:"Malasia",
    Image:"../../../assets/malaysia-travel-583d01ac5f9b58d5b13cec0d.jpg"
  }
]
}
