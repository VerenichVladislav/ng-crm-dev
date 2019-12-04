import {Wallet} from './wallet';
import {Ticket} from "./ticket";
import {Reservation} from "./reservation";

export class User {
  userId: number;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  state: string;
  wallet?: Wallet;
  tickets?: Ticket[] = [];
  reservations?: Reservation[] = [];

  constructor(user: any = {} as any) {
    let {
      tickets = [],
      reservations = []
    } = user;

    this.userId = user.userId;
    this.userName = user.userName;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
    this.state = user.state;
    this.wallet = user.wallet;
    tickets.forEach(ticket => {
      this.tickets.push(new Ticket(ticket));
    });
    reservations.forEach(reserv => {
      this.reservations.push(new Reservation(reserv));
    });
  }

  public setWallet(wallet: Wallet) {
    this.wallet = wallet;
  }
}
