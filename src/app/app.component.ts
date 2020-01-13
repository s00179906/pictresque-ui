import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { slider } from "./animations/route-animations";
import { Store } from "@ngrx/store";
import { State } from "./state/models/state.model";
import { ShowNavbarAction } from "./state/pictresque.actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [slider]
})
export class AppComponent implements OnInit {
  title = "Pictresque";
  $showNavbar: Boolean;

  constructor(private _store: Store<State>) {
    this._store.subscribe(
      state => (this.$showNavbar = state.pictresque.showNavbar)
    );
  }

  ngOnInit() {}
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animation"]
    );
  }
}
