import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isShow: boolean;
  topPosToStartShowing = 100;

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    })
  })

  constructor() { }

  ngOnInit(): void {
    this.getThemePreference();
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => this.observer.observe(el));
  }

  preference: any;
  getThemePreference() {
    this.preference = localStorage.getItem("Theme");
    if (this.preference === "dark") {
      console.log("Theme is dark")
      document.body.classList.add('dark-theme');
    }
  }

  @HostListener('window:scroll')
  checkScroll() {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
  
}
