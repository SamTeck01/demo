import hero from '../assets/img/hero.jpg'
import brickell from '../assets/img/brickell.jpg'
import condo from '../assets/img/condo.jpg'
import duplex from '../assets/img/duplex.jpg'
import coral from '../assets/img/coral.jpg'
import kendall from '../assets/img/kendall.jpg'
import edgewater from '../assets/img/edgewater.jpg'
import orlando from '../assets/img/orlando.jpg'
import living from '../assets/img/living.jpg'
import kitchen from '../assets/img/kitchen.jpg'
import bath from '../assets/img/bath.jpg'

export const heroImg = hero
export const officeImg = coral
export const office = {
  name: 'Altruistic Homes', broker: 'Maria Teresa Toledo', phone: '786 731 2572', tel: '+17867312572', email: 'info@altruistichomesfl.com',
  address: ['Brickell', 'Miami, FL 33131'],
  hours: [['Monday to Saturday', '9:00 to 7:00'], ['Sunday', 'By appointment'], ['Languages', 'English · Español']],
}

export const areas = [
  { id: 'brickell', name: 'Brickell', img: brickell, line: 'High-rise condos with bay views, a walk to work, and the strongest short-term rental demand in Miami.', median: 610000, rent: 3900, kind: 'Condos' },
  { id: 'edgewater', name: 'Edgewater', img: edgewater, line: 'Newer towers on the bay between downtown and the Design District, at lower prices than Brickell.', median: 520000, rent: 3400, kind: 'Condos' },
  { id: 'coral-gables', name: 'Coral Gables', img: coral, line: 'Mediterranean homes under banyan trees, top schools and some of the steadiest values in the county.', median: 1450000, rent: 6800, kind: 'Single-family' },
  { id: 'kendall', name: 'Kendall', img: kendall, line: 'Family homes and townhouses with yards, close to the Turnpike, and rents that cover the mortgage.', median: 640000, rent: 3600, kind: 'Homes and townhouses' },
  { id: 'central-fl', name: 'Central Florida', img: orlando, line: 'Duplexes and single-family rentals near Orlando, where the numbers still work for first-time investors.', median: 410000, rent: 2600, kind: 'Income property' },
]

export const types = [['condo', 'Condos'], ['home', 'Homes'], ['income', 'Income']]

// Sample listings for the demo. The client replaces these with their live MLS feed.
export const homes = [
  { id: 'brickell-bay-1-bed', title: 'One-bed on Brickell Bay', area: 'brickell', type: 'condo', price: 489000, rent: 3300, hoa: 820, beds: 1, baths: 1, sqft: 810, year: 2016, status: 'Rentable', imgs: [condo, living, kitchen], text: 'A corner one-bed with a bay-view balcony, in a building that allows 30-day rentals. Pool, gym and valet.' },
  { id: 'edgewater-two-bed', title: 'Two-bed in Edgewater', area: 'edgewater', type: 'condo', price: 575000, rent: 3800, hoa: 910, beds: 2, baths: 2, sqft: 1120, year: 2019, status: null, imgs: [edgewater, kitchen, bath], text: 'Split bedrooms, floor-to-ceiling glass and sunrise over the bay. Two blocks from Margaret Pace Park.' },
  { id: 'gables-mediterranean', title: 'Mediterranean on Alhambra Circle', area: 'coral-gables', type: 'home', price: 1690000, rent: 7900, hoa: 0, beds: 4, baths: 3, sqft: 2750, year: 1936, status: 'New', imgs: [coral, living, kitchen], text: 'A 1930s Gables home with barrel-tile roof, coral-stone fireplace, a pool and a lot full of mango trees.' },
  { id: 'kendall-townhouse', title: 'Kendall townhouse with patio', area: 'kendall', type: 'home', price: 465000, rent: 3200, hoa: 260, beds: 3, baths: 2, sqft: 1480, year: 2006, status: null, imgs: [kendall, kitchen, bath], text: 'A three-bed townhouse with a fenced patio, two parking spaces and A-rated schools down the road.' },
  { id: 'kissimmee-duplex', title: 'Duplex near Kissimmee', area: 'central-fl', type: 'income', price: 449000, rent: 3700, hoa: 0, beds: 4, baths: 4, sqft: 2100, year: 2008, status: 'Income', imgs: [duplex, living, kitchen], text: 'Two 2-bed units, both leased. Separate meters, a new roof in 2023, and twenty minutes to the parks.' },
  { id: 'kendall-pool-home', title: 'Pool home in Kendall Lakes', area: 'kendall', type: 'home', price: 789000, rent: 4500, hoa: 0, beds: 4, baths: 3, sqft: 2240, year: 1989, status: 'Open Sat', imgs: [hero, living, bath], text: 'A single-storey four-bed with a screened pool, impact windows and a two-car garage.' },
  { id: 'orlando-fourplex', title: 'Fourplex in College Park', area: 'central-fl', type: 'income', price: 895000, rent: 7200, hoa: 0, beds: 8, baths: 4, sqft: 3600, year: 1972, status: 'Income', imgs: [orlando, kitchen, bath], text: 'Four 2-bed units on a quiet street near Lake Ivanhoe, fully let. Laundry on site adds income.' },
]

export const areaName = id => areas.find(a => a.id === id)?.name || id
