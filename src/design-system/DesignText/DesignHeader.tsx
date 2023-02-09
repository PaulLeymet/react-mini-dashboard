import { CSSProperties } from 'react'
import DesignText from './DesignText'

export default function DesignHeader({ children, style, onClick }: { children: string; style?: CSSProperties; onClick?: () => void }) {
  return (
    <DesignText
      sx={{
        ...styles,
        ...style,
      }}
      onClick={onClick}
      variant="h4"
    >
      {children}
    </DesignText>
  )
}

const styles: CSSProperties = {
  fontFamily: 'Starjedi',
}
