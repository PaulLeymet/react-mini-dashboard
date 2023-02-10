import { CSSProperties } from 'react'
import DesignText from './DesignText'

export default function DesignHeader({
  children,
  style,
  onClick,
  color,
  variant,
}: {
  children: string
  style?: CSSProperties
  onClick?: () => void
  color?: string
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}) {
  return (
    <DesignText
      style={{
        ...styles,
        ...style,
      }}
      onClick={onClick}
      variant={variant || 'h5'}
      color={color}
    >
      {children}
    </DesignText>
  )
}

const styles: CSSProperties = {
  fontFamily: 'Starjedi',
  paddingBottom: '4px',
}
