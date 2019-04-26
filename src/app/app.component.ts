import {Component, OnInit} from '@angular/core';
import { Post } from './post';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'TheBlog';
  postList: Post[];
  postTitle = '';
  postContent = '';

  constructor(private postService: PostService) {}

  createNewPost() {
    if (this.postTitle === '' || this.postContent === '') {
      return;
    }
    this.postService.pushPost(this.postTitle, this.postContent);
    this.clear();
  }

  clear() {
    this.postTitle = '';
    this.postContent = '';
  }

  ngOnInit() {
    this.postList = this.postService.postList;
  }

}
