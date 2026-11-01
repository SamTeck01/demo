import hero from '../assets/img/hero.jpg'
import decatur from '../assets/img/decatur.jpg'
import decaturIn from '../assets/img/decatur-in.jpg'
import eaBungalow from '../assets/img/ea-bungalow.jpg'
import eaIn from '../assets/img/ea-in.jpg'
import stone from '../assets/img/stone.jpg'
import stoneIn from '../assets/img/stone-in.jpg'
import newnan from '../assets/img/newnan.jpg'
import town from '../assets/img/town.jpg'
import townIn from '../assets/img/town-in.jpg'
import starter from '../assets/img/starter.jpg'
import starterIn from '../assets/img/starter-in.jpg'
import kitchen from '../assets/img/kitchen.jpg'

export const heroImg = hero
export const office = {
  phone: '404 461 9824', tel: '+14044619824', email: 'Info@MahoganyRealEstate.com',
  address: ['1 W. Court Square, Suite 750', 'Decatur, GA 30030'],
  hours: [['Monday to Friday', '9:00 to 6:00'], ['Saturday', '10:00 to 3:00'], ['Sunday', 'By appointment']],
}

export const areas = [
  { id: 'decatur', name: 'Decatur', rate: 330, median: 560000 },
  { id: 'east-atlanta', name: 'East Atlanta', rate: 300, median: 450000 },
  { id: 'stone-mountain', name: 'Stone Mountain', rate: 190, median: 320000 },
  { id: 'newnan', name: 'Newnan', rate: 175, median: 380000 },
]

// Sample listings for the demo.
export const homes = [
  { id: 'decatur-cottage', title: 'Decatur cottage near the square', area: 'decatur', price: 589000, beds: 3, baths: 2, sqft: 1540, status: 'New', imgs: [decatur, decaturIn, kitchen], text: 'A porch, original floors and a ten-minute walk to the square.' },
  { id: 'east-atlanta-bungalow', title: 'East Atlanta bungalow', area: 'east-atlanta', price: 449000, beds: 3, baths: 2, sqft: 1380, status: null, imgs: [eaBungalow, eaIn, kitchen], text: 'A renovated bungalow near the village, with a deep back yard.' },
  { id: 'stone-mountain-family', title: 'Stone Mountain family home', area: 'stone-mountain', price: 315000, beds: 4, baths: 3, sqft: 2240, status: null, imgs: [stone, stoneIn, kitchen], text: 'Four bedrooms, a finished basement and a fenced yard.' },
  { id: 'newnan-historic', title: 'Newnan historic home', area: 'newnan', price: 425000, beds: 4, baths: 3, sqft: 2600, status: null, imgs: [newnan, decaturIn, stoneIn], text: 'A 1910 home with a wraparound porch, a block from downtown Newnan.' },
  { id: 'decatur-townhouse', title: 'Decatur townhouse', area: 'decatur', price: 499000, beds: 3, baths: 3, sqft: 1820, status: null, imgs: [town, townIn, kitchen], text: 'A newer townhouse with a garage, a short walk to MARTA.' },
  { id: 'east-atlanta-starter', title: 'East Atlanta starter', area: 'east-atlanta', price: 335000, beds: 2, baths: 1, sqft: 1050, status: 'Price drop', imgs: [starter, starterIn, eaIn], text: 'A first home with good bones and a garden.' },
]

export const areaName = id => areas.find(a => a.id === id)?.name || id
