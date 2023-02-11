import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { motion } from 'framer-motion'
import { CSSProperties, useContext } from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import { color } from '../../theme/color'
import DesignBox from '../DesignBox/DesignBox'
import './style.css'

export default function DesignSlick({ data, renderElement }: { data: any[]; renderElement: (element: any, index: number) => JSX.Element }) {
  const LeftArrow = () => {
    const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext)

    const prev = () => {
      scrollPrev()
    }

    return (
      <div style={styles.arrowContainer}>
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} onClick={prev}>
          <ArrowBackIosIcon style={{ ...styles.arrow, ...(isFirstItemVisible ? styles.inactive : null) }} />
        </motion.div>
      </div>
    )
  }

  const RightArrow = () => {
    const { isFirstItemVisible, scrollNext } = useContext(VisibilityContext)

    const next = () => {
      scrollNext()
    }

    return (
      <div style={styles.arrowContainer}>
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} onClick={next}>
          <ArrowForwardIosIcon style={{ ...styles.arrow, ...(isFirstItemVisible ? styles.inactive : null) }} />
        </motion.div>
      </div>
    )
  }

  return (
    <DesignBox>
      <ScrollMenu
        wrapperClassName="horizontal-scroll-wrapper"
        scrollContainerClassName="horizontal-scroll-container hide-scrollbar"
        itemClassName="horizontal-scroll-list-item"
        separatorClassName="horizontal-scroll-separator"
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
      >
        {data.map((element, index) => renderElement(element, index))}
      </ScrollMenu>
    </DesignBox>
  )
}

const styles: {
  [key: string]: CSSProperties | undefined
} = {
  arrowContainer: {
    width: 60,
    height: '100%',
    display: 'flex',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow: {
    display: 'flex',
    width: 40,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    color: color.white,
    cursor: 'pointer',
  },
}
