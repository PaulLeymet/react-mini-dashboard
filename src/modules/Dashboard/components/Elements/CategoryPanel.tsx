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
        }
      case 'people':
        return {
          backgroundColor: color.black,
          backgroundImage: `url(${ILLUSTRATIONS.people})`,
          backgroundSize: 'cover',
        }
      case 'planets':
        return {
          backgroundColor: color.black,
          backgroundImage: `url(${ILLUSTRATIONS.planets})`,
          backgroundSize: 'cover',
        }
      case 'species':
        return {
          backgroundColor: color.black,
          backgroundImage: `url(${ILLUSTRATIONS.species})`,
          backgroundSize: 'cover',
        }
      case 'starships':
        return {
          backgroundColor: color.black,
          backgroundImage: `url(${ILLUSTRATIONS.starships})`,
          backgroundSize: 'cover',
        }
      case 'vehicles':
        return {
          backgroundColor: color.black,
          backgroundImage: `url(${ILLUSTRATIONS.vehicles})`,
          backgroundSize: 'cover',
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
      <div style={styles.elementSection}>
        <ElementsList style={styles.cardContainer} category={category} />
      </div>
      <div style={styles.ressourceSection}>
        <ElementsList style={styles.cardContainer} category={category} isRessourceList />
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
    flexDirection: 'column',
    marginTop: 4,
    height: '100%',
  },
  elementSection: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    marginTop: 10,
    marginBottom: 10,
  },
  ressourceSection: {
    display: 'flex',
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    marginTop: 10,
    marginBottom: 10,
  },
  header: {},
}
