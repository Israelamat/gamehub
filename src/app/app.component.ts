import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { CountComponent } from './count/count.component';
import { PartnersComponent } from './partners/partners.component';
import { GamesComponent } from './games/games.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { MiddleBannerComponent } from './middle-banner/middle-banner.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterOutlet, MainMenuComponent, 
    HeroComponent, AboutComponent, CountComponent, PartnersComponent, GamesComponent, 
    RoadmapComponent, MiddleBannerComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gamehub';
}
