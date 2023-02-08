import { ListItem } from '@mui/material'
import { CSSProperties } from 'react'
import DesignText from '../../../design-system/DesignText/DesignText'
import { color } from '../../../theme/color'

export default function ListElement({ label, style }: { label: string; style?: CSSProperties }) {
  // =================
  // Stores
  // =================

  // =================
  // States
  // =================

  // =================
  // Hooks
  // =================

  // =================
  // Methods
  // =================

  // =================
  // Render
  // =================
  return (
    <ListItem>
      <div style={styles.component}>
        <DesignText sx={styles.text}>{label}</DesignText>
      </div>
    </ListItem>
  )
}

const styles: {
  [key: string]: CSSProperties | undefined
} = {
  component: {
    cursor: 'pointer',
    width: 100,
    height: 100,
    background: color.primary,
    margin: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  text: {
    pointerEvents: 'none',
    color: color.white,
  },
}
