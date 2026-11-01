import hero from '../assets/img/hero.jpg'
import block from '../assets/img/block.jpg'
import salmiya from '../assets/img/salmiya.jpg'
import jabriya from '../assets/img/jabriya.jpg'
import hawally from '../assets/img/hawally.jpg'
import mahboula from '../assets/img/mahboula.jpg'
import duplex from '../assets/img/duplex.jpg'
import kitchen from '../assets/img/kitchen.jpg'
import bath from '../assets/img/bath.jpg'
import bed from '../assets/img/bed.jpg'

export const heroImg = hero
export const blockImg = block
export const office = {
  phone: '+965 1822 022', tel: '+9651822022', email: 'marketing@taskeen1re.com',
  address: 'Kuwait City, State of Kuwait',
  hours: [['Sunday to Thursday', '8:00 to 17:00'], ['Maintenance', '24 hours, every day'], ['App support', 'In-app chat']],
}

// Sample flats in managed buildings, for the demo.
export const flats = [
  { id: 'salmiya-two-bed', title: 'Salmiya two-bedroom', area: 'Salmiya', rent: 420, beds: 2, baths: 2, size: 110, status: 'Available now', imgs: [salmiya, kitchen, bath], text: 'Two bedrooms near the Marina Mall, with covered parking and a building gym.' },
  { id: 'jabriya-family', title: 'Jabriya family flat', area: 'Jabriya', rent: 550, beds: 3, baths: 3, size: 150, status: null, imgs: [jabriya, bed, kitchen], text: 'A family flat close to schools and the hospital area, with a maid’s room.' },
  { id: 'hawally-studio', title: 'Hawally studio', area: 'Hawally', rent: 230, beds: 1, baths: 1, size: 45, status: null, imgs: [hawally, bath], text: 'A compact studio for one, five minutes from the Gulf Road.' },
  { id: 'mahboula-sea-view', title: 'Mahboula sea-view', area: 'Mahboula', rent: 380, beds: 2, baths: 2, size: 105, status: 'New', imgs: [mahboula, bath, kitchen], text: 'A sea-view flat on the coastal road with a balcony and a pool.' },
  { id: 'sabah-al-salem-duplex', title: 'Sabah Al Salem duplex', area: 'Sabah Al Salem', rent: 650, beds: 4, baths: 4, size: 230, status: null, imgs: [duplex, bed, kitchen], text: 'A four-bedroom duplex with its own roof terrace.' },
]
