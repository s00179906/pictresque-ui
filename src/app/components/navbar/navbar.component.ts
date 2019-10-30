import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  scrollPost: any = null;
  userName: string;
  constructor() {}

  ngOnInit() {
  }

  // @HostListener('window:scroll', ['$event'])
  // doSomething(event) {
  //   // console.debug("Scroll Event", document.body.scrollTop);
  //   // see András Szepesházi's comment below
  //   console.log('Scroll Event', window.pageYOffset);
  //   let navbar = document.getElementsByClassName('nav-container');
  //   this.scrollPost = window.pageYOffset;
  //   if (this.scrollPost >= navbar.offsetTop) {
  //     navbar.classList.add
  //   }
  // }
}
