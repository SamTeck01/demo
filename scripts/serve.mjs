// Local stand-in for Vercel: static files from dist, with the same rewrites as vercel.json.
import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { extname, join } from 'node:path'
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.png': 'image/png', '.json': 'application/json' }
const rules = JSON.parse(await readFile('vercel.json', 'utf8')).rewrites.map(r => [new RegExp('^' + r.source.replace('(.*)', '(.*)') + '$'), r.destination])
createServer(async (req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0])
  const file = async f => { try { return (await stat(f)).isFile() ? f : null } catch { return null } }
  let f = await file(join('dist', p))
  if (!f) for (const [re, dest] of rules) if (re.test(p)) { f = await file(join('dist', dest)); break }
  if (!f) { res.writeHead(404); return res.end('404') }
  res.writeHead(200, { 'content-type': types[extname(f)] || 'application/octet-stream' })
  res.end(await readFile(f))
}).listen(+process.argv[2] || 4300)
