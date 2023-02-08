import { SxProps, Typography } from '@mui/material'
import { Theme } from '@mui/system'
import { color } from '../../theme/color'

export default function DesignText({
  className,
  children,
  sx,
  variant,
  onClick,
}: {
  className?: string
  children: string
  sx?: SxProps<Theme>
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline' | 'inherit'
  onClick?: () => void
}) {
  const styles: SxProps<Theme> = {
    cursor: onClick ? 'pointer' : 'auto',
    color: color.black,
  }

  return (
    <Typography
      sx={{
        ...styles,
        ...sx,
      }}
      textAlign={'center'}
      variant={variant}
      className={className}
      onClick={onClick}
    >
      {children}
    </Typography>
  )
}
