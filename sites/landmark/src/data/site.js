import hero from '../assets/img/hero.jpg'
import villaWhite from '../assets/img/villa-white.jpg'
import villaPool from '../assets/img/villa-pool.jpg'
import villaCube from '../assets/img/villa-cube.jpg'
import bedroom from '../assets/img/bedroom.jpg'
import living from '../assets/img/living.jpg'
import reef from '../assets/img/reef.jpg'
import amwaj from '../assets/img/amwaj.jpg'
import bay from '../assets/img/bay.jpg'
import juffair from '../assets/img/juffair.jpg'
import kitchen from '../assets/img/kitchen.jpg'
import lounge from '../assets/img/lounge.jpg'
import apt from '../assets/img/apt.jpg'
import bath from '../assets/img/bath.jpg'
import tower from '../assets/img/tower.jpg'

export const office = {
  name: 'Landmark Bahrain',
  phone: '+973 1756 4600', tel: '+97317564600', email: 'info@landmarkbahrain.com',
  address: ['Bahrain Bay, Manama', 'Kingdom of Bahrain'],
  hours: [['Sunday to Thursday', '8:30 to 17:30'], ['Saturday', '9:00 to 14:00'], ['Friday', 'By appointment']],
}

export const heroImg = hero

export const islands = [
  { id: 'reef-island', name: 'Reef Island', img: reef, line: 'A private island off Manama’s old harbour, with a marina, a beach club and the Le Reef towers.', from: 140000, best: 'Marina living', drive: '12 min to the airport', yield: '5.5%' },
  { id: 'amwaj', name: 'Amwaj Islands', img: amwaj, line: 'Man-made islands on the north-east coast: lagoons, canals, beaches and villas with their own jetties.', from: 95000, best: 'Families and the water', drive: '25 min to Manama', yield: '6%' },
  { id: 'bahrain-bay', name: 'Bahrain Bay', img: bay, line: 'Towers on the water beside the Financial Harbour, the Four Seasons and the city’s best restaurants.', from: 160000, best: 'City life', drive: '15 min to the airport', yield: '5%' },
  { id: 'juffair', name: 'Juffair', img: juffair, line: 'Busy, central and well let, with schools, gyms and the Grand Mosque close by. The investor’s district.', from: 65000, best: 'Investors', drive: '10 min to Manama', yield: '7%' },
]

// Sample stock for the demo. The client swaps these for their live listings.
export const homes = [
  { id: 'le-reef-marina-view', title: 'Marina-view apartment, Le Reef', island: 'reef-island', type: 'Apartment', deal: 'buy', price: 185000, beds: 2, baths: 2, size: 142, status: 'New', imgs: [villaWhite, living, bedroom], text: 'A corner apartment on a high floor with a wraparound balcony over the marina, beach club membership and two parking bays.', features: ['Wraparound balcony', 'Beach club', '2 parking bays', '24-hour security'] },
  { id: 'amwaj-lagoon-villa', title: 'Lagoon villa with private pool', island: 'amwaj', type: 'Villa', deal: 'buy', price: 420000, beds: 4, baths: 5, size: 410, status: 'Golden Residency', imgs: [villaPool, lounge, kitchen], text: 'A detached villa on the lagoon with its own jetty, a pool deck facing west, a maid’s room and a double garage.', features: ['Private jetty', 'West-facing pool', 'Maid’s room', 'Double garage'] },
  { id: 'bay-tower-one-bed', title: 'Bay tower one-bedroom', island: 'bahrain-bay', type: 'Apartment', deal: 'buy', price: 118000, beds: 1, baths: 2, size: 88, status: 'Off-plan', imgs: [tower, apt, bath], text: 'A furnished one-bedroom on the 31st floor, looking across the bay to the Financial Harbour. Handover next year.', features: ['31st floor', 'Furnished', 'Bay view', 'Payment plan'] },
  { id: 'juffair-investor-studio', title: 'Juffair studio with tenant', island: 'juffair', type: 'Apartment', deal: 'buy', price: 68000, beds: 1, baths: 1, size: 61, status: 'Leased', imgs: [juffair, apt, bath], text: 'A leased studio with a tenant in place until next summer. Gym, pool and 24-hour security in the building.', features: ['Tenant in place', 'About 7% gross', 'Gym and pool', 'Service charge paid'] },
  { id: 'reef-harbour-penthouse', title: 'Penthouse over the harbour', island: 'reef-island', type: 'Penthouse', deal: 'buy', price: 495000, beds: 4, baths: 4, size: 320, status: 'Exclusive', imgs: [villaCube, living, bedroom], text: 'A two-level penthouse with a private plunge pool, a double-height living room and views from the old harbour to the bay.', features: ['Plunge pool', 'Double-height living', 'Private lift', '3 parking bays'] },
  { id: 'amwaj-canal-townhouse', title: 'Townhouse on the canal', island: 'amwaj', type: 'Townhouse', deal: 'buy', price: 235000, beds: 3, baths: 4, size: 260, status: 'Golden Residency', imgs: [amwaj, lounge, kitchen], text: 'A three-floor townhouse on a quiet canal with a roof terrace and a garden that opens onto the water.', features: ['Roof terrace', 'Canal garden', 'Community pool', 'Two parking bays'] },
  { id: 'juffair-family-two-bed', title: 'Family two-bedroom, Juffair', island: 'juffair', type: 'Apartment', deal: 'rent', price: 650, beds: 2, baths: 2, size: 118, status: 'Available now', imgs: [apt, living, bath], text: 'A bright two-bedroom close to schools and the Grand Mosque, with covered parking and utilities capped.', features: ['Utilities capped', 'Covered parking', 'Near schools', 'Pool and gym'] },
  { id: 'bay-waterfront-duplex', title: 'Waterfront duplex, Bahrain Bay', island: 'bahrain-bay', type: 'Apartment', deal: 'rent', price: 1450, beds: 3, baths: 3, size: 205, status: null, imgs: [bay, lounge, bedroom], text: 'A duplex with floor-to-ceiling glass on the water’s edge, a private lift lobby and hotel services next door.', features: ['Fully furnished', 'Private lift lobby', 'Bay view', 'Housekeeping available'] },
  { id: 'reef-one-bed-rental', title: 'Marina one-bedroom, Reef Island', island: 'reef-island', type: 'Apartment', deal: 'rent', price: 780, beds: 1, baths: 1, size: 84, status: null, imgs: [reef, bedroom, bath], text: 'A furnished one-bedroom over the marina, with the beach club, gym and pool included in the rent.', features: ['Beach club included', 'Furnished', 'Marina view', 'EWA included'] },
]

export const islandName = id => islands.find(i => i.id === id)?.name || id
