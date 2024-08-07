import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MenuLinkComponent } from '../../atoms/menu-link/menu-link.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenuLinkComponent,NgFor],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
