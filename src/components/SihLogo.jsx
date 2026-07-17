/**
 * "SIH" wordmark lockup — S orange, I white, H green — on a dark rounded badge
 * so the white letter stays legible on light backgrounds.
 */
export default function SihLogo({ className = 'h-10 w-10' }) {
  return (
    <svg viewBox="0 0 100 100" className={className} role="img" aria-label="Smart India Hackathon">
      <rect x="4" y="4" width="92" height="92" rx="22" fill="#12142B" />
      <text
        x="50"
        y="67"
        textAnchor="middle"
        fontFamily="Poppins, sans-serif"
        fontWeight="800"
        fontSize="46"
        letterSpacing="-1"
      >
        <tspan fill="#F0731E">S</tspan>
        <tspan fill="#FFFFFF">I</tspan>
        <tspan fill="#2DBB3C">H</tspan>
      </text>
    </svg>
  )
}
