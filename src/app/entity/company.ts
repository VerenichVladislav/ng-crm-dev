export class Company {
  companyId: number;
  companyName: string;
  rating: string;
  transportCount: number;
  constructor(company: any) {
    this.companyId = company.companyId;
    this.companyName = company.companyName;
    this.rating = company.rating;
    this.transportCount = company.transportCount;
  }
}
