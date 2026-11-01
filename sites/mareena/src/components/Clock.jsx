import { useEffect, useState } from 'react'

// Reception never closes, so this is true at any hour: it states the time in Kuwait and that someone is there.
export default function Clock() {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => { const t = setInterval(() => setNow(new Date()), 15000); return () => clearInterval(t) }, [])
  const time = now.toLocaleTimeString('en-GB', { timeZone: 'Asia/Kuwait', hour: 'numeric', minute: '2-digit', hour12: true })
  return <p className="clock" aria-live="off"><span className="dot" aria-hidden="true" />It’s {time} in Kuwait. Reception is open.</p>
}
