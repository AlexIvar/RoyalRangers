export class UserModel {
  id: string;             // id of user
  userName: string;       // users username
  password: string;       // users password

  constructor() {
    this.id = "";
    this.userName = "";
    this.password = "";
  }
}
