import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postList: Post[] = [];

  constructor() { }

  pushPost(postTitle: string, postContent: string) {
    const newPost = new Post();
    newPost.title = postTitle;
    newPost.content = postContent;
    this.postList.unshift(newPost);
  }
}
