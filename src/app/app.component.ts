import { Component } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { SocialSidebarComponent } from './components/social-sidebar/social-sidebar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AnimationBannerComponent } from './components/animation-banner/animation-banner.component';
import { RouterModule } from '@angular/router';
import { DrivingExperienceComponent } from './driving-experience/driving-experience.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    SocialSidebarComponent,
    HeroComponent,
    AnimationBannerComponent,
    DrivingExperienceComponent,
    ImageGalleryComponent,
    TestimonialComponent,
    FooterComponent,
    RouterModule 
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fullmotion';
}
