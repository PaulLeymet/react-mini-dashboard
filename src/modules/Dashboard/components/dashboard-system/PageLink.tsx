import { CSSProperties } from 'react'
import { useNavigate } from 'react-router-dom'
import DesignText from '../../../../design-system/DesignText/DesignText'
import { useAppSelector } from '../../../../store/hooks'
import { color } from '../../../../theme/color'
import { selectElements } from '../../stores/elementSlice'
import { ElementsCategory } from '../../stores/types/CategoryType'

export default function PageLink({ category, url }: { category: ElementsCategory; url: string }) {
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
    switch (category) {
      case 'films':
        navigate('/film/' + elements.films.elements.findIndex((e) => e.title === element.title))
        break
      case 'people':
        navigate('/people/' + elements.people.elements.findIndex((e) => e.name === element.name))
        break
      case 'planets':
        navigate('/planet/' + elements.planets.elements.findIndex((e) => e.name === element.name))
        break
      case 'species':
        navigate('/specie/' + elements.species.elements.findIndex((e) => e.name === element.name))
        break
      case 'starships':
        navigate('/starship/' + elements.starships.elements.findIndex((e) => e.name === element.name))
        break
      case 'vehicles':
        navigate('/vehicle/' + elements.vehicles.elements.findIndex((e) => e.name === element.name))
        break
      default:
        break
    }
  }

  // =================
  // Render
  // =================
  return (
    <DesignText key={url} style={styles.link} onClick={navigateTo}>
      {element?.name || element?.title}
    </DesignText>
  )
}

const styles: {
  [key: string]: CSSProperties | undefined
} = {
  link: {
    cursor: 'pointer',
    color: color.primary,
  },
}
