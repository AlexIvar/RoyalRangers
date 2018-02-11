export class PostModel {
  id: string;           // id of post
  title: string;        // title of post
  content: string;      // content of post
  image: string;        // image for post
  date: string;         // date of post posted
  when: string;         // date of when event starts

  constructor() {
    this.id = "";
    this.title = "";
    this.content = "";
    this.image = "";
    this.date = "";
    this.when = "";
  }
}
