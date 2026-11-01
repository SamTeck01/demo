// Simple drawn floor plans, one per building's typical home. Line drawings, not to scale.
const plans = {
  one: <><rect x="10" y="10" width="220" height="160" /><path d="M120 10v100M10 110h110M170 10v60M170 70h60" /><text x="40" y="60">Living</text><text x="135" y="45">Bed</text><text x="180" y="120">Kitchen</text><text x="40" y="145">Balcony</text></>,
  two: <><rect x="10" y="10" width="220" height="160" /><path d="M90 10v160M90 90h140M170 10v80M10 120h80" /><text x="25" y="65">Living</text><text x="110" y="50">Bed 1</text><text x="185" y="50">Bed 2</text><text x="120" y="135">Beach terrace</text><text x="20" y="150">Kitchen</text></>,
  three: <><rect x="10" y="10" width="220" height="160" /><path d="M80 10v160M80 60h150M155 10v50M80 120h150M155 120v50" /><text x="22" y="95">Living</text><text x="95" y="40">Bed 1</text><text x="170" y="40">Bed 2</text><text x="125" y="95">Hall</text><text x="95" y="150">Bed 3</text><text x="170" y="150">Kitchen</text></>,
}
export default function FloorPlan({ kind, label }) {
  return (
    <svg className="plan" viewBox="0 0 240 180" role="img" aria-label={label}>
      <g fill="none" stroke="currentColor" strokeWidth="2">{plans[kind]}</g>
    </svg>
  )
}
