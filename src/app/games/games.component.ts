import { Component, OnInit } from '@angular/core';
import Isotope from 'isotope-layout';
declare const select: any;
declare const on: any;
declare const AOS: any;
declare const GLightbox: any;
declare const Swiper: any;

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('load', () => {
      const portfolioContainer = document.querySelector('.portfolio-container') as HTMLElement;
      if (portfolioContainer) {
        const portfolioIsotope = new Isotope(portfolioContainer, {
          itemSelector: '.portfolio-item'
        });
    
        const portfolioFilters = document.querySelectorAll('#portfolio-flters li');
    
        portfolioFilters.forEach((filter) => {
          filter.addEventListener('click', (e) => {
            e.preventDefault();
            portfolioFilters.forEach((el) => {
              el.classList.remove('filter-active');
            });
            (e.target as HTMLElement).classList.add('filter-active');
    
            portfolioIsotope.arrange({
              filter: (e.target as HTMLElement).getAttribute('data-filter') || '*'
            });
            // No necesitas 'on' para los eventos, Isotope los maneja internamente
          });
        });
      }
    });
    
    /**
     * Animation on scroll
     */
    window.addEventListener('load', () => {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    });
    
  }
}