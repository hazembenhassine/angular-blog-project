import { Component } from '@angular/core';
import { Post } from './post';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TheBlog';
  postList: Post[] = this.postService.postList;
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

}
