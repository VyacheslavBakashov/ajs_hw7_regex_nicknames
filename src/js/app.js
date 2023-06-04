export default class Validator {
  constructor(username) {
    this.username = username;
  }

  valideateUsername() {
    const re1 = /^[^\d\-_][\w-]+[^\d\-_]$/;
    const re2 = /\d{4,}/;
    return re1.test(this.username) && !re2.test(this.username);
  }
}
