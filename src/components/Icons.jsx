const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export const BrakeIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="11" cy="13" r="8" />
    <circle cx="11" cy="13" r="2.5" />
    <path d="M11 6.5v.01M16.5 10v.01M16.5 16v.01M11 19.5v.01M5.5 16v.01M5.5 10v.01" strokeWidth="2.4" />
    <path d="M15 3.5a9.5 9.5 0 0 1 5.5 6.5l-3.5 1a6 6 0 0 0-3-4z" fill="currentColor" stroke="none" />
  </svg>
)

export const SuspensionIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M6 3h12M6 21h12M12 3v2M12 19v2" />
    <path d="M7 6l10 2-10 2 10 2-10 2 10 2-10 2" />
  </svg>
)

export const EngineIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M8 5h6M11 5v3M5 8h10l2 2h2v-2h2v8h-2v-2h-2l-2 3H8l-3-3H3V9h2z" />
    <path d="M9 12l2-2v2h2l-2 2v-2z" fill="currentColor" strokeWidth="1" />
  </svg>
)

export const InjectionIcon = (p) => (
  <svg {...base} {...p}>
    <rect x="9" y="2.5" width="6" height="4" rx="1" />
    <path d="M10 6.5h4v8l-1 2h-2l-1-2z" />
    <path d="M7 9.5h3M14 9.5h3" />
    <path d="M12 18.5v.01M9.5 20v.01M14.5 20v.01M8 22v.01M12 22v.01M16 22v.01" strokeWidth="2.4" />
  </svg>
)

export const WhatsAppIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M12.04 2a9.9 9.9 0 0 0-8.5 15l-1.4 5 5.1-1.3A9.9 9.9 0 1 0 12.04 2zm0 18.1a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3a8.2 8.2 0 1 1 6.9 3.7zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.9 11.9 0 0 0 4.6 4c1.7.7 2.3.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.2-.3-.2-.5-.3z" />
  </svg>
)

export const CalendarIcon = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 10h18M8 3v4M16 3v4" />
  </svg>
)

export const PinIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
)

export const ClockIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
)

export const StarIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M12 2.8l2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9z" />
  </svg>
)

export const CheckIcon = (p) => (
  <svg {...base} strokeWidth={2.6} {...p}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
)
