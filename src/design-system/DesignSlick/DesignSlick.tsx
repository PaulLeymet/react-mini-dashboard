import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { CSSProperties, useContext } from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import { color } from '../../theme/color'
import './style.css'

export default function DesignSlick({ data, renderElement }: { data: any[]; renderElement: (element: any, index: number) => JSX.Element }) {
  const LeftArrow = () => {
    const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext)

    const prev = () => {
      scrollPrev()
    }

    return <ArrowBackIosIcon style={{ ...styles.arrow, ...(isFirstItemVisible ? styles.inactive : null) }} onClick={prev} />
  }

  const RightArrow = () => {
    const { isFirstItemVisible, scrollNext } = useContext(VisibilityContext)

    const next = () => {
      scrollNext()
    }

    return <ArrowForwardIosIcon style={{ ...styles.arrow, ...(isFirstItemVisible ? styles.inactive : null) }} onClick={next} />
  }

  return (
    <div style={styles.container}>
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
    </div>
  )
}

const styles: {
  [key: string]: CSSProperties | undefined
} = {
  container: {
    display: 'block',
    maxWidth: 1800, // @FIXME
  },
  arrow: {
    display: 'flex',
    width: 40,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    color: color.white,
  },
}
