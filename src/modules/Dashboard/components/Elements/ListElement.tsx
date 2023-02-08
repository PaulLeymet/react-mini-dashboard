import { ListItem } from '@mui/material'
import { motion } from 'framer-motion'
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
    <motion.div style={styles.component} initial={{ scale: 1 }} whileHover={{ scale: 1.05 }}>
      <ListItem style={styles.listItem} onClick={onShow}>
        <div>
          <DesignText sx={styles.text}>{id}</DesignText>
        </div>
      </ListItem>
    </motion.div>
  )
}

const styles: {
  [key: string]: CSSProperties | undefined
} = {
  component: {
    cursor: 'pointer',
    width: '10%',
    height: '90%',
    background: color.primary,
    margin: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  listItem: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    pointerEvents: 'none',
    color: color.white,
  },
}
