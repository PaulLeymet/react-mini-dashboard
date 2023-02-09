import { CircularProgress } from '@mui/material'
import { CSSProperties } from 'react'

export default function DesignSpinner({ size, style }: { size?: number; style?: CSSProperties }) {
  return (
    <CircularProgress
      size={size}
      sx={{
        ...styles,
        ...style,
      }}
    />
  )
}

const styles: CSSProperties = {
  margin: 0,
  padding: 0,
}
