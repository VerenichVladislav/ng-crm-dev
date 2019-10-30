export class User {
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  currency: string;
  wallet: object;
  bill: number;

  constructor(user: User) {
    this.userName = user.userName;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
    this.currency = user.currency;
    this.wallet = user.wallet;
  }

}
