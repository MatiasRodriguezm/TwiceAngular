import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-momo',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './momo.component.html',
  styleUrl: './momo.component.css'
})
export class MomoComponent {

}
