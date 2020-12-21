export type TCarData = {
  name: string;
  tagline: string;

  image: string;
};

export const carData: TCarData[] = [
  {
    name: 'Model S',
    tagline: 'Starting at $69,420',

    image: require('./ModelS.jpeg'),
  },
  {
    name: 'Model 3',
    tagline: 'Starting at $69,420',

    image: require('./Model3.jpeg'),
  },
  {
    name: 'Model X',
    tagline: 'Starting at $69,420',

    image: require('./ModelX.jpeg'),
  },
  {
    name: 'Model Y',
    tagline: 'Starting at $69,420',

    image: require('./ModelY.jpeg'),
  },
];
