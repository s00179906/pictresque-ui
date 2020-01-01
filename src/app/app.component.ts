import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { slider } from "./animations/route-animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [slider]
})
export class AppComponent {
  title = "Pictresque";
  showNavbar: Boolean = true;

  /**
   *
   */
  constructor() {
    this.showNavbar = window.location.href.includes("/register") ? false : true;
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animation"]
    );
  }
}
