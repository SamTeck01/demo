import hero from '../assets/img/hero.jpg'
import tarrytown from '../assets/img/tarrytown.jpg'
import nwTown from '../assets/img/nwhills-town.jpg'
import westlake from '../assets/img/westlake.jpg'
import rollingwood from '../assets/img/rollingwood.jpg'
import bryker from '../assets/img/bryker.jpg'
import nwhills from '../assets/img/nwhills.jpg'
import living from '../assets/img/living.jpg'
import bedroom from '../assets/img/bedroom.jpg'
import bath from '../assets/img/bath.jpg'
import kitchen from '../assets/img/kitchen.jpg'
import cottage from '../assets/img/cottage.jpg'

export const heroImg = hero
export const office = {
  phone: '512 750 2425', tel: '+15127502425', email: 'Laura@WestAustin.com',
  address: ['West Austin', 'Austin, TX 78703'],
  hours: [['Monday to Friday', '9:00 to 6:00'], ['Saturday', '10:00 to 4:00'], ['Sunday', 'Showings by appointment']],
}

export const areas = [
  { id: 'tarrytown', name: 'Tarrytown', median: 1900000, school: 'Casis Elementary', homes: '1930s cottages to new builds', note: 'Old oaks, with Lake Austin a few blocks away and Casis at the centre of it.', img: tarrytown },
  { id: 'westlake', name: 'Westlake', median: 2200000, school: 'Eanes ISD', homes: '1980s to new', note: 'Top-rated Eanes schools and larger lots across the river, 15 minutes from downtown.', img: westlake },
  { id: 'rollingwood', name: 'Rollingwood', median: 2600000, school: 'Eanes ISD', homes: 'Ranch and new builds', note: 'A small city of its own, with its own police and park, minutes from Zilker.', img: rollingwood },
  { id: 'northwest-hills', name: 'Northwest Hills', median: 1100000, school: 'Doss Elementary', homes: '1960s to 80s', note: 'Hill Country views and quiet cul-de-sacs, ten minutes from downtown.', img: nwhills },
  { id: 'bryker-woods', name: 'Bryker Woods', median: 1500000, school: 'Bryker Woods Elementary', homes: '1930s to 50s', note: 'Cottages and bungalows near Seton and Shoal Creek.', img: cottage },
]

// Sample listings for the demo; the client swaps in their own.
export const homes = [
  { id: 'tarrytown-corner-cottage', title: 'Tarrytown cottage on a corner lot', area: 'tarrytown', price: 1495000, beds: 3, baths: 2, sqft: 1910, year: 1938, status: 'New', imgs: [tarrytown, living, kitchen], text: 'A restored 1938 cottage with original hardwoods, a new kitchen and a backyard under a heritage oak.' },
  { id: 'westlake-modern-pool', title: 'Westlake modern with lap pool', area: 'westlake', price: 2895000, beds: 5, baths: 5, sqft: 4650, year: 2018, status: null, imgs: [westlake, living, bath], text: 'Eanes schools, a lap pool, a guest suite and a study lined with built-ins.' },
  { id: 'rollingwood-new-build', title: 'Rollingwood new build', area: 'rollingwood', price: 3450000, beds: 4, baths: 5, sqft: 4100, year: 2026, status: 'Coming soon', imgs: [rollingwood, kitchen, bedroom], text: 'New construction on a half-acre with a chef’s kitchen and a screened porch over the hills.' },
  { id: 'nw-hills-view-home', title: 'Northwest Hills view home', area: 'northwest-hills', price: 1325000, beds: 4, baths: 3, sqft: 2980, year: 1974, status: null, imgs: [nwhills, living, bedroom], text: 'An updated 1970s home with long views, decks on two levels and a three-car garage.' },
  { id: 'bryker-woods-bungalow', title: 'Bryker Woods bungalow', area: 'bryker-woods', price: 1189000, beds: 2, baths: 2, sqft: 1350, year: 1941, status: null, imgs: [bryker, kitchen, bath], text: 'A classic bungalow with a front porch and a garden studio, a walk from Shoal Creek.' },
  { id: 'nw-hills-furnished-townhouse', title: 'Furnished townhouse, Northwest Hills', area: 'northwest-hills', price: 685000, beds: 2, baths: 2, sqft: 1420, year: 2016, status: null, imgs: [nwTown, living, bedroom], text: 'Move-in ready and fully furnished, with a two-car garage and views to the west.' },
]

export const areaName = id => areas.find(a => a.id === id)?.name || id
