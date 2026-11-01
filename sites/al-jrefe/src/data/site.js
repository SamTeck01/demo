import hero from '../assets/img/hero.jpg'
import malqa from '../assets/img/malqa.jpg'
import malqaIn from '../assets/img/malqa-in.jpg'
import hittin from '../assets/img/hittin.jpg'
import hittinIn from '../assets/img/hittin-in.jpg'
import narjis from '../assets/img/narjis.jpg'
import narjisIn from '../assets/img/narjis-in.jpg'
import olaya from '../assets/img/olaya.jpg'
import olayaIn from '../assets/img/olaya-in.jpg'
import yasmin from '../assets/img/yasmin.jpg'
import yasminIn from '../assets/img/yasmin-in.jpg'
import plot from '../assets/img/plot.jpg'

export const heroImg = hero
export const office = {
  phone: '+966 55 811 9449', tel: '+966558119449', wa: '966558119449', address: 'Riyadh, Kingdom of Saudi Arabia',
  hours: [['Sunday to Thursday', '9:00 to 22:00'], ['Saturday', '16:00 to 22:00'], ['Friday', 'Closed']],
}
export const wa = t => `https://wa.me/${office.wa}?text=${encodeURIComponent(t)}`

export const districts = [
  { id: 'al-malqa', name: 'Al Malqa', from: 2800000, kafd: 20, note: 'Villas and new compounds near King Fahd Road and the Boulevard.', img: malqa },
  { id: 'hittin', name: 'Hittin', from: 3200000, kafd: 25, note: 'Large plots and modern villas north of the ring road.', img: hittin },
  { id: 'al-narjis', name: 'Al Narjis', from: 2100000, kafd: 30, note: 'A newer district of family villas and parks, close to the airport.', img: narjis },
  { id: 'al-yasmin', name: 'Al Yasmin', from: 2300000, kafd: 20, note: 'Villas and apartments, a little closer to the centre.', img: yasmin },
  { id: 'olaya', name: 'Olaya', from: 1100000, kafd: 10, note: 'The business heart, with apartments by Kingdom Tower and the metro.', img: olaya },
]

// Sample listings; rents are monthly in SAR on yearly leases.
export const homes = [
  { id: 'al-malqa-modern-villa', title: 'Al Malqa modern villa', district: 'al-malqa', lease: false, price: 3450000, beds: 5, baths: 6, size: 420, imgs: [malqa, malqaIn], text: 'A corner villa with a pool, a majlis and a driver’s room.' },
  { id: 'hittin-family-villa', title: 'Hittin family villa', district: 'hittin', lease: false, price: 3900000, beds: 6, baths: 7, size: 500, imgs: [hittin, hittinIn], text: 'A large family villa on a 600 m² plot.' },
  { id: 'al-narjis-new-villa', title: 'Al Narjis new villa', district: 'al-narjis', lease: false, price: 2250000, beds: 5, baths: 5, size: 360, imgs: [narjis, narjisIn], text: 'A new build with a roof terrace near the park.' },
  { id: 'olaya-apartment', title: 'Olaya apartment', district: 'olaya', lease: false, price: 1150000, beds: 3, baths: 3, size: 170, imgs: [olaya, olayaIn], text: 'An apartment by the metro and Kingdom Tower.' },
  { id: 'al-yasmin-villa-rent', title: 'Al Yasmin villa for rent', district: 'al-yasmin', lease: true, price: 12500, beds: 5, baths: 5, size: 380, imgs: [yasmin, yasminIn], text: 'A yearly lease, paid monthly.' },
  { id: 'hittin-plot', title: 'Hittin residential plot', district: 'hittin', lease: false, price: 2700000, beds: 0, baths: 0, size: 625, imgs: [plot], text: 'A residential plot on a 20 m street.' },
]
export const districtName = id => districts.find(d => d.id === id)?.name || id
