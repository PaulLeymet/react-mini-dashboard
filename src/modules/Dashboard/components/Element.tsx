import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'
import { motion } from 'framer-motion'
import { CSSProperties, useState } from 'react'
import DesignHeader from '../../../design-system/DesignText/DesignHeader'
import { useIsMobile } from '../../../hooks/useIsMobile'
import { color } from '../../../theme/color'

export default function Element({
  id,
  style,
  selected,
  isResource,
  onShow,
  onAdd,
}: {
  id: string
  style?: CSSProperties
  selected: boolean
  isResource?: boolean
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
  const isMobile = useIsMobile()

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
      style={{ ...styles.main, ...(isMobile && { width: 160, height: 160 }) }}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      onClick={onShow}
    >
      <DesignHeader color={color.white} textAlign={'center'} style={styles.text} variant={'subtitle1'}>
        {id}
      </DesignHeader>
      {hovered ? (
        isResource ? (
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
    width: 250,
    height: '18vh',
    background: color.black + 'F0',
    borderRadius: 10,
    margin: 20,
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    WebkitBoxShadow: '0px 0px 10px 3px rgba(255,255,255,0.15)',
    boxShadow: ' 0px 0px 10px 3px rgba(255,255,255,0.15)',
    cursor: 'pointer',
  },
  text: {
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
    width: 30,
    height: 30,
    color: color.white,
  },
  removeIcon: {
    width: 30,
    height: 30,
    color: color.white,
  },
  deleteIcon: {
    width: 30,
    height: 30,
    color: color.white,
  },
}
