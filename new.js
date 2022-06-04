class User {
  static count = 0;
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
    User.count++;
  }

  printNoOfUsers() {
    console.log(`No 0f Users :${User.count}`);
  }

  register() {
    console.log(this.username + " is now registered");
  }
}

class Member extends User {
  constructor(username, email, password, memberpackage) {
    super(username, email, password);
    this.package = memberpackage;
    let todaysDate = new Date();
    const membershipactivetillYear = todaysDate.getFullYear();
    const membershipactivetillMonth = todaysDate.getMonth();
    const membershipactivetillDay = todaysDate.getDay();
    this.membershipactivetilldate = new Date(
      membershipactivetillYear,
      membershipactivetillMonth,
      membershipactivetillDay
    );
  }

  renewMembership() {
    const membershipactivetillYear =
      this.membershipactivetilldate.getFullYear();
    const membershipactivetillMonth = this.membershipactivetilldate.getMonth();
    const membershipactivetillDay = this.membershipactivetilldate.getDay();

    this.membershipactivetilldate = new Date(
      membershipactivetillYear,
      membershipactivetillMonth + 1,
      membershipactivetillDay
    );
  }

  subscriptionActiveTill() {
    console.log(
      this.username +
        " is scubscribed to " +
        this.package +
        " uptill " +
        this.membershipactivetilldate
    );
  }

  getPackage() {
    console.log(this.username + " is scubscribed to " + this.package);
  }
}

const user1 = new Member(
  "Vidhya",
  "vidhyarose@gmail.com",
  "jack143",
  "Yearly package"
);

user1.getPackage();
user1.renewMembership();
user1.subscriptionActiveTill();
user1.printNoOfUsers();
