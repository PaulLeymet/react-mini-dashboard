import { CSSProperties } from 'react'
import DesignBox from '../../../design-system/DesignBox/DesignBox'
import DesignHeader from '../../../design-system/DesignText/DesignHeader'
import { useAppSelector } from '../../../store/hooks'
import { color } from '../../../theme/color'
import { selectElements } from '../stores/elementSlice'
import { selectResources } from '../stores/resourceSlice'
import { ElementsCategory } from '../stores/types/CategoryType'
import CacheManager from './CacheManager'
import ElementsList from './ElementsList'

export default function CategoryPanel({ category, style }: { category: ElementsCategory; style?: CSSProperties }) {
  // =================
  // Stores
  // =================
  const elements = useAppSelector(selectElements)
  const resources = useAppSelector(selectResources)

  // =================
  // States
  // =================

  // =================
  // Hooks
  // =================

  // =================
  // Methods
  // =================
  const getCategoryLabel = (category: ElementsCategory) => {
    switch (category) {
      case 'films':
        return 'Films'
      case 'people':
        return 'People'
      case 'planets':
        return 'Planets'
      case 'species':
        return 'Species'
      case 'starships':
        return 'Starships'
      case 'vehicles':
        return 'Vehicles'
      default:
        return ''
    }
  }

  // =================
  // Render
  // =================
  return (
    <DesignBox
      style={{
        ...styles.main,
        ...style,
      }}
    >
      <DesignBox style={styles.elementSection}>
        <DesignHeader textAlign="left" style={styles.header} color={color.white}>
          {`${getCategoryLabel(category)} - ${elements[`${category}`].count}`}
        </DesignHeader>
        <ElementsList style={styles.cardContainer} category={category} />
      </DesignBox>
      <DesignBox style={styles.resourceSection}>
        {resources[`${category}`].length ? (
          <>
            <DesignHeader textAlign="left" style={styles.header} color={color.white}>
              {`My ${getCategoryLabel(category).toLowerCase()} - ${resources[`${category}`].length}`}
            </DesignHeader>
            <ElementsList category={category} isResourceList />
          </>
        ) : null}
      </DesignBox>
      <CacheManager categories={[`${category}`]} />
    </DesignBox>
  )
}

const styles: {
  [key: string]: CSSProperties | undefined
} = {
  main: {
    flexDirection: 'column',
    marginTop: 4,
  },
  elementSection: {
    flexDirection: 'column',
    margin: 10,
    padding: 10,
    flex: 1,
  },
  resourceSection: {
    flexDirection: 'column',
    padding: 10,
    margin: 10,
    flex: 1,
  },
  header: {
    marginTop: 2,
  },
}
