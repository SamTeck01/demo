import hero from '../assets/img/hero.jpg'
import pearl from '../assets/img/pearl.jpg'
import pearlIn from '../assets/img/pearl-in.jpg'
import lusail from '../assets/img/lusail.jpg'
import westbay from '../assets/img/westbay.jpg'
import westbayIn from '../assets/img/westbay-in.jpg'
import sadd from '../assets/img/sadd.jpg'
import town from '../assets/img/town.jpg'
import townIn from '../assets/img/town-in.jpg'
import dPearl from '../assets/img/d-pearl.jpg'
import dLusail from '../assets/img/d-lusail.jpg'
import dWestbay from '../assets/img/d-westbay.jpg'
import dSadd from '../assets/img/d-sadd.jpg'
import dusk from '../assets/img/dusk.jpg'

export const heroImg = hero
export const duskImg = dusk
export const office = {
  email: 'info@gulfavenues.com', address: 'Doha, State of Qatar',
  hours: [['Sunday to Thursday', '8:30 to 17:30'], ['Saturday', '10:00 to 14:00'], ['Friday', 'Closed']],
}

// Commute minutes to the two main work districts; rents are typical monthly QAR.
export const districts = [
  { id: 'the-pearl', name: 'The Pearl', img: dPearl, freehold: true, buyFrom: 1100000, rentFrom: 8500, toWestBay: 15, toLusail: 10, why: 'Marina life, beaches and restaurants on the water.' },
  { id: 'lusail', name: 'Lusail', img: dLusail, freehold: true, buyFrom: 850000, rentFrom: 6500, toWestBay: 20, toLusail: 5, why: 'The new city: the tram, Place Vendôme and newer buildings.' },
  { id: 'west-bay', name: 'West Bay', img: dWestbay, freehold: true, buyFrom: 1300000, rentFrom: 7500, toWestBay: 5, toLusail: 20, why: 'Walk to the office, the Corniche at your door.' },
  { id: 'al-sadd', name: 'Al Sadd', img: dSadd, freehold: false, buyFrom: 0, rentFrom: 5500, toWestBay: 15, toLusail: 25, why: 'Central, well priced, close to the malls and schools.' },
]

// Sample listings for the demo.
export const homes = [
  { id: 'pearl-porto-arabia-two-bed', title: 'Porto Arabia two-bedroom', district: 'the-pearl', lease: true, price: 10500, beds: 2, baths: 3, size: 140, imgs: [pearl, pearlIn], text: 'Marina views, furnished, with two parking spaces.' },
  { id: 'lusail-one-bed', title: 'Lusail one-bedroom', district: 'lusail', lease: false, price: 1050000, beds: 1, baths: 2, size: 84, imgs: [lusail, pearlIn], text: 'A freehold one-bedroom near the tram.' },
  { id: 'west-bay-three-bed', title: 'West Bay three-bedroom', district: 'west-bay', lease: false, price: 2450000, beds: 3, baths: 4, size: 190, imgs: [westbay, westbayIn], text: 'A high floor with a view along the Corniche.' },
  { id: 'al-sadd-family', title: 'Al Sadd family apartment', district: 'al-sadd', lease: true, price: 7200, beds: 3, baths: 3, size: 160, imgs: [sadd, westbayIn], text: 'Central and unfurnished, near the malls.' },
  { id: 'pearl-townhouse', title: 'Viva Bahriya townhouse', district: 'the-pearl', lease: false, price: 3950000, beds: 3, baths: 4, size: 280, imgs: [town, townIn], text: 'A waterfront townhouse in Viva Bahriya.' },
  { id: 'lusail-two-bed-lease', title: 'Lusail Marina two-bedroom', district: 'lusail', lease: true, price: 8800, beds: 2, baths: 2, size: 125, imgs: [townIn, lusail], text: 'Two bedrooms on the marina promenade, Kahramaa included.' },
]
export const districtName = id => districts.find(d => d.id === id)?.name || id
