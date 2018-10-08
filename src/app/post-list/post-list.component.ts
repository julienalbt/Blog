import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  loveIts: number = 0;
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postCreated_at: Date;

  constructor() { }

  ngOnInit() {
  }

  addOne() {
    this.loveIts ++;
  }

  removeOne() {
    this.loveIts --;
  }
}
