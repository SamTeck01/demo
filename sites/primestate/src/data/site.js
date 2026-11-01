import lusail from '../assets/img/lusail.jpg'
import jasmine from '../assets/img/jasmine.jpg'
import viva from '../assets/img/viva.jpg'
import living from '../assets/img/living.jpg'
import kitchen from '../assets/img/kitchen.jpg'
import family from '../assets/img/family.jpg'
import bed from '../assets/img/bed.jpg'
import two from '../assets/img/two.jpg'
import bath from '../assets/img/bath.jpg'
import four from '../assets/img/four.jpg'
import beachApt from '../assets/img/beach-apt.jpg'
import stair from '../assets/img/stair.jpg'
import beachIn from '../assets/img/beach-in.jpg'

export const office = {
  phone: '+974 5201 7893', tel: '+97452017893', wa: '97452017893', email: 'leasing@primestateproperties.qa', address: 'Lusail, State of Qatar',
  hours: [['Sunday to Thursday', '8:30 to 17:30'], ['Saturday', '10:00 to 14:00'], ['Viewings', 'Every day by booking']],
}
export const wa = t => `https://wa.me/${office.wa}?text=${encodeURIComponent(t)}`

export const buildings = [
  { id: 'lusail-residence', name: 'Lusail Residence', place: 'Lusail', photos: [lusail, living, kitchen], line: 'A residential building in Lusail with one to three bedroom apartments, a short walk to the tram.', specs: [['Homes', '1 to 3 bedrooms'], ['Terms', 'Lease'], ['Amenities', 'Gym, pool, parking'], ['Nearby', 'Lusail tram, Place Vendôme']], plan: 'one' },
  { id: 'jasmine-tower', name: 'Jasmine Tower', place: 'Lusail', photos: [jasmine, four, two], line: 'A family tower with two to four bedroom apartments and long views across the city.', specs: [['Homes', '2 to 4 bedrooms'], ['Terms', 'Lease'], ['Amenities', 'Pool, play area, security'], ['Feel', 'Family']], plan: 'three' },
  { id: 'viva-bahriya', name: 'Viva Bahriya', place: 'The Pearl', photos: [viva, beachApt, beachIn], line: 'Beachfront towers on The Pearl, buildings 20, 21 and 23, freehold for every nationality.', specs: [['Homes', '1 bedroom and up'], ['Terms', 'Sale and lease'], ['Ownership', 'Freehold'], ['Beach', 'Private']], plan: 'two' },
]

// Sample units for the demo; rents are monthly in QAR.
export const units = [
  { id: 'lusail-one-bed', building: 'lusail-residence', title: 'One-bedroom', lease: true, price: 7500, beds: 1, baths: 1, size: 78, bills: 'Kahramaa extra', imgs: [living, kitchen], text: 'A bright one-bedroom near the tram, with the gym and pool downstairs.' },
  { id: 'lusail-three-bed', building: 'lusail-residence', title: 'Three-bedroom', lease: true, price: 13500, beds: 3, baths: 3, size: 165, bills: 'Kahramaa extra', imgs: [family, bed], text: 'A family apartment with a maid’s room and two parking bays.' },
  { id: 'jasmine-two-bed', building: 'jasmine-tower', title: 'Two-bedroom, high floor', lease: true, price: 9800, beds: 2, baths: 2, size: 120, bills: 'Kahramaa included', imgs: [two, bath], text: 'Two bedrooms with a balcony on a high floor.' },
  { id: 'jasmine-four-bed', building: 'jasmine-tower', title: 'Four-bedroom', lease: true, price: 18500, beds: 4, baths: 4, size: 240, bills: 'Kahramaa extra', imgs: [four, kitchen], text: 'A large family apartment with city views and storage.' },
  { id: 'viva-20-beach', building: 'viva-bahriya', title: 'Beach apartment, Viva 20', lease: true, price: 11500, beds: 2, baths: 3, size: 145, bills: 'Kahramaa extra', imgs: [beachIn, stair], text: 'A beachfront two-bedroom on The Pearl.' },
  { id: 'viva-23-one-bed', building: 'viva-bahriya', title: 'One-bedroom, Viva 23', lease: false, price: 1450000, beds: 1, baths: 2, size: 92, bills: '', imgs: [beachApt, stair], text: 'Freehold, with beach access and sea views.' },
]
export const buildingOf = id => buildings.find(b => b.id === id)
