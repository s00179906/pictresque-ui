import { Component, OnInit, HostListener } from "@angular/core";
import { Router, RouterPreloader } from "@angular/router";
import Swal from "sweetalert2";
import { PictresqueAPIService } from "src/app/services/pictresque-api.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  scrollPost: any = null;
  userName: string;
  userLoggedIn: Boolean =
    false || localStorage.getItem("userLoggedIn") == "true";

  constructor(private router: Router) {
    console.log("IS USER LOGGED IN --> ", this.userLoggedIn);
  }

  logout = () => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure you want to logout?",
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: "Yes Logout",
      confirmButtonAriaLabel: "Thumbs up, great!",
      cancelButtonText: "Cancel",
      cancelButtonAriaLabel: "Thumbs down"
    }).then(res => {
      if (res.value) {
        localStorage.removeItem("auth");
        this.userLoggedIn = false;
      }
    });

    let confirmBtn = Swal.getConfirmButton();
    let o = confirmBtn;
  };

  login() {
    this.router.navigate(["/register"]);
  }

  ngOnInit() {}

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
