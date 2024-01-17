import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-transport',
  standalone: true,
  imports: [MatButtonModule,MatToolbarModule, MatButtonModule,MatIconModule,RouterOutlet, RouterLink],
  templateUrl: './transport.component.html',
  styleUrl: './transport.component.scss'
})
export class TransportComponent {

}
