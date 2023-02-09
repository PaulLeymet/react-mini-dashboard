import { Star, StarOutline } from '@mui/icons-material'
import { ListItem } from '@mui/material'
import { motion } from 'framer-motion'
import { CSSProperties } from 'react'
import DesignText from '../../../../design-system/DesignText/DesignText'
import { color } from '../../../../theme/color'

export default function Element({
  id,
  style,
  selected,
  onShow,
  onAdd,
}: {
  id: string
  style?: CSSProperties
  selected: boolean
  onShow?: () => void
  onAdd?: () => void
}) {
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
  const handleAdd = (event: any) => {
    event.stopPropagation()
    if (onAdd) onAdd()
  }

  // =================
  // Render
  // =================
  return (
    <motion.div style={styles.component} initial={{ scale: 1 }} whileHover={{ scale: 1.05 }} onClick={onShow}>
      <ListItem style={styles.listItem}>
        <DesignText sx={styles.text}>{id}</DesignText>
        <motion.div style={styles.iconContainer} initial={{ scale: 1 }} whileHover={{ scale: 1.2 }} onClick={handleAdd}>
          {selected ? <Star style={styles.icon} /> : <StarOutline style={styles.icon} />}
        </motion.div>
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
  iconContainer: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  icon: {
    color: color.white,
    width: 30,
    height: 30,
  },
}
