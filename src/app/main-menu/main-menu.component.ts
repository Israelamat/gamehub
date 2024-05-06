import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {

  isScrolled = false;

  constructor() {
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;

      if (target.classList.contains('mobile-nav-toggle')) {
        const navbar = document.querySelector('#navbar');
        if (navbar) {
          navbar.classList.toggle('navbar-mobile');
          const mobileMenu = navbar.querySelector('ul');
          if (mobileMenu) {
            mobileMenu.classList.toggle('show');
          }
        }
        target.classList.toggle('bi-list');
        target.classList.toggle('bi-x');
      }

      if (target.closest('.navbar') && target.parentElement?.classList.contains('dropdown')) {
        const navbar = document.querySelector('#navbar');
        if (navbar && navbar.classList.contains('navbar-mobile')) {
          event.preventDefault();
          const dropdown = target.nextElementSibling as HTMLElement;
          if (dropdown) {
            dropdown.classList.toggle('dropdown-active');
          }
        }
      }
    });    
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }
}
