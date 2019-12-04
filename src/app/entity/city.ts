export class City {
  cityId: number;
  cityName?: string;
  country?: string;
  population?: number;
  image?: string;
  lat?:number;
  lon?:number;

  constructor(city: City = {} as City) {
    let {
      cityId = -1,
      cityName = '',
      country = '',
      population = -1,
      image = '',
      lat = 0,
      lon = 0,
    } = city;

    this.cityId = cityId;
    this.cityName = cityName;
    this.country = country;
    this.population = population;
    this.image = image;
    this.lat = lat;
    this.lon = lon;
  }
}
