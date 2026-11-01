import hero from '../assets/img/hero.jpg'
import saar from '../assets/img/saar.jpg'
import saarIn from '../assets/img/saar-in.jpg'
import plot from '../assets/img/plot.jpg'
import riffa from '../assets/img/riffa.jpg'
import riffaIn from '../assets/img/riffa-in.jpg'
import heritage from '../assets/img/heritage.jpg'
import seef from '../assets/img/seef.jpg'
import seefIn from '../assets/img/seef-in.jpg'
import wood from '../assets/img/wood.jpg'
import garden from '../assets/img/garden.jpg'

export const img = { hero, wood, garden, saar, plot, heritage }
export const office = {
  phone: '+973 1724 4399', tel: '+97317244399', email: 'info@sayedmahdi.com', address: 'Manama, Kingdom of Bahrain',
  hours: [['Saturday to Thursday', '8:00 to 13:00 and 16:00 to 20:00'], ['Friday', 'Closed'], ['Valuations', 'By appointment']],
}

// Sample BHD per m² for the indicative estimate; the formal valuation uses real comparables.
export const kinds = [
  { id: 'villa', name: 'Villa', unit: 'm² built', min: 200, max: 1200, start: 450, rates: { Saar: 520, Janabiya: 470, Riffa: 430, Muharraq: 380, Seef: 600 } },
  { id: 'land', name: 'Land', unit: 'm² plot', min: 300, max: 3000, start: 600, rates: { Saar: 260, Janabiya: 200, Riffa: 180, Muharraq: 160, Seef: 420 } },
  { id: 'heritage', name: 'Heritage house', unit: 'm² built', min: 150, max: 800, start: 300, rates: { Muharraq: 330, Manama: 310, Riffa: 300 } },
]

export const props = [
  { id: 'saar-family-villa', title: 'Saar family villa', area: 'Saar', kind: 'Villa', price: 265000, beds: 5, size: '480 m²', tag: 'New', imgs: [saar, saarIn], text: 'A detached villa with a garden, a majlis and a maid’s room.' },
  { id: 'janabiya-plot', title: 'Janabiya plot, 600 m²', area: 'Janabiya', kind: 'Land', price: 118000, beds: 0, size: '600 m²', tag: 'RA zoning', imgs: [plot], text: 'A residential plot with RA zoning, ready to build.' },
  { id: 'riffa-villa-pool', title: 'Riffa villa with pool', area: 'Riffa', kind: 'Villa', price: 210000, beds: 4, size: '390 m²', tag: null, imgs: [riffa, riffaIn], text: 'A renovated villa near the golf club, with a pool and covered parking.' },
  { id: 'muharraq-heritage', title: 'Muharraq heritage house', area: 'Muharraq', kind: 'Heritage house', price: 98000, beds: 4, size: '300 m²', tag: 'To restore', imgs: [heritage], text: 'A traditional house near the Pearling Path, ideal to restore.' },
  { id: 'seef-sea-view', title: 'Seef sea-view apartment', area: 'Seef', kind: 'Apartment', price: 82000, beds: 2, size: '115 m²', tag: 'Instalments', imgs: [seef, seefIn], text: 'Two bedrooms by the malls with sea views, payable in instalments.' },
]
