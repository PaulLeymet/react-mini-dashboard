import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'
import { motion } from 'framer-motion'
import { CSSProperties, useState } from 'react'
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
  const [hovered, setHovered] = useState(false)

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

  const onHoverStart = () => {
    setHovered(true)
  }

  const onHoverEnd = () => {
    setHovered(false)
  }

  // =================
  // Render
  // =================
  return (
    <motion.div
      style={styles.main}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      onClick={onShow}
    >
      <DesignText textAlign={'center'} style={styles.text}>
        {id}
      </DesignText>
      {hovered ? (
        isRessource ? (
          <div style={styles.deleteIconContainer}>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} onClick={handleAdd}>
              <DeleteForeverIcon style={styles.deleteIcon} />
            </motion.div>
          </div>
        ) : (
          <div style={styles.addIconContainer}>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} onClick={handleAdd}>
              {selected ? <RemoveCircleIcon style={styles.removeIcon} /> : <AddCircleOutlineIcon style={styles.addIcon} />}
            </motion.div>
          </div>
        )
      ) : null}
    </motion.div>
  )
}

const styles: {
  [key: string]: CSSProperties | undefined
} = {
  main: {
    width: 300,
    height: 200,
    background: color.white + 'E8',
    borderRadius: 10,
    margin: 20,
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    WebkitBoxShadow: '0px 0px  20px 3px rgba(0,0,0,0.4)',
    boxShadow: ' 0px 0px  20px 3px rgba(0,0,0,0.4)',
    cursor: 'pointer',
  },
  text: {
    fontFamily: 'Starjedi',
    pointerEvents: 'none',
  },
  addIconContainer: {
    position: 'absolute',
    bottom: 10,
  },
  deleteIconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  addIcon: {
    color: color.primary,
  },
  removeIcon: {
    color: color.red,
  },
  deleteIcon: {
    color: color.red,
  },
}
