import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {

  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod non lorem at ullamcorper. ' +
        'Aliquam commodo eros id ex auctor iaculis. Quisque eu rutrum quam. Proin aliquam sit amet turpis sit amet mollis. '
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod non lorem at ullamcorper. ' +
        'Aliquam commodo eros id ex auctor iaculis. Quisque eu rutrum quam. Proin aliquam sit amet turpis sit amet mollis. '
    },
    {
      title: 'Encore un post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod non lorem at ullamcorper. ' +
        'Aliquam commodo eros id ex auctor iaculis. Quisque eu rutrum quam. Proin aliquam sit amet turpis sit amet mollis. ' +
        'Nulla ut sem in ex ornare dignissim vitae molestie augue. Duis tempor magna at elit ornare, nec interdum diam tempor. '
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
