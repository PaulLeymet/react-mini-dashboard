import { Chip } from '@mui/material'
import { CSSProperties } from 'react'
import { useNavigate } from 'react-router-dom'
import { selectElements } from '../../modules/Dashboard/stores/elementSlice'
import { ElementsCategory } from '../../modules/Dashboard/stores/types/CategoryType'
import { useAppSelector } from '../../store/hooks'
import DesignBox from '../DesignBox/DesignBox'
import DesignText from '../DesignText/DesignText'

export interface DesignPageLinkProps {
  category: ElementsCategory
  url: string
  style?: CSSProperties
  label?: string
}
export default function DesignPageLink({ label, category, url, style }: DesignPageLinkProps) {
  // =================
  // Stores
  // =================
  const elements = useAppSelector(selectElements)

  // =================
  // Navigation
  // =================
  const navigate = useNavigate()

  // =================
  // States
  // =================
  const getIndexFromUrl = (url: string) => {
    const myRe = /\d+/g
    const result = myRe.exec(url)
    if (result && result.length > 0) return parseInt(result[0])
    else return -1
  }

  const getElementFromUrl = (category: ElementsCategory, url: string) => {
    const index = getIndexFromUrl(url) - 1
    if (index === -1) return null
    else return elements[`${category}`].elements[index]
  }

  const element = getElementFromUrl(category, url)

  // =================
  // Hooks
  // =================

  // =================
  // Methods
  // =================
  const navigateTo = () => {
    if (category === 'films') navigate(`/${category}/${elements[`${category}`].elements.findIndex((e) => e.title === element.title)}`)
    else navigate(`/${category}/${elements[`${category}`].elements.findIndex((e) => e.name === element.name)}`)
  }

  // =================
  // Render
  // =================
  return (
    (element?.name || element?.title) &&
    (label ? (
      <DesignBox style={styles.container}>
        <DesignText style={styles.label} textAlign='left'>
          {label}
        </DesignText>
        <Chip
          placeholder='...'
          style={{ ...styles.link, ...style }}
          variant='outlined'
          label={element?.name || element?.title}
          clickable
          onClick={navigateTo}
        />
      </DesignBox>
    ) : (
      <Chip
        placeholder='...'
        style={{ ...styles.link, ...style }}
        variant='outlined'
        label={element?.name || element?.title}
        clickable
        onClick={navigateTo}
      />
    ))
  )
}

const styles: {
  [key: string]: CSSProperties | undefined
} = {
  container: {
    flexDirection: 'column',
  },
  label: {
    marginLeft: '8px',
    fontSize: 12,
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 0.38)',
    marginBottom: 1,
  },
  link: {
    marginLeft: '8px',
    maxWidth: 200,
  },
}
