import {Wallet} from './wallet';

export class User {
  userId: number;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  state: string;
  wallet: Wallet;

  constructor(user: any) {
    this.userId = user.userId;
    this.userName = user.userName;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
    this.state = user.state;
    this.wallet = user.wallet;
  }

  public setWallet(wallet: Wallet) {
    this.wallet = wallet;
  }
}
