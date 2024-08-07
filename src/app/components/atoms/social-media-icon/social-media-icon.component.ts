import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-social-media-icon',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './social-media-icon.component.html',
  styleUrl: './social-media-icon.component.css'
})
export class SocialMediaIconComponent {

  @Input() iconSrc: string = '';
  @Input() altText: string = '';
  @Input() link: string = '';
}
