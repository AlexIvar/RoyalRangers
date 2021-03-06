export class AnnouncementModel {
  id: string;                // id of post ( generated by mlab )
  pid: number;               // pid of post ( auto incremented )
  title: string;             // title of post
  content: string;           // content of post
  date: string;              // Date of announcement

  constructor() {
    this.id = "";
    this.title = "";
    this.content = "";
    this.date = "";
  }
}
