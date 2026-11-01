import warehouse from '../assets/img/warehouse.jpg'
import racks from '../assets/img/racks.jpg'
import showroom from '../assets/img/showroom.jpg'
import villa from '../assets/img/villa.jpg'
import villaIn from '../assets/img/villa-in.jpg'
import plot from '../assets/img/plot.jpg'
import plotIn from '../assets/img/plot-in.jpg'
import block from '../assets/img/block.jpg'
import shop from '../assets/img/shop.jpg'
import hero from '../assets/img/hero.jpg'

export const heroImgs = [warehouse, villa]
export const valImg = hero
export const office = {
  phone: '+974 4414 1464', tel: '+97444141464', email: 'info@binajlan.net', address: 'Salwa Road, Industrial Area, Doha',
  hours: [['Saturday to Thursday', '8:00 to 18:00'], ['Friday', 'Closed'], ['Valuations', 'By appointment']],
}

// Sample asking rents per m² a month, by type and area, for the finder.
export const types = [
  { id: 'warehouse', name: 'Warehouse', img: warehouse, unit: 'm²', min: 200, max: 5000, step: 50, start: 1200, rate: { 'Industrial Area': 26, 'Birkat Al Awamer': 22, 'Salwa Road': 34 } },
  { id: 'showroom', name: 'Showroom', img: showroom, unit: 'm²', min: 100, max: 2000, step: 20, start: 600, rate: { 'Salwa Road': 120, 'Industrial Area': 70, 'Al Rayyan': 95 } },
  { id: 'shop', name: 'Shop', img: shop, unit: 'm²', min: 40, max: 600, step: 10, start: 120, rate: { 'Salwa Road': 150, 'Al Wakrah': 110, 'Al Rayyan': 125 } },
  { id: 'villa', name: 'Villa', img: villa, unit: 'm²', min: 200, max: 1200, step: 20, start: 420, rate: { 'Al Wakrah': 28, 'Al Rayyan': 30, 'Salwa Road': 32 } },
]

// Sample stock for the demo.
export const spaces = [
  { id: 'warehouse-street-24', title: 'Warehouse, Street 24', type: 'warehouse', area: 'Industrial Area', lease: true, price: 32000, size: 1200, status: 'Ready now', imgs: [warehouse, racks], text: 'High-bay warehouse with offices, loading ramps and three-phase power.' },
  { id: 'salwa-showroom', title: 'Corner showroom, Salwa Road', type: 'showroom', area: 'Salwa Road', lease: false, price: 9500000, size: 640, status: null, imgs: [showroom, shop], text: 'Corner showroom with a mezzanine and 14 m of frontage onto Salwa Road.' },
  { id: 'salwa-retail-shop', title: 'Retail shop, Salwa Road', type: 'shop', area: 'Salwa Road', lease: true, price: 18000, size: 120, status: null, imgs: [shop, showroom], text: 'A street-front shop in a busy parade with customer parking.' },
  { id: 'al-wakrah-villa', title: 'Al Wakrah villa', type: 'villa', area: 'Al Wakrah', lease: true, price: 12000, size: 420, status: null, imgs: [villa, villaIn], text: 'A standalone villa with a majlis, a garden and a maid’s room.' },
  { id: 'al-rayyan-plot', title: 'Al Rayyan plot with villa', type: 'villa', area: 'Al Rayyan', lease: false, price: 4800000, size: 900, status: 'Renovate or rebuild', imgs: [plot, plotIn], text: 'An older villa on a large plot, ideal to renovate or rebuild.' },
  { id: 'labour-accommodation', title: 'Licensed accommodation block', type: 'warehouse', area: 'Industrial Area', lease: false, price: 14500000, size: 2800, status: 'Income', imgs: [block, racks], text: 'A licensed accommodation block with 80 rooms and a canteen, let to one company.' },
  { id: 'birkat-store', title: 'Cold store, Birkat Al Awamer', type: 'warehouse', area: 'Birkat Al Awamer', lease: true, price: 41000, size: 1500, status: null, imgs: [racks, warehouse], text: 'Chilled and ambient storage with racking and a yard for trucks.' },
]
export const typeName = id => types.find(t => t.id === id)?.name || id
