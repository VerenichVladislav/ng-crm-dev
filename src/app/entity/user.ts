import {Wallet} from './wallet';

export class User {
  userId: number;
  userName: string;
  firstName: string;
  lastName: string;
  hashPass: string;
  email: string;
  state: string;
  role: string;
  wallet: Wallet;

  constructor(user: any) {
    this.userId = user.userId;
    this.userName = user.userName;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.hashPass = user.hashPass;
    this.email = user.email;
    this.role = user.role;
    this.state = user.state;
    this.wallet = user.wallet;
  }

  setRole(role: string) {
    this.role = role;
  }

  public setWallet(wallet: Wallet) {
    this.wallet = wallet;
  }
}
