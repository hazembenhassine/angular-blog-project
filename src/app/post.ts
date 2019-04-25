export class Post {

  title: string;
  content: string;
  loveIts: number;
  createdAt: Date;

  constructor() {
    this.loveIts = 0;
    this.createdAt = new Date();
  }
  likeIt() {
    this.loveIts++;
  }
  dontLikeIt() {
    this.loveIts--;
  }

}
