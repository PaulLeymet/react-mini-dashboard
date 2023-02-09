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
    <ListItem style={styles.main} onClick={onShow}>
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
  )
}

const styles: {
  [key: string]: CSSProperties | undefined
} = {
  main: {
    cursor: 'pointer',
    maxWidth: 400,
    minWidth: 80,
    height: 50,
    background: color.white + 'E8',
    margin: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  text: {
    pointerEvents: 'none',
    color: color.black,
  },
  iconContainer: {
    position: 'absolute',
    right: 10,
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
