import ice0 from './ice0.jpeg';
import ice1 from './ice1.jpeg';
import ice2 from './ice2.jpeg';
import ice3 from './ice3.jpeg';
import ice4 from './ice4.jpeg';
import ice5 from './ice5.jpeg';    
import ice6 from './ice6.jpeg';
import ice7 from './ice7.jpeg';

import Tred from './TRED.jpg';

import caramel1 from './caramel1.jpeg';
import caramel2 from './caramel2.jpeg';
import caramel3 from './caramel3.jpeg';
import caramel4 from './caramel4.jpeg';

import chocolate1 from './choco1.jpeg';
import chocolate2 from './choco2.jpeg';
import chocolate3 from './choco3.jpeg';
import chocolate4 from './choco4.jpeg';

import vanilla1 from './vanilla1.jpeg';
import vanilla2 from './vanilla2.jpeg';
import vanilla3 from './vanilla3.jpeg';
import vanilla4 from './vanilla4.jpeg';

export const flavorData = [
  {
    id: "scoops",
    label: "Scoop Collection",
    products: [
      { id: 1, name: "Velvet Chocolate", price: 350, img: chocolate1 }, 
      { id: 2, name: "Sicilian Pistachio", price: 400, img: ice1 },
      { id: 3, name: "Wild Berry Swirl", price: 350, img: ice2 },
      { id: 4, name: "Madagascar Gold", price: 550, img: ice3 },
      { id: 5, name: "Midnight Cream", price: 200, img: ice4 },
      { id: 6, name: "Roasted Almond", price: 420, img: ice5 },
    ]
  },
  {
    id: "chocolate",
    label: "Noir Chocolate",
    products: [
      { id: 11, name: "Dark Truffle", price: 350, img: chocolate1 },
      { id: 12, name: "Swiss Cocoa", price: 550, img: chocolate2 },
      { id: 13, name: "Fudge Brownie", price: 400, img: chocolate3 },
      { id: 14, name: "Midnight Ganache", price: 350, img: chocolate4 },
    ]
  },
  {
    id: "caramel",
    label: "Golden Caramel",
    products: [
      { id: 21, name: "Salted Caramel", price: 600, img: caramel1 },
      { id: 22, name: "Butter Toffee", price: 550, img: caramel2 },
      { id: 23, name: "Dulce de Leche", price: 400, img: caramel3 },
      { id: 24, name: "Caramel Brûlée", price: 350, img: caramel4 },
    ]
  },
  {
    id: "vanilla",
    label: "Pure Vanilla",
    products: [
      { id: 31, name: "French Vanilla", price: 400, img: vanilla1 },
      { id: 32, name: "Vanilla Bean", price: 550, img: vanilla2 },
      { id: 33, name: "Snowy Cream", price: 350, img: vanilla3 },
      { id: 34, name: "White Velvet", price: 300, img: vanilla4 },
    ]
  }
];

export const TrendingIceImage = {
  id: "Trend",
  img: Tred 
};