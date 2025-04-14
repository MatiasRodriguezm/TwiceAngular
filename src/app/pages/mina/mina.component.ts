import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-mina',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './mina.component.html',
  styleUrl: './mina.component.css'
})
export class MinaComponent {

}
