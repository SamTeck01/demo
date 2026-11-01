import hero from '../assets/img/hero.jpg'
import gables from '../assets/img/gables.jpg'
import gablesExt from '../assets/img/gables-ext.jpg'
import brickell from '../assets/img/brickell.jpg'
import condo from '../assets/img/condo.jpg'
import condoIn from '../assets/img/condo-in.jpg'
import doral from '../assets/img/doral.jpg'
import doralIn from '../assets/img/doral-in.jpg'
import kendall from '../assets/img/kendall.jpg'
import kendallIn from '../assets/img/kendall-in.jpg'
import rental from '../assets/img/rental.jpg'
import townhouse from '../assets/img/townhouse.jpg'
import townIn from '../assets/img/town-in.jpg'

export const heroImg = hero
export const office = {
  phone: '+1 305 905 3370', tel: '+13059053370', email: 'MariaMedina@AriaGlobalRealty.com',
  address: 'Coral Gables, Miami, FL',
}

export const areas = [
  { id: 'coral-gables', name: 'Coral Gables', median: 1600000, img: gables, en: 'Historic, leafy streets and the Miracle Mile.', es: 'Calles históricas y arboladas junto a Miracle Mile.' },
  { id: 'brickell', name: 'Brickell', median: 650000, img: brickell, en: 'Towers on the bay and the city at your door.', es: 'Torres sobre la bahía y la ciudad a la puerta.' },
  { id: 'doral', name: 'Doral', median: 720000, img: doral, en: 'Suburban, Spanish first, close to the airport.', es: 'Suburbano, en español, cerca del aeropuerto.' },
  { id: 'kendall', name: 'Kendall', median: 620000, img: kendall, en: 'Family homes, parks and good schools.', es: 'Casas familiares, parques y buenas escuelas.' },
]

// Sample listings for the demo.
export const homes = [
  { id: 'coral-gables-mediterranean', area: 'coral-gables', rent: false, price: 1890000, beds: 4, baths: 3, sqft: 2980, status: { en: 'New', es: 'Nuevo' }, imgs: [gablesExt, gables, townIn], en: ['Coral Gables Mediterranean', 'A 1920s Mediterranean home with a courtyard, barrel-tile roof and a pool under the palms.'], es: ['Mediterránea en Coral Gables', 'Casa mediterránea de los años veinte con patio, techo de tejas y piscina entre palmas.'] },
  { id: 'brickell-bay-view', area: 'brickell', rent: false, price: 735000, beds: 2, baths: 2, sqft: 1190, status: null, imgs: [condo, condoIn, rental], en: ['Brickell bay-view condo', 'High floor over Biscayne Bay, with a pool deck, gym and valet.'], es: ['Condominio con vista a la bahía', 'Piso alto sobre la bahía de Biscayne, con piscina, gimnasio y valet.'] },
  { id: 'doral-family-home', area: 'doral', rent: false, price: 849000, beds: 4, baths: 3, sqft: 2450, status: null, imgs: [doral, doralIn, kendallIn], en: ['Doral family home', 'Four bedrooms in a gated community, ten minutes from the airport.'], es: ['Casa familiar en Doral', 'Cuatro habitaciones en comunidad cerrada, a diez minutos del aeropuerto.'] },
  { id: 'kendall-single-storey', area: 'kendall', rent: false, price: 615000, beds: 3, baths: 2, sqft: 1720, status: null, imgs: [kendall, kendallIn, doralIn], en: ['Kendall single-storey', 'One level, a big yard and a short walk to the park and schools.'], es: ['Casa de una planta en Kendall', 'Una sola planta, patio grande y cerca del parque y las escuelas.'] },
  { id: 'coral-gables-townhouse', area: 'coral-gables', rent: false, price: 1150000, beds: 3, baths: 3, sqft: 2050, status: null, imgs: [townhouse, townIn, gables], en: ['Coral Gables townhouse', 'A modern townhouse with a garage and a roof terrace.'], es: ['Townhouse en Coral Gables', 'Townhouse moderno con garaje y terraza en la azotea.'] },
  { id: 'brickell-rental', area: 'brickell', rent: true, price: 3900, beds: 1, baths: 1, sqft: 780, status: { en: 'For rent', es: 'Alquiler' }, imgs: [rental, condoIn, condo], en: ['Brickell furnished rental', 'Furnished, twelve-month lease, a walk from the Metromover.'], es: ['Alquiler amueblado en Brickell', 'Amueblado, contrato de doce meses, a pasos del Metromover.'] },
]

export const areaName = id => areas.find(a => a.id === id)?.name || id
