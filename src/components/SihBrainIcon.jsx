/**
 * Split brain + lightbulb mark in the SIH visual style: orange half with
 * circuit-board traces, green half with binary digits, on a bulb base.
 */
export default function SihBrainIcon({ className = 'h-16 w-16' }) {
  return (
    <svg viewBox="0 0 120 140" className={className} role="img" aria-label="Smart India Hackathon icon">
      {/* radiating rays */}
      <g stroke="#3A3F52" strokeWidth="5" strokeLinecap="round">
        <line x1="60" y1="4" x2="60" y2="16" />
        <line x1="20" y1="14" x2="28" y2="24" />
        <line x1="100" y1="14" x2="92" y2="24" />
        <line x1="4" y1="46" x2="18" y2="46" />
        <line x1="116" y1="46" x2="102" y2="46" />
        <line x1="20" y1="80" x2="28" y2="72" />
        <line x1="100" y1="80" x2="92" y2="72" />
      </g>

      {/* left orange brain lobe */}
      <path
        d="M60 20 C40 20 26 32 26 46 C20 48 18 56 22 62 C18 68 20 76 28 78 C28 88 38 94 48 92 C52 96 60 96 60 90 L60 20 Z"
        fill="#EA7317"
      />
      {/* right green brain lobe */}
      <path
        d="M60 20 C80 20 94 32 94 46 C100 48 102 56 98 62 C102 68 100 76 92 78 C92 88 82 94 72 92 C68 96 60 96 60 90 L60 20 Z"
        fill="#1E8A34"
      />

      {/* circuit traces on orange side */}
      <g stroke="#FFD9B0" strokeWidth="1.6" fill="none" strokeLinecap="round">
        <path d="M34 40 L44 40 L44 48 L38 48" />
        <path d="M32 58 L42 58 L42 66" />
        <path d="M40 76 L48 76 L48 68 L54 68" />
        <circle cx="34" cy="40" r="2" fill="#FFD9B0" />
        <circle cx="44" cy="48" r="2" fill="#FFD9B0" />
        <circle cx="42" cy="66" r="2" fill="#FFD9B0" />
        <circle cx="54" cy="68" r="2" fill="#FFD9B0" />
      </g>

      {/* binary digits on green side */}
      <text x="68" y="42" fontFamily="ui-monospace, monospace" fontSize="9" fill="#B6F2C6">1010</text>
      <text x="68" y="54" fontFamily="ui-monospace, monospace" fontSize="9" fill="#B6F2C6">0110</text>
      <text x="68" y="66" fontFamily="ui-monospace, monospace" fontSize="9" fill="#B6F2C6">1101</text>
      <text x="68" y="78" fontFamily="ui-monospace, monospace" fontSize="9" fill="#B6F2C6">010</text>

      {/* bulb base / screw threads */}
      <rect x="46" y="94" width="28" height="8" rx="2" fill="#3A3F52" />
      <rect x="48" y="103" width="24" height="6" rx="2" fill="#3A3F52" />
      <rect x="50" y="110" width="20" height="6" rx="2" fill="#3A3F52" />
      <path d="M52 117 L68 117 L60 128 Z" fill="#3A3F52" />

      {/* SIH text */}
      <text
        x="60"
        y="137"
        textAnchor="middle"
        fontFamily="Poppins, sans-serif"
        fontWeight="800"
        fontSize="14"
      >
        <tspan fill="#EA7317">S</tspan>
        <tspan fill="#0F172A">I</tspan>
        <tspan fill="#1E8A34">H</tspan>
      </text>
    </svg>
  )
}
