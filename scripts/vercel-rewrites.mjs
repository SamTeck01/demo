// Rewrites vercel.json so every app in ./sites serves its own index.html for its routes.
import { readdirSync, existsSync, writeFileSync } from 'node:fs'
const sites = readdirSync('sites').filter(n => existsSync(`sites/${n}/vite.config.js`)).sort()
const rewrites = sites.flatMap(n => [{ source: `/${n}`, destination: `/${n}/index.html` }, { source: `/${n}/(.*)`, destination: `/${n}/index.html` }])
rewrites.push({ source: '/(.*)', destination: '/index.html' })
writeFileSync('vercel.json', JSON.stringify({ framework: 'vite', buildCommand: 'npm run build', outputDirectory: 'dist', rewrites }, null, 2) + '\n')
console.log('vercel.json:', sites.join(', '))
