type TCarData = {
  name: string;
  tagline: string;
  taglineCTA: string;
  image: string;
};

export const carData: TCarData[] = [
  {
    name: 'Model S',
    tagline: 'Starting at $69,420',
    taglineCTA: 'Touchless Delivery',
    image: require('../../assets/images/ModelS.jpeg'),
  },
  {
    name: 'Model 3',
    tagline: 'Order Online for',
    taglineCTA: 'Touchless Delivery',
    image: require('../../assets/images/Model3.jpeg'),
  },
  {
    name: 'Model X',
    tagline: 'Order Online for',
    taglineCTA: 'Touchless Delivery',
    image: require('../../assets/images/ModelX.jpeg'),
  },
  {
    name: 'Model Y',
    tagline: 'Order Online for',
    taglineCTA: 'Touchless Delivery',
    image: require('../../assets/images/ModelY.jpeg'),
  },
];
