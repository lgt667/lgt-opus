const base = {
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
}

export function ArrowUpRight({ size = 18 }) {
  return (
    <svg {...base} width={size} height={size}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  )
}

export function ArrowDown({ size = 18 }) {
  return (
    <svg {...base} width={size} height={size}>
      <path d="M12 4v15M6 13l6 6 6-6" />
    </svg>
  )
}

export function ArrowUp({ size = 18 }) {
  return (
    <svg {...base} width={size} height={size}>
      <path d="M12 20V5M6 11l6-6 6 6" />
    </svg>
  )
}

export function ArrowRight({ size = 18 }) {
  return (
    <svg {...base} width={size} height={size}>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  )
}

export function MenuIcon({ size = 22 }) {
  return (
    <svg {...base} width={size} height={size}>
      <path d="M3 7h18M3 12h18M3 17h18" />
    </svg>
  )
}

export function CloseIcon({ size = 22 }) {
  return (
    <svg {...base} width={size} height={size}>
      <path d="m5 5 14 14M19 5 5 19" />
    </svg>
  )
}

export function CopyIcon({ size = 17 }) {
  return (
    <svg {...base} width={size} height={size}>
      <rect x="8" y="8" width="11" height="11" />
      <path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3" />
    </svg>
  )
}

export function CheckIcon({ size = 17 }) {
  return (
    <svg {...base} width={size} height={size}>
      <path d="m4 12 5 5L20 6" />
    </svg>
  )
}

export function MailIcon({ size = 18 }) {
  return (
    <svg {...base} width={size} height={size}>
      <rect x="3" y="5" width="18" height="14" rx="0" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

export function PhoneIcon({ size = 18 }) {
  return (
    <svg {...base} width={size} height={size}>
      <path d="M7 3H4v4c0 7.7 5.3 13 13 13h4v-3l-4-2-2 2c-3.4-1.4-6.6-4.6-8-8l2-2-2-4Z" />
    </svg>
  )
}

export function PinIcon({ size = 18 }) {
  return (
    <svg {...base} width={size} height={size}>
      <path d="M20 10c0 5.2-8 11-8 11S4 15.2 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  )
}

export const contactIcons = {
  mail: MailIcon,
  phone: PhoneIcon,
  pin: PinIcon,
}
