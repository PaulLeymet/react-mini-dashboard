import { Modal } from '@mui/material'
import { motion } from 'framer-motion'
import { CSSProperties } from 'react'
import { closeModal, selectModal } from '../../modules/Dashboard/stores/modalSlice'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { color } from '../../theme/color'

export default function DesignModal() {
  const dispatch = useAppDispatch()
  const modal = useAppSelector(selectModal)

  const handleClose = () => {
    dispatch(closeModal())
  }

  return (
    <Modal
      open={modal.open}
      onClose={handleClose}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
      children={
        <motion.div style={styles.modal} initial={{ scale: 1 }} animate={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          {modal.content}
        </motion.div>
      }
    />
  )
}

const styles: {
  [key: string]: CSSProperties | undefined
} = {
  modal: {
    position: 'absolute',
    top: '5%',
    left: '10%',
    right: '10%',
    bottom: '5%',
    background: color.white,
    borderRadius: 10,
    border: `1px solid ${color.primary}`,
    overflow: 'hidden',
  },
}
