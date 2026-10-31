import ranch from '../assets/img/ranch.jpg'
import newbuild from '../assets/img/newbuild.jpg'
import cottage from '../assets/img/cottage.jpg'
import craftsman from '../assets/img/craftsman.jpg'
import greenbelt from '../assets/img/greenbelt.jpg'
import duplex from '../assets/img/duplex.jpg'
import midcentury from '../assets/img/midcentury.jpg'
import living from '../assets/img/living.jpg'
import kitchen from '../assets/img/kitchen.jpg'
import bath from '../assets/img/bath.jpg'
import dusk from '../assets/img/dusk.jpg'

export const heroImg = craftsman
export const office = {
  name: 'Habitat Hunters', phone: '512 482 8651', tel: '+15124828651', email: 'info@habitathunters.com',
  address: ['1804 W Koenig Lane', 'Austin, TX 78756'],
  hours: [['Monday to Friday', '9:00 to 6:00'], ['Saturday', '10:00 to 4:00'], ['Sunday', 'By appointment']],
}

export const habitats = [
  { id: 'crestview', name: 'Crestview', img: ranch, line: 'Mid-century ranch homes under big pecans, a short ride to the Domain, and a farmers market on Saturdays.', median: 640000, homes: '1950s ranch', school: 'Lamar Middle', commute: '15 min downtown', rate: 410 },
  { id: 'allandale', name: 'Allandale', img: newbuild, line: 'Wide lots, mature oaks and a mix of original homes and new builds near Northwest Park.', median: 910000, homes: 'Ranch and new builds', school: 'Gullett Elementary', commute: '18 min downtown', rate: 455 },
  { id: 'brentwood', name: 'Brentwood', img: cottage, line: 'Small cottages, sidewalks and some of Austin’s best taco trucks, a walk from our office.', median: 720000, homes: 'Cottages', school: 'Brentwood Elementary', commute: '14 min downtown', rate: 430 },
  { id: 'hyde-park', name: 'Hyde Park', img: craftsman, line: 'Austin’s first suburb: porches, historic districts and the university on the doorstep.', median: 850000, homes: 'Historic craftsman', school: 'Lee Elementary', commute: '10 min downtown', rate: 480 },
  { id: 'wells-branch', name: 'Wells Branch', img: greenbelt, line: 'Quiet streets, greenbelts and room for a growing family, north of the city line.', median: 430000, homes: '1980s family homes', school: 'Round Rock ISD', commute: '25 min downtown', rate: 285 },
]

// Sample listings for the demo. The client replaces these with their live MLS feed.
export const homes = [
  { id: 'arroyo-seco-ranch', title: 'Pecan-shaded ranch on Arroyo Seco', habitat: 'crestview', price: 649000, beds: 3, baths: 2, sqft: 1540, year: 1956, status: 'New', imgs: [ranch, living, kitchen], text: 'An updated 1956 ranch with original oak floors, a screened porch and a backyard under two old pecans.' },
  { id: 'northwest-park-new-build', title: 'New build near Northwest Park', habitat: 'allandale', price: 1295000, beds: 4, baths: 3, sqft: 2980, year: 2025, status: null, imgs: [newbuild, kitchen, bath], text: 'A two-storey modern with a pool-ready yard, a study and walking access to Northwest Park.' },
  { id: 'brentwood-cottage', title: 'Brentwood cottage with studio', habitat: 'brentwood', price: 589000, beds: 2, baths: 1, sqft: 1020, year: 1948, status: null, imgs: [cottage, living, kitchen], text: 'A character cottage with a detached studio, a deep lot and a garden the neighbours talk about.' },
  { id: 'hyde-park-craftsman', title: 'Hyde Park craftsman', habitat: 'hyde-park', price: 1125000, beds: 3, baths: 2, sqft: 1860, year: 1924, status: 'Open Sat', imgs: [craftsman, living, bath], text: 'A 1920s craftsman in the historic district, with a restored porch, original windows and a new kitchen.' },
  { id: 'wells-branch-greenbelt', title: 'Greenbelt family home', habitat: 'wells-branch', price: 419000, beds: 4, baths: 2, sqft: 2110, year: 1986, status: null, imgs: [greenbelt, kitchen, living], text: 'Four bedrooms backing onto the greenbelt, a new roof, and a short walk to the pool and trails.' },
  { id: 'crestview-duplex', title: 'Crestview duplex', habitat: 'crestview', price: 879000, beds: 4, baths: 4, sqft: 2400, year: 2019, status: 'Income', imgs: [duplex, kitchen, bath], text: 'Live in one side and rent the other. Both units updated, with separate yards, near the rail line.' },
  { id: 'allandale-mid-century', title: 'Allandale mid-century', habitat: 'allandale', price: 945000, beds: 3, baths: 2, sqft: 1890, year: 1961, status: null, imgs: [dusk, living, kitchen], text: 'A low-slung mid-century with clerestory windows, terrazzo floors and a quarter-acre lot.' },
]

export const habitatName = id => habitats.find(h => h.id === id)?.name || id
