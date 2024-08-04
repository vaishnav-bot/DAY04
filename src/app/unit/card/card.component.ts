import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  department=[
    {
      id:1,
      Title:"Aerospace",
      Image:"../../../assets/aero.jpg",
      description:"Pushing boundaries & defending horizons with cutting-edge technologies"
    },
    {
      id:2,
      Title:"Banking & finance",
      Image:"../../../assets/bfs.jpg",
      description:""
    },
    {
      id:3,
      Title:"Healthcare",
      Image:"../../../assets/Rectangle-20 (he).jpg",
      description:""
    },
    {
      id:4,
      Title:"Locomotive",
      Image:"../../../assets/loco.jpg",
      description:""
    },
    {
      id:5,
      Title:"Industrial",
      Image:"../../../assets/Rectangle-ind.png",
      description:""
    },
    {
      id:6,
      Title:"DevOps",
      Image:"../../../assets/dev.jpg",
      description:""
    },
    {
      id:7,
      Title:"Insurance",
      Image:"../../../assets/insu.jpg",
      description:""
    },
    {
      id:8,
      Title:"Mobility",
      Image:"../../../assets/Rectangle-20 (mo).jpg",
      description:""
    }
  ]

}