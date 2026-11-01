import { useLang } from './Lang.jsx'

export default function Footer() {
  const { t } = useLang()
  return <footer className="foot"><span>© 2026 Aria Global Realty, Inc.</span><span>{t.foot}</span></footer>
}
