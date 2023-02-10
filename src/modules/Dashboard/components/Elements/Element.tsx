import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'
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
    <motion.div style={styles.main} initial={{ scale: 1 }} whileHover={{ scale: 1.05 }} onClick={onShow}>
      <ListItem style={styles.listItem}>
        <DesignText textAlign={'center'} style={styles.text}>
          {id}
        </DesignText>
        <motion.div style={styles.iconContainer} initial={{ scale: 1 }} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} onClick={handleAdd}>
          {isRessource ? (
            <DeleteForeverIcon style={styles.deleteIcon} />
          ) : selected ? (
            <RemoveCircleIcon style={styles.icon} />
          ) : (
            <AddCircleOutlineIcon style={styles.icon} />
          )}
        </motion.div>
      </ListItem>
    </motion.div>
  )
}

const styles: {
  [key: string]: CSSProperties | undefined
} = {
  main: {
    cursor: 'pointer',
    width: '10%',
    minWidth: 80,
    height: '60%',
    background: color.white + 'E8',
    margin: 4,

    borderRadius: 5,
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100%',
    padding: 30,
  },
  text: {
    pointerEvents: 'none',
    color: color.black,
    flex: 1,
    display: '-webkit-box',
    overflow: 'hidden',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 1,
  },
  iconContainer: {},
  icon: {
    color: color.primary,
  },
  deleteIcon: {
    color: color.red,
  },
}
