import { LoadingButton } from '@mui/lab'
import { createTheme, SxProps, Theme, ThemeProvider } from '@mui/material'
import { color } from '../../theme/color'

export default function DesignButton({
  className,
  label,
  onClick,
  loading,
  disabled,
  sx,
}: {
  className?: string
  label: string
  onClick: () => void
  loading?: boolean
  disabled?: boolean
  sx?: SxProps<Theme>
}) {
  const styles: SxProps<Theme> = {
    padding: 1,
    margin: 0,
  }

  const theme = createTheme({
    palette: {
      action: {
        disabledBackground: color.white,
        active: color.white,
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <LoadingButton
        sx={{
          ...styles,
          ...sx,
        }}
        disabled={disabled}
        loading={loading}
        className={className}
        variant="contained"
        onClick={onClick}
      >
        {label}
      </LoadingButton>
    </ThemeProvider>
  )
}
