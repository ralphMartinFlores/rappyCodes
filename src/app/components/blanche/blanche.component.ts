import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-blanche',
  templateUrl: './blanche.component.html',
  styleUrls: ['./blanche.component.scss']
})
export class BlancheComponent implements OnInit {

  isShow: boolean;
  topPosToStartShowing = 100;

  constructor() { }

  ngOnInit(): void {
    this.getThemePreference();
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
