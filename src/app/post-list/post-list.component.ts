import { Component, OnInit } from '@angular/core';
import {Post} from '../post';
import {PostService} from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

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
