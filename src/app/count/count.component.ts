import { Component, HostListener, AfterViewInit, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-count',
  standalone: true,
  imports: [],
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements AfterViewInit {
  countDevelopers: number = 0;
  countGames: number = 0;
  countHours: number = 0;
  countIssues: number = 0;
  counting: boolean = false;

  constructor(private elementRef: ElementRef) {}

  addWithLimit(initialNumber: number, limitNumber: number, step: number): number {
    return Math.min(initialNumber + step, limitNumber);
  }

  ngAfterViewInit() {
    this.startCountingWhenVisible();
  }

  startCountingWhenVisible() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !this.counting) {
          this.startCounting();
          observer.disconnect();
        }
      });
    });

    observer.observe(this.elementRef.nativeElement);
  }

  startCounting() {
    this.counting = true;
    this.countDevelopersStop();
    this.countGamesStop();
    this.countHoursStop();
    this.countIssuesStop();
  }

  countDevelopersStop(): void {
    let stopper = setInterval(() => {
      this.countDevelopers = this.addWithLimit(this.countDevelopers, 232, 1);
      if (this.countDevelopers === 232) {
        clearInterval(stopper);
      }
    }, 10); 
  }

  countGamesStop(): void {
    let stopper = setInterval(() => {
      this.countGames = this.addWithLimit(this.countGames, 1345, 5);
      if (this.countGames === 1345) {
        clearInterval(stopper);
      }
    }, 10); 
  }

  countHoursStop(): void {
    let stopper = setInterval(() => {
      this.countHours = this.addWithLimit(this.countHours, 5000, 25);
      if (this.countHours === 5000) {
        clearInterval(stopper);
      }
    }, 10);
  }

  countIssuesStop(): void {
    let stopper = setInterval(() => {
      this.countIssues = this.addWithLimit(this.countIssues, 450, 2);
      if (this.countIssues === 450) {
        clearInterval(stopper);
      }
    }, 10);
  }


  // @HostListener('window:scroll', ['$event'])
  // onScroll(event: Event) {
  //   if (window.scrollY > 100) {
  //     this.countDevelopersStop();
  //     this.countGamesStop();
  //     this.countHoursStop();
  //     this.countIssuesStop();
  //   }
  // }
}
