import { Star, StarOutline } from '@mui/icons-material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { ListItem } from '@mui/material'
import { motion } from 'framer-motion'
import { CSSProperties } from 'react'
import DesignText from '../../../../design-system/DesignText/DesignText'
import { color } from '../../../../theme/color'

export default function Element({
  id,
  style,
  selected,
  isRessource,
  onShow,
  onAdd,
}: {
  id: string
  style?: CSSProperties
  selected: boolean
  isRessource?: boolean
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
    <div style={styles.component} onClick={onShow}>
      <ListItem style={styles.listItem}>
        <DesignText style={styles.text}>{id}</DesignText>
        <motion.div style={styles.iconContainer} initial={{ scale: 1 }} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} onClick={handleAdd}>
          {isRessource ? (
            <DeleteForeverIcon style={styles.deleteIcon} />
          ) : selected ? (
            <Star style={styles.icon} />
          ) : (
            <StarOutline style={styles.icon} />
          )}
        </motion.div>
      </ListItem>
    </div>
  )
}

const styles: {
  [key: string]: CSSProperties | undefined
} = {
  component: {
    cursor: 'pointer',
    width: '10%',
    height: '90%',
    background: color.white + 'E9',
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
    color: color.black,
  },
  iconContainer: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  icon: {
    color: color.tertiary,
    width: 30,
    height: 30,
  },
  deleteIcon: {
    color: color.red,
    width: 30,
    height: 30,
  },
}
