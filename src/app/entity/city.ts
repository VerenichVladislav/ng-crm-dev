export class City {
  cityId: number;
  cityName?: string;
  country?: string;
  population?: number;
  image?: string;

  constructor(city: City = {} as City) {
    let {
      cityId = -1,
      cityName = '',
      country = '',
      population = -1,
      image = ''
    } = city;

    this.cityId = cityId;
    this.cityName = cityName;
    this.country = country;
    this.population = population;
    this.image = image;
  }
}
