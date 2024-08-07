import { Component } from '@angular/core';
import { LogoComponent } from '../../atoms/logo/logo.component';
import { MenuComponent } from '../../molecules/menu/menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SocialMediaIconsComponent } from '../../molecules/social-media-icons/social-media-icons.component';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [LogoComponent, MenuComponent, MatToolbarModule, SocialMediaIconsComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {

}
