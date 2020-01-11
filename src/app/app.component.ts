import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { slider } from "./animations/route-animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [slider]
})
export class AppComponent implements OnInit {
  title = "Pictresque";
  showNavbar: Boolean = true;

  constructor() {
    console.log("CONSTRUCTOR CALLED");
  }

  ngOnInit() {
    this.showNavbar = window.location.href.includes("/auth") ? false : true;

    // console.log("ngOnInit CALLED");
    // console.log("SHOW NAVBAR? -->", this.showNavbar);
    // console.log("WINDOW URL -->", window.location.href);
  }
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animation"]
    );
  }
}
