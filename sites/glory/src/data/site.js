import beach from '../assets/img/beach.jpg'
import studio from '../assets/img/studio.jpg'
import studioIn from '../assets/img/studio-in.jpg'
import one from '../assets/img/one.jpg'
import oneIn from '../assets/img/one-in.jpg'
import two from '../assets/img/two.jpg'
import twoIn from '../assets/img/two-in.jpg'
import three from '../assets/img/three.jpg'
import town from '../assets/img/town.jpg'
import townIn from '../assets/img/town-in.jpg'
import tower from '../assets/img/tower.jpg'

export const heroImg = beach
export const towerImg = tower
export const interiorImg = townIn
export const office = {
  phone: '+973 3822 6666', tel: '+97338226666', wa: '97338226666', email: 'info@glorybh.com',
  address: 'Dilmunia Island, Muharraq, Kingdom of Bahrain',
  hours: [['Saturday to Thursday', '9:00 to 18:00'], ['Friday', 'WhatsApp only'], ['Site visits', 'Daily, by booking']],
}

// Prices from the client's launch material; sizes and photos are samples.
export const residences = [
  { id: 'studio', name: 'Studio with sea breeze', type: 'Studio', price: 63000, beds: 0, baths: 1, size: 48, tag: 'From', imgs: [studio, studioIn], text: 'The entry home: a studio with a balcony, a fitted kitchen and the residents’ pool.' },
  { id: 'one-bedroom', name: 'One-bedroom, pool view', type: 'Apartment', price: 89000, beds: 1, baths: 2, size: 76, tag: null, imgs: [one, oneIn], text: 'One bedroom with a long balcony over the residents’ pool.' },
  { id: 'two-bedroom', name: 'Two-bedroom corner', type: 'Apartment', price: 128000, beds: 2, baths: 2, size: 118, tag: null, imgs: [two, twoIn], text: 'A corner apartment with light on two sides and a view to the beach.' },
  { id: 'three-bedroom', name: 'Three-bedroom family home', type: 'Apartment', price: 165000, beds: 3, baths: 3, size: 156, tag: null, imgs: [three, oneIn], text: 'Family-sized, with a maid’s room and two parking bays.' },
  { id: 'townhouse', name: 'Beach townhouse', type: 'Townhouse', price: 228000, beds: 3, baths: 4, size: 210, tag: 'Limited', imgs: [town, townIn], text: 'A short walk from the beach, with a roof terrace and a garden.' },
]
export const wa = text => `https://wa.me/${office.wa}?text=${encodeURIComponent(text)}`
