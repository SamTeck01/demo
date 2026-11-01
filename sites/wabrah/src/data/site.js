import hero from '../assets/img/hero.jpg'
import pearl from '../assets/img/pearl.jpg'
import lusail from '../assets/img/lusail.jpg'
import westbay from '../assets/img/westbay.jpg'
import marina from '../assets/img/marina.jpg'
import kitchen from '../assets/img/kitchen.jpg'
import villaIn from '../assets/img/villa-in.jpg'
import lounge from '../assets/img/lounge.jpg'
import pent from '../assets/img/pent.jpg'
import pentIn from '../assets/img/pent-in.jpg'
import town from '../assets/img/town.jpg'
import townIn from '../assets/img/town-in.jpg'
import family from '../assets/img/family.jpg'
import familyIn from '../assets/img/family-in.jpg'

export const heroImg = hero
export const office = {
  phone: '+974 4481 6328', tel: '+97444816328', email: 'info@wabrah.com', address: 'Doha, State of Qatar',
  hours: [['Sunday to Thursday', '8:00 to 17:00'], ['Saturday', '9:00 to 13:00'], ['Friday', 'Closed']],
}

export const districts = [
  { id: 'the-pearl', name: 'The Pearl', img: pearl, own: 'Freehold', feel: 'Marina life', drive: '15 min to West Bay', rent: 'QAR 10,500 for a 2-bed' },
  { id: 'lusail', name: 'Lusail', img: lusail, own: 'Freehold', feel: 'The new city', drive: '20 min to West Bay', rent: 'QAR 9,000 for a 2-bed' },
  { id: 'west-bay', name: 'West Bay', img: westbay, own: 'Freehold zones', feel: 'City centre', drive: '20 min to the airport', rent: 'QAR 9,500 for a 2-bed' },
  { id: 'al-waab', name: 'Al Waab', img: villaIn, own: 'Lease', feel: 'Family compounds', drive: '20 min to West Bay', rent: 'QAR 18,000 for a villa' },
]

// Sample listings for the demo.
export const homes = [
  { id: 'pearl-marina-two-bed', title: 'Pearl marina two-bedroom', district: 'the-pearl', lease: false, price: 1850000, beds: 2, baths: 3, size: 141, status: 'New', imgs: [marina, kitchen], text: 'A marina-facing two-bedroom in Porto Arabia with a long balcony and two parking bays.' },
  { id: 'lusail-marina-one-bed', title: 'Lusail Marina one-bedroom', district: 'lusail', lease: false, price: 1150000, beds: 1, baths: 2, size: 86, status: null, imgs: [lounge, kitchen], text: 'A one-bedroom on the Lusail waterfront, close to the tram and Place Vendôme.' },
  { id: 'pearl-townhouse', title: 'Pearl townhouse', district: 'the-pearl', lease: false, price: 4100000, beds: 3, baths: 4, size: 290, status: null, imgs: [town, townIn], text: 'A three-storey townhouse with a private entrance, a roof terrace and beach access.' },
  { id: 'west-bay-penthouse', title: 'West Bay penthouse', district: 'west-bay', lease: false, price: 6900000, beds: 4, baths: 5, size: 420, status: 'Exclusive', imgs: [pent, pentIn], text: 'A penthouse over the Corniche with a private terrace and views across the bay.' },
  { id: 'al-waab-compound-villa', title: 'Al Waab compound villa', district: 'al-waab', lease: true, price: 18000, beds: 4, baths: 5, size: 350, status: 'For lease', imgs: [villaIn, familyIn], text: 'A family villa in a gated compound with a shared pool, gym and play areas.' },
  { id: 'lusail-family-apartment', title: 'Lusail family apartment', district: 'lusail', lease: true, price: 9200, beds: 3, baths: 3, size: 170, status: 'For lease', imgs: [family, familyIn], text: 'Three bedrooms in Fox Hills, with Kahramaa included and covered parking.' },
]
export const districtName = id => districts.find(d => d.id === id)?.name || id
