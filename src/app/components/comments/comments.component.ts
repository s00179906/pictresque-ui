import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-comments",
  templateUrl: "./comments.component.html",
  styleUrls: ["./comments.component.scss"]
})
export class CommentsComponent implements OnInit {
  constructor() {}

  userName = "";
  userNames = [];
  comment = "";
  comments = [];

  postComment() {
    this.comments.push(this.comment);
    console.log(this.userName);
    this.userNames.push(this.userName);
    this.comment = "";
    this.userName = "";
  }

  ngOnInit() {}
}
