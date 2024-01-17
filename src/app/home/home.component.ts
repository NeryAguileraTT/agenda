import { ThisReceiver } from '@angular/compiler';
import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule,MatToolbarModule, MatButtonModule, MatIconModule,MatCardModule, MatListModule,MatSidenavModule,RouterOutlet, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  {
  showFiller = false;

  @ViewChild('world')
  private canvasRef! : ElementRef;

  @ViewChild('viewport')
  private canvas2! : ElementRef;

  worldXAngle = 0;
  worldYAngle = 0;
  d = 0;

  get transformStyle(): string {
    return `translateZ(${this.d}px) rotateX(${this.worldXAngle}deg) rotateY(${this.worldYAngle}deg)`;
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.worldYAngle = -0.5 + (event.clientX / window.innerWidth) * 180;
    this.worldXAngle = 0.5 - (event.clientY / window.innerHeight) * 180;
  }
}
