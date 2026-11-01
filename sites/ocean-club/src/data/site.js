import hero from '../assets/img/hero.jpg'
import clubTower from '../assets/img/club-tower.jpg'
import lakeTower from '../assets/img/lake-tower.jpg'
import villa from '../assets/img/villa.jpg'
import villaIn from '../assets/img/villa-in.jpg'
import oceanIn from '../assets/img/ocean-in.jpg'
import clubIn from '../assets/img/club-in.jpg'
import clubIn2 from '../assets/img/club-in2.jpg'
import pent from '../assets/img/pent.jpg'
import pentIn from '../assets/img/pent-in.jpg'
import rental from '../assets/img/rental.jpg'
import three from '../assets/img/three.jpg'
import threeIn from '../assets/img/three-in.jpg'
import beach from '../assets/img/beach.jpg'

export const heroImg = hero
export const beachImg = beach
export const office = {
  phone: '305 361 2020', tel: '+13053612020', email: 'admin@oceanclubrealtyinc.com',
  address: ['Ocean Club, Crandon Boulevard', 'Key Biscayne, FL 33149'],
  hours: [['Monday to Saturday', '9:00 to 6:00'], ['Sunday', '11:00 to 4:00'], ['Showings', 'Any day, on request']],
}

// Steps are walked from each lobby to the sand; the season rate is a sample monthly figure.
export const towers = [
  { id: 'ocean-tower-one', name: 'Ocean Tower One', steps: 90, faces: 'The Atlantic', homes: '2 to 5 bedrooms', from: 2100000, season: 16000, img: hero },
  { id: 'club-tower', name: 'Club Tower', steps: 300, faces: 'Lake and ocean', homes: '2 to 4 bedrooms', from: 1400000, season: 11000, img: clubTower },
  { id: 'lake-tower', name: 'Lake Tower', steps: 260, faces: 'The bay at sunset', homes: '2 to 4 bedrooms', from: 1300000, season: 10500, img: lakeTower },
  { id: 'lakefront-villas', name: 'Lakefront villas', steps: 400, faces: 'The lagoon', homes: '4 to 6 bedrooms', from: 5000000, season: 32000, img: villa },
]

// Sample listings for the demo.
export const homes = [
  { id: 'ocean-tower-one-14th', title: 'Ocean Tower One, 14th floor', tower: 'ocean-tower-one', rent: false, price: 3950000, beds: 3, baths: 3, sqft: 2450, status: 'New', imgs: [pentIn, oceanIn, threeIn], text: 'A corner residence with a wraparound terrace facing the Atlantic.' },
  { id: 'lake-tower-penthouse', title: 'Lake Tower penthouse', tower: 'lake-tower', rent: false, price: 5250000, beds: 4, baths: 5, sqft: 3900, status: null, imgs: [pent, pentIn, threeIn], text: 'A two-level penthouse with sunset views over the bay.' },
  { id: 'club-tower-two-bed', title: 'Club Tower two-bedroom', tower: 'club-tower', rent: false, price: 1495000, beds: 2, baths: 2, sqft: 1550, status: null, imgs: [clubIn, clubIn2, oceanIn], text: 'Renovated, with lake and tennis views and a short walk to the beach club.' },
  { id: 'lakefront-villa-pool', title: 'Lakefront villa with pool', tower: 'lakefront-villas', rent: false, price: 7900000, beds: 5, baths: 6, sqft: 5400, status: null, imgs: [villa, villaIn, pentIn], text: 'A private villa on the lagoon with a pool and a garden down to the water.' },
  { id: 'club-tower-three-bed', title: 'Club Tower three-bedroom', tower: 'club-tower', rent: false, price: 2150000, beds: 3, baths: 3, sqft: 2100, status: null, imgs: [three, threeIn, clubIn2], text: 'A split plan with a family room and a long east terrace.' },
  { id: 'ocean-tower-season', title: 'Seasonal rental, Ocean Tower One', tower: 'ocean-tower-one', rent: true, price: 14500, beds: 2, baths: 2, sqft: 1800, status: 'December to April', imgs: [rental, oceanIn, clubIn2], text: 'Furnished and ready for the season, with the beach club at the door.' },
  { id: 'lake-tower-season', title: 'Seasonal rental, Lake Tower', tower: 'lake-tower', rent: true, price: 9800, beds: 2, baths: 2, sqft: 1500, status: 'January to March', imgs: [lakeTower, rental, clubIn], text: 'Sunset over the bay from the living room, monthly through the winter.' },
]

export const towerOf = id => towers.find(t => t.id === id)
