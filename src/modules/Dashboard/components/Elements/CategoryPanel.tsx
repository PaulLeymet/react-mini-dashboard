import { CSSProperties } from 'react'
import { color } from '../../../../theme/color'
import { ILLUSTRATIONS } from '../../../../theme/illustrations'
import { ElementsCategory } from '../../stores/types/CategoryType'
import ElementsList from './ElementsList'

export default function CategoryPanel({ category, style }: { category: ElementsCategory; style?: CSSProperties }) {
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
  const renderBackgroundStyle = (): CSSProperties | null => {
    switch (category) {
      case 'film':
        return {
          backgroundColor: color.black,
          backgroundImage: `url(${ILLUSTRATIONS.films})`,
          backgroundSize: 'cover',
          borderRadius: 15,
        }
      case 'people':
        return {
          backgroundColor: color.black,
          backgroundImage: `url(${ILLUSTRATIONS.people})`,
          backgroundSize: 'cover',
          borderRadius: 15,
        }
      case 'planets':
        return {
          backgroundColor: color.black,
          backgroundImage: `url(${ILLUSTRATIONS.planets})`,
          backgroundSize: 'cover',
          borderRadius: 15,
        }
      case 'species':
        return {
          backgroundColor: color.black,
          backgroundImage: `url(${ILLUSTRATIONS.species})`,
          backgroundSize: 'cover',
          borderRadius: 15,
        }
      case 'starships':
        return {
          backgroundColor: color.black,
          backgroundImage: `url(${ILLUSTRATIONS.starships})`,
          backgroundSize: 'cover',
          borderRadius: 15,
        }
      case 'vehicles':
        return {
          backgroundColor: color.black,
          backgroundImage: `url(${ILLUSTRATIONS.vehicles})`,
          backgroundSize: 'cover',
          borderRadius: 15,
        }
      default:
        return null
    }
  }

  // =================
  // Render
  // =================
  return (
    <div
      style={{
        ...styles.main,
        ...style,
        ...renderBackgroundStyle(),
      }}
    >
      <div style={styles.sectionLeft}>
        <ElementsList style={styles.cardContainer} category={category} isRessourceList />
      </div>
      <div style={styles.sectionRight}>
        <ElementsList style={styles.cardContainer} category={category} />
      </div>
    </div>
  )
}

const styles: {
  [key: string]: CSSProperties | undefined
} = {
  main: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    margin: 10,
  },
  sectionLeft: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    margin: 10,
  },
  sectionRight: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    margin: 10,
  },
  header: {},
}
