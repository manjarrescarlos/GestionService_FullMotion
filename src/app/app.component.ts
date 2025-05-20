import { Component } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { SocialSidebarComponent } from './components/social-sidebar/social-sidebar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AnimationBannerComponent } from './components/animation-banner/animation-banner.component';
import { RouterModule } from '@angular/router'; // Necesario para usar router-outlet

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    SocialSidebarComponent,
    HeroComponent,
    AnimationBannerComponent,
    RouterModule // Para routerLink y router-outlet
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fullmotion';
}
