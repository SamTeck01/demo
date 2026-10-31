import hero from '../assets/img/hero.jpg'
import estate from '../assets/img/estate.jpg'
import estateIn from '../assets/img/estate-in.jpg'
import estateBath from '../assets/img/estate-bath.jpg'
import condo from '../assets/img/condo.jpg'
import condoIn from '../assets/img/condo-in.jpg'
import modern from '../assets/img/modern.jpg'
import modernIn from '../assets/img/modern-in.jpg'
import classic from '../assets/img/classic.jpg'
import classicIn from '../assets/img/classic-in.jpg'
import clarksville from '../assets/img/clarksville.jpg'
import clarksvilleIn from '../assets/img/clarksville-in.jpg'
import lake from '../assets/img/lake.jpg'
import darkBed from '../assets/img/dark-bed.jpg'

export const heroImg = hero
export const office = {
  phone: '512 228 1579', tel: '+15122281579', email: 'austinboutiquerealty@gmail.com',
  address: ['2507 Janice Drive', 'Austin, TX 78703'],
  hours: [['Monday to Friday', '9:00 to 6:00'], ['Weekends', 'Showings by appointment'], ['Calls', 'Answered by Drew']],
}

// Sample listings for the demo; Drew swaps in his own.
export const homes = [
  { id: 'rollingwood-estate', title: 'Rollingwood estate', area: 'Rollingwood', price: 4600000, beds: 5, baths: 6, sqft: 5820, status: 'Featured', imgs: [estate, estateIn, estateBath], text: 'A gated estate on Rollingwood Drive with a pool, a guest house and long Hill Country views.' },
  { id: 'tarrytown-modern', title: 'Tarrytown modern', area: 'Tarrytown', price: 2390000, beds: 4, baths: 4, sqft: 3560, status: null, imgs: [modern, modernIn, darkBed], text: 'A cedar and glass new build on a quiet street near Lake Austin Boulevard.' },
  { id: 'pemberton-heights-classic', title: 'Pemberton Heights classic', area: 'Pemberton Heights', price: 3150000, beds: 4, baths: 4, sqft: 3900, status: null, imgs: [classic, classicIn, estateBath], text: 'A stately 1930s home on a large lot, updated throughout, with a pool house.' },
  { id: 'lake-austin-view', title: 'Lake Austin view home', area: 'Tarrytown', price: 1950000, beds: 3, baths: 3, sqft: 2450, status: 'Under contract', imgs: [lake, modernIn, darkBed], text: 'A glass-walled living room over the trees and a short walk to the lake.' },
  { id: 'clarksville-cottage', title: 'Clarksville cottage', area: 'Clarksville', price: 1295000, beds: 2, baths: 2, sqft: 1380, status: null, imgs: [clarksville, clarksvilleIn, condoIn], text: 'Walkable to West Sixth and Whole Foods, with a garden and a studio out back.' },
  { id: 'west-30th-condo', title: 'West 30th Street condo', area: 'Bryker Woods', price: 675000, beds: 2, baths: 2, sqft: 1240, status: null, imgs: [condo, condoIn, clarksvilleIn], text: 'A two-bedroom condo steps from Seton and the Shoal Creek trail, with garage parking.' },
]
