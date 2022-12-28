class UserDTO {
  constructor(User) {
    this.id = User.id;
    this.email = User.email;
    this.name = User.firstName + " " + User.lastName;
  }
  toJSON() { // POJO
    return {
      id: this.id,
      email: this.email,
      name: this.name,
    };
  }
}

module.exports = UserDTO;
