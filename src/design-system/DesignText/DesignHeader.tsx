import { SxProps } from '@mui/material'
import { Theme } from '@mui/system'
import DesignText from './DesignText'

export default function DesignHeader({ children, sx, onClick }: { children: string; sx?: SxProps<Theme>; onClick?: () => void }) {
  return (
    <DesignText sx={sx} onClick={onClick} variant="h4">
      {children}
    </DesignText>
  )
}
