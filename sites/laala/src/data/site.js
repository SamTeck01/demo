import sea from '../assets/img/sea.jpg'
import chalet from '../assets/img/chalet.jpg'
import chaletIn from '../assets/img/chalet-in.jpg'
import salmiya from '../assets/img/salmiya.jpg'
import salmiyaIn from '../assets/img/salmiya-in.jpg'
import city from '../assets/img/city.jpg'
import cityIn from '../assets/img/city-in.jpg'
import fintas from '../assets/img/fintas.jpg'
import villa from '../assets/img/villa.jpg'
import villaIn from '../assets/img/villa-in.jpg'

export const seaImg = sea
export const office = {
  phone: '+965 2224 0000', tel: '+96522240000', email: 'info@laalaalkuwait.com', address: 'Kuwait City, State of Kuwait',
  hours: [['Sunday to Thursday', '8:00 to 17:00'], ['Saturday', '9:00 to 13:00'], ['Friday', 'Closed']],
}

export const areas = [
  { id: 'kuwait-city', name: 'Kuwait City', note: 'Towers over the Gulf Road, twenty minutes to the airport.', rent: 'KWD 550 for a 2-bed' },
  { id: 'salmiya', name: 'Salmiya', note: 'Busy, by the sea, with the Marina Mall and the beach walk.', rent: 'KWD 420 for a 2-bed' },
  { id: 'fintas', name: 'Fintas', note: 'Quieter coastal flats for families, 25 minutes to the city.', rent: 'KWD 360 for a 2-bed' },
  { id: 'khiran', name: 'Khiran', note: 'Canal chalets and villas for weekends by the water.', rent: 'Chalets from KWD 180,000' },
]

// Sample homes; rents are monthly in KWD.
export const homes = [
  { id: 'khiran-waterfront-chalet', title: 'Khiran waterfront chalet', area: 'khiran', lease: false, price: 245000, beds: 4, baths: 4, size: 320, imgs: [chalet, chaletIn], text: 'A chalet on the canal with a private pool and a boat mooring.' },
  { id: 'salmiya-sea-view', title: 'Salmiya sea-view apartment', area: 'salmiya', lease: true, price: 420, beds: 2, baths: 2, size: 115, imgs: [salmiya, salmiyaIn], text: 'Two bedrooms over the Gulf, near the Marina Mall.' },
  { id: 'city-tower-three-bed', title: 'City tower three-bedroom', area: 'kuwait-city', lease: false, price: 165000, beds: 3, baths: 3, size: 175, imgs: [city, cityIn], text: 'A high floor with long views over the Gulf Road.' },
  { id: 'fintas-family-flat', title: 'Fintas family flat', area: 'fintas', lease: true, price: 360, beds: 3, baths: 2, size: 130, imgs: [fintas, salmiyaIn], text: 'A coastal family apartment, unfurnished.' },
  { id: 'khiran-sea-villa', title: 'Khiran villa facing the sea', area: 'khiran', lease: false, price: 390000, beds: 5, baths: 6, size: 450, imgs: [villa, villaIn], text: 'A five-bedroom villa with a pool facing the sea.' },
]
export const areaName = id => areas.find(a => a.id === id)?.name || id
