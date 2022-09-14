import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  showFirst!: boolean;
  public isChecked = false;

  constructor(public _router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem("Theme") === "dark") {
      this.isChecked = true;
    }
  }

  navigateToHome() {
    this._router.navigate(['/']);
  }

  checkSwitch() { 
    if (this.isChecked === false) {
      document.body.classList.add('dark-theme');
      localStorage.setItem("Theme", "dark");
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem("Theme", "light");
    }
  }

}
