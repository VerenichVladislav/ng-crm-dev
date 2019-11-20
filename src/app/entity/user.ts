import {Wallet} from './wallet';

export class User {
  userName: string;
  hashPass: string; //пока для простоты, но его не должно быть здесь
  firstName: string;
  lastName: string;
  email: string;
  state: string;
  role: string;
  currency: string;
  wallet: Wallet;

  constructor(user: any) {
    this.userName = user.userName;
    this.hashPass = user.hashPass;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
    this.role = user.role;
    this.state = user.state;
    this.wallet = user.wallet;
    this.currency = user.currency;
  }

  setRole(role: string) {
    this.role = role;
  }

  public setWallet(wallet: Wallet) {
    this.wallet = wallet;
  }
}
