import hero from '../assets/img/hero.jpg'
import riverGarden from '../assets/img/river-garden.jpg'
import riverIn from '../assets/img/river-in.jpg'
import west10 from '../assets/img/west10.jpg'
import west10In from '../assets/img/west10-in.jpg'
import bungalow from '../assets/img/bungalow.jpg'
import bungalowIn from '../assets/img/bungalow-in.jpg'
import ranch from '../assets/img/ranch.jpg'
import ranchIn from '../assets/img/ranch-in.jpg'
import garageApt from '../assets/img/garage-apt.jpg'
import nwhills from '../assets/img/nwhills.jpg'
import nwhillsIn from '../assets/img/nwhills-in.jpg'
import about from '../assets/img/about.jpg'

export const heroImg = hero
export const aboutImg = about
export const office = {
  phone: '512 452 2000', tel: '+15124522000', email: 'kyle@grahamcentralproperties.com',
  address: ['6002 Lonesome Valley Trail', 'Austin, TX 78731'],
  hours: [['Monday to Friday', '9:00 to 6:00'], ['Saturday', 'By appointment'], ['Leasing line', 'Open weekdays']],
}

export const areas = [
  { id: 'tarrytown', name: 'Tarrytown', median: '$1.5M', homes: '1930s to new', school: 'Casis Elementary', feel: 'Leafy, walkable', note: 'Classic homes and big oaks between MoPac and the lake.' },
  { id: 'bryker-woods', name: 'Bryker Woods', median: '$1.3M', homes: 'Bungalows', school: 'Bryker Woods Elementary', feel: 'Small-town', note: 'Bungalows near Shoal Creek, Seton and the old Central Market.' },
  { id: 'northwest-hills', name: 'Northwest Hills', median: '$1.1M', homes: '1960s to 80s', school: 'Doss Elementary', feel: 'Quiet, green', note: 'Views, trails and mid-century homes on the hills above MoPac.' },
  { id: 'hill-country', name: 'Hill Country', median: 'From $900k', homes: 'Ranch, acreage', school: 'Varies by district', feel: 'Wide open', note: 'Acreage and ranches west of the city, with room to breathe.' },
]

// Sample listings for the demo, named by street as the client does.
export const homes = [
  { id: '4380-river-garden-trail', title: '4380 River Garden Trail', area: 'northwest-hills', type: 'House', lease: false, price: 1385000, beds: 4, baths: 3, sqft: 3120, status: 'New', imgs: [riverGarden, riverIn, nwhillsIn], text: 'A pool, a three-car garage and a living room that opens onto the trees.' },
  { id: '2120-west-10th-street', title: '2120 West 10th Street', area: 'tarrytown', type: 'House', lease: false, price: 1655000, beds: 3, baths: 2, sqft: 1940, status: null, imgs: [west10, west10In, bungalowIn], text: 'A 1948 home on a 0.36-acre lot, updated and ready, a block from Westenfield Park.' },
  { id: 'bryker-woods-bungalow', title: 'Bryker Woods bungalow', area: 'bryker-woods', type: 'House', lease: false, price: 1180000, beds: 2, baths: 2, sqft: 1410, status: null, imgs: [bungalow, bungalowIn, west10In], text: 'A porch, a garden and a short walk to Shoal Creek.' },
  { id: 'hill-country-ranch', title: 'Hill Country ranch, 12 acres', area: 'hill-country', type: 'Ranch', lease: false, price: 1790000, beds: 4, baths: 3, sqft: 3300, status: null, imgs: [ranch, ranchIn, riverIn], text: 'A stone ranch house on 12 acres with a barn and a seasonal creek.' },
  { id: 'tarrytown-garage-apartment', title: 'Tarrytown garage apartment', area: 'tarrytown', type: 'Apartment', lease: true, price: 2350, beds: 1, baths: 1, sqft: 640, status: 'For lease', imgs: [garageApt, bungalowIn], text: 'A quiet garage apartment with its own entrance and parking.' },
  { id: 'northwest-hills-family-home', title: 'Northwest Hills family home', area: 'northwest-hills', type: 'House', lease: false, price: 985000, beds: 4, baths: 3, sqft: 2640, status: null, imgs: [nwhills, nwhillsIn, riverIn], text: 'An updated kitchen, a big deck and Doss Elementary nearby.' },
  { id: 'bryker-woods-duplex-lease', title: 'Bryker Woods duplex half', area: 'bryker-woods', type: 'Duplex', lease: true, price: 3400, beds: 2, baths: 2, sqft: 1150, status: 'For lease', imgs: [west10In, bungalowIn], text: 'One side of an updated duplex, with a private yard and washer-dryer.' },
]

export const areaName = id => areas.find(a => a.id === id)?.name || id
