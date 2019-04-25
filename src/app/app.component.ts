import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TheBlog';
  postList: Post[] = [];
  postTitle = '';
  postContent = '';

  createNewPost() {
    if (this.postTitle === '' || this.postContent === '') {
      return;
    }
    const newPost = new Post();
    newPost.title = this.postTitle;
    newPost.content = this.postContent;
    this.postList.unshift(newPost);
    this.clear();
  }

  clear() {
    this.postTitle = '';
    this.postContent = '';
  }

}
