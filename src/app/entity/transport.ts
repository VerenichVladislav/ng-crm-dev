export class  Transport {
  transportId: number;
  name: string;
  passengerCapacity: string;

  constructor(transport: any) {
    this.transportId = transport.transportId;
    this.name = transport.name;
    this.passengerCapacity = transport.passengerCapacity;
  }
}
