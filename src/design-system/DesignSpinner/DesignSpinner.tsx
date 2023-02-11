import { CircularProgress } from '@mui/material'
import { CSSProperties } from 'react'

export default function DesignSpinner({ size, style, color }: { size?: number; style?: CSSProperties; color?: string }) {
  return (
    <CircularProgress
      size={size}
      sx={{
        ...styles,
        ...style,
        ...{ color: color },
      }}
    />
  )
}

const styles: CSSProperties = {
  margin: 0,
  padding: 0,
}
