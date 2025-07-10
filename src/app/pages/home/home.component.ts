import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { SocialSidebarComponent } from '../../components/social-sidebar/social-sidebar.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { AnimationBannerComponent } from '../../components/animation-banner/animation-banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    SocialSidebarComponent,
    HeroComponent,
    AnimationBannerComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}
