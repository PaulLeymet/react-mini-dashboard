import { CSSProperties } from 'react'
import DesignText from './DesignText'

export default function DesignHeader({
  children,
  style,
  onClick,
  color,
  variant,
  textAlign,
}: {
  children: string
  style?: CSSProperties
  onClick?: () => void
  color?: string
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline' | 'inherit'
  textAlign?: 'center' | 'left' | 'right'
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
      textAlign={textAlign}
    >
      {/* Patch for wrong characteur in Starjedi custom font */}
      {children.replace('V', 'v').replace('O', 'o')}
    </DesignText>
  )
}

const styles: CSSProperties = {
  fontFamily: 'Starjedi',
  paddingBottom: '4px',
}
