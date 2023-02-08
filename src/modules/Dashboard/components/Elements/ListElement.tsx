import { ListItem } from '@mui/material'
import { CSSProperties } from 'react'
import DesignText from '../../../../design-system/DesignText/DesignText'
import { color } from '../../../../theme/color'

export default function ListElement({ id, style, onShow, onAdd }: { id: string; style?: CSSProperties; onShow?: () => void; onAdd?: () => void }) {
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
      <div style={styles.component} onClick={onShow}>
        <DesignText sx={styles.text}>{id}</DesignText>
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
