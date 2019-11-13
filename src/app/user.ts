export class User {
  userName: string;
  hashPass: string; //пока для простоты, но его не должно быть здесь
  firstName: string;
  lastName: string;
  email: string;
  state: string;
  role: string;
  //currency: string;
  wallet: object;
  bill: number;
  constructor(user: User) {
    this.userName = user.userName;
    this.hashPass = user.hashPass;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
    this.role = user.role;
    this.state = user.state;
    //this.currency = user.currency;
    this.wallet = {};
  }

  setRole(role: string) {
    this.role = role;
  }

  setWallet(wallet: object) {
    this.wallet = wallet;
  }
}
