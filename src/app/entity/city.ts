export class City {
  cityName: string;
  country: string;
  foundationDate: number;
  population: number;
  image:string;
  lat:number;
  lon:number;

  constructor(city: City) {
    this.cityName = city.cityName;
    this.country = city.country;
    this.foundationDate = city.foundationDate;
    this.population = city.population;
    this.image=this.image;
    this.lat = city.lat;
    this.lon = city.lon;
  }
}
