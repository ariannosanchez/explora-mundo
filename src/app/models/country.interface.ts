export interface Country {
    name: {
      common: string;
      official: string;
    };
    capital: string[];
    region: string;
    subregion: string;
    population: number;
    flags: {
      png: string;
    };
    coatOfArms: {
      png: string;
    };
    maps: {
      googleMaps: string;
      openStreetMaps: string;
    };
  }
  
