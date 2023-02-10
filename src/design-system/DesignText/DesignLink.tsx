import { Link } from '@mui/material'
import { CSSProperties } from 'react'

export default function DesignLink({ style, children, color, href }: { style?: CSSProperties; children: string; color?: string; href: string }) {
  const styles: CSSProperties = {
    color: color,
    textDecoration: 'none',
  }

  return (
    <Link href={href} style={{ ...styles, ...style }}>
      {children}
    </Link>
  )
}
