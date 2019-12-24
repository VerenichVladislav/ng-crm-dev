export class Wallet {
  sum: number;
  userId: number;
  walletId: number;

  constructor(wallet: Wallet) {
    this.sum = wallet.sum;
    this.userId = wallet.userId;
    this.walletId = wallet.walletId;
  }
}
