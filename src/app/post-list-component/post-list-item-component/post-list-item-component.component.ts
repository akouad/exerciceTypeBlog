import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  postLoveIts = 0;
  postDate = new Date();


  constructor() {
  }

  ngOnInit() {
  }

  getColor() {
    if (this.postLoveIts > 0) {
      return 'green';
    } else if (this.postLoveIts < 0) {
      return 'red';
    }
  }

  love() {
    this.postLoveIts++;
    console.log("nombre de like "+ this.postLoveIts)
  }

  hate() {
    this.postLoveIts--;
    console.log("nombre de like "+ this.postLoveIts)
  }
}
