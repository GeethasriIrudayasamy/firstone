class User {
  static count = 0;
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
    User.count++;
  }
  printNoOfUsers() {
    console.log(User.count);
  }
  registeredUSer() {
    console.log(`${this.username} is registered`);
  }
}

const user1 = new User("Jaya", "jayajack@gmail.com", "abc123");
const user2 = new User("Vidhya", "vidhyarose@gmail.com", "def456");

user1.registeredUSer();
user2.registeredUSer();

User.printNoOfUsers();
