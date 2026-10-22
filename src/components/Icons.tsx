type IconProps = {
  className?: string
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 3.2A8.8 8.8 0 0 0 4.2 16.7L3.1 21l4.4-1.1A8.8 8.8 0 1 0 12 3.2Zm0 1.6a7.2 7.2 0 0 1 6.2 10.9l-.2.4.4 1.6-1.6-.4-.4.2A7.2 7.2 0 1 1 12 4.8Zm-3 3.6c.2 0 .4 0 .5.3.2.4.7 1.6.7 1.7 0 .2 0 .3-.1.5l-.3.4c-.1.1-.2.3-.1.5.2.3.7 1.1 1.5 1.8 1 .9 1.8 1.1 2.1 1.3.2.1.4.1.5-.1l.6-.7c.2-.2.3-.2.5-.1l1.5.7c.2.1.4.2.4.3.1.2 0 1.1-.4 1.6-.4.4-1.1.7-1.8.6-.4 0-.9-.1-1.9-.5-1.6-.7-3.2-2.1-4.2-3.7-.8-1.2-1.3-2.4-1.3-3.4 0-.8.4-1.4.8-1.7.2-.2.4-.3.6-.3Z"
      />
    </svg>
  )
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="16.7" cy="7.4" r="0.9" fill="currentColor" />
    </svg>
  )
}
