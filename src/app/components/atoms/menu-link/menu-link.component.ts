import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-link',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu-link.component.html',
  styleUrl: './menu-link.component.css'
})
export class MenuLinkComponent {

  @Input() link: string = '';
  @Input() text: string = '';
}
