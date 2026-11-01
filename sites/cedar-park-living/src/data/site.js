import hero from '../assets/img/hero.jpg'
import brushy from '../assets/img/brushy.jpg'
import parkside from '../assets/img/parkside.jpg'
import leander from '../assets/img/leander.jpg'
import lago from '../assets/img/lago.jpg'
import roundrock from '../assets/img/roundrock.jpg'
import modern from '../assets/img/modern.jpg'
import acreage from '../assets/img/acreage.jpg'
import creek from '../assets/img/creek.jpg'
import living from '../assets/img/living.jpg'
import kitchen from '../assets/img/kitchen.jpg'
import lounge from '../assets/img/lounge.jpg'
import apt from '../assets/img/apt.jpg'
import bath from '../assets/img/bath.jpg'

export const heroImg = hero
export const office = {
  phone: '512 966 6540', tel: '+15129666540', email: 'clegrand@cedarparktxliving.com',
  address: ['Cedar Park, Texas', 'with Venture Partners R.E.'],
  hours: [['Monday to Saturday', '9:00 to 6:00'], ['Sunday', 'Showings by request'], ['Relocation calls', 'Evenings too']],
}

export const suburbs = [
  { id: 'cedar-park', name: 'Cedar Park', median: 520000, school: 'Leander ISD', commute: 30, best: 'Families who want everything close', rate: 238, img: parkside },
  { id: 'leander', name: 'Leander', median: 470000, school: 'Leander ISD', commute: 40, best: 'New builds and more space', rate: 226, img: leander },
  { id: 'round-rock', name: 'Round Rock', median: 480000, school: 'Round Rock ISD', commute: 30, best: 'Commuters to the north tech campuses', rate: 231, img: roundrock },
  { id: 'brushy-creek', name: 'Brushy Creek', median: 495000, school: 'Round Rock ISD', commute: 35, best: 'Greenbelts and neighbourhood pools', rate: 222, img: brushy },
  { id: 'lago-vista', name: 'Lago Vista', median: 560000, school: 'Lago Vista ISD', commute: 45, best: 'Weekends on Lake Travis', rate: 250, img: lago },
]

// Sample listings for the demo; the team swaps in their MLS feed.
export const homes = [
  { id: 'brushy-creek-greenbelt', title: 'Greenbelt Trail home', area: 'brushy-creek', price: 489000, beds: 4, baths: 3, sqft: 2280, year: 1998, status: 'New', imgs: [brushy, living, kitchen], text: 'Backs straight onto the Brushy Creek greenbelt, with new oak floors and a covered patio.' },
  { id: 'cedar-park-timber', title: 'Timber Ridge Cove', area: 'cedar-park', price: 699000, beds: 5, baths: 4, sqft: 3320, year: 2015, status: 'Open Sat 1–4', imgs: [hero, lounge, kitchen], text: 'Timber and stone at the end of a quiet cul-de-sac, with a pool and big oaks out back.' },
  { id: 'cedar-park-parkside', title: 'Parkside Bend two-storey', area: 'cedar-park', price: 565000, beds: 4, baths: 3, sqft: 2640, year: 2009, status: null, imgs: [parkside, apt, living], text: 'A game room upstairs, the primary suite down, and Leander ISD schools a few minutes away.' },
  { id: 'leander-new-build', title: 'Rail Line Way new build', area: 'leander', price: 449000, beds: 3, baths: 2, sqft: 1980, year: 2025, status: 'New build', imgs: [leander, kitchen, bath], text: 'Energy-efficient new construction near the MetroRail station, with the builder warranty running.' },
  { id: 'lago-vista-lake', title: 'Lakeview Drive', area: 'lago-vista', price: 615000, beds: 3, baths: 3, sqft: 2150, year: 2004, status: null, imgs: [lago, lounge, bath], text: 'Decks facing Lake Travis and a short drive to the marina.' },
  { id: 'round-rock-starter', title: 'Oak Hollow Lane', area: 'round-rock', price: 399000, beds: 3, baths: 2, sqft: 1560, year: 1994, status: 'Price cut', imgs: [roundrock, apt, living], text: 'An updated kitchen, a big fenced yard and ten minutes to the Dell campus.' },
  { id: 'cedar-park-modern', title: 'Limestone Court modern', area: 'cedar-park', price: 789000, beds: 4, baths: 4, sqft: 3050, year: 2021, status: null, imgs: [modern, lounge, kitchen], text: 'Walls of glass onto the yard, a chef’s kitchen and a separate guest suite.' },
  { id: 'leander-acreage', title: 'Ranch Road acreage', area: 'leander', price: 875000, beds: 4, baths: 3, sqft: 2900, year: 2012, status: 'Acreage', imgs: [acreage, living, kitchen], text: 'Hill Country acreage with a wrap-around porch, a workshop and no HOA.' },
  { id: 'brushy-creek-family', title: 'Creek Bend Drive', area: 'brushy-creek', price: 529000, beds: 4, baths: 2.5, sqft: 2410, year: 2001, status: null, imgs: [creek, lounge, apt], text: 'Two living areas, a neighbourhood pool down the street and Brushy Creek Lake Park nearby.' },
]

export const areaName = id => suburbs.find(s => s.id === id)?.name || id
