// Builds every app in ./sites into dist/<name>, after the root app has built.
import { readdirSync, existsSync } from 'node:fs'
import { execSync } from 'node:child_process'

for (const name of readdirSync('sites')) {
  const cfg = `sites/${name}/vite.config.js`
  if (!existsSync(cfg)) continue
  console.log(`\n> ${name}`)
  execSync(`npx vite build --config ${cfg}`, { stdio: 'inherit' })
}
