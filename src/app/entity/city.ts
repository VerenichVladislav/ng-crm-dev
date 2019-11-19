export class City {
  cityName: string;
  country: string;
  foundationDate: number;
  population: number;

  constructor(city: City) {
    this.cityName = city.cityName;
    this.country = city.country;
    this.foundationDate = city.foundationDate;
    this.population = city.population;
  }
}
