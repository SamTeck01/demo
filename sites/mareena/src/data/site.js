import hero from '../assets/img/hero.jpg'
import sea from '../assets/img/sea.jpg'
import studio from '../assets/img/studio.jpg'
import bath from '../assets/img/bath.jpg'
import one from '../assets/img/one.jpg'
import kitchen from '../assets/img/kitchen.jpg'
import two from '../assets/img/two.jpg'
import bed from '../assets/img/bed.jpg'
import three from '../assets/img/three.jpg'
import unf from '../assets/img/unf.jpg'

export const heroImg = hero
export const seaImg = sea
export const office = {
  phone: '+965 6694 6640', tel: '+96566946640', wa: '96566946640', email: 'info@mareenatowers.com',
  address: 'Block 2, Building 22, Tower 20, Coastal Road, Al-Mahboula, Kuwait',
  map: 'https://www.google.com/maps/search/?api=1&query=Mareena+Tower+Al-Mahboula+Kuwait',
  hours: [['Reception', '24 hours, 365 days'], ['Sales office', 'Saturday to Thursday'], ['Friday', 'Reception only']],
}
export const wa = t => `https://wa.me/${office.wa}?text=${encodeURIComponent(t)}`

// Sample apartments and yearly-lease rents in KWD a month.
export const apts = [
  { id: 'sea-view-studio', title: 'Sea-view studio', furnished: true, rent: 260, beds: 0, baths: 1, size: 50, status: 'Available', imgs: [studio, bath], text: 'A furnished studio with a sea view, internet and weekly cleaning.' },
  { id: 'one-bedroom-coastal', title: 'One-bedroom, coastal side', furnished: true, rent: 340, beds: 1, baths: 1, size: 72, status: null, imgs: [one, kitchen], text: 'A furnished one-bedroom facing the Gulf.' },
  { id: 'two-bedroom-family', title: 'Two-bedroom family apartment', furnished: true, rent: 450, beds: 2, baths: 2, size: 110, status: null, imgs: [two, bed], text: 'Two bedrooms, a living room and a balcony over the coastal road.' },
  { id: 'three-bedroom-high', title: 'Three-bedroom, high floor', furnished: true, rent: 620, beds: 3, baths: 3, size: 150, status: 'New', imgs: [three, kitchen], text: 'A high floor with long sea views and a maid’s room.' },
  { id: 'two-bedroom-unfurnished', title: 'Two-bedroom, unfurnished', furnished: false, rent: 380, beds: 2, baths: 2, size: 110, status: null, imgs: [unf, two], text: 'Unfurnished, for a yearly lease. Bring your own furniture.' },
]
