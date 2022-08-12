class UserDTO { // POJO
  constructor() {
    this.fullName = undefined;
    this.email = undefined;
  }
  setFullName(username, lastname) {
    this.fullName = username + " " + lastname;
  }
  getFullName() {
    return this.fullName;
  }
  setEmail(email) {
    this.email = email;
  }
  getEmail() {
    return this.email;
  }
}

module.exports = UserDTO;
