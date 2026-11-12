type BrandMarkProps = {
  size?: number
  className?: string
}

export default function BrandMark({ size = 32, className }: BrandMarkProps) {
  return (
    <img
      className={className}
      src="/tro-tot-icon.svg"
      width={size}
      height={size}
      alt="Trọ Tốt"
      aria-hidden="true"
      draggable={false}
    />
  )
}
