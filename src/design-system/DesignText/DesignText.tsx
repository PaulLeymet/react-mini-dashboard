import { SxProps, Typography } from '@mui/material'
import { Theme } from '@mui/system'
import { color as ThemeColor } from '../../theme/color'

export default function DesignText({
  children,
  style,
  color,
  variant,
  onClick,
  textAlign,
}: {
  children: string
  style?: SxProps<Theme>
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline' | 'inherit'
  color?: string
  onClick?: () => void
  textAlign?: 'center' | 'left' | 'right'
}) {
  const styles: SxProps<Theme> = {
    cursor: onClick ? 'pointer' : 'auto',
    color: color || ThemeColor.black,
  }

  return (
    <Typography
      sx={{
        ...styles,
        ...style,
      }}
      textAlign={textAlign || 'center'}
      variant={variant}
      onClick={onClick}
    >
      {children}
    </Typography>
  )
}
