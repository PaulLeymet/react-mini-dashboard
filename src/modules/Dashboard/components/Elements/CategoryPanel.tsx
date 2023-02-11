import { CSSProperties } from 'react'
import DesignHeader from '../../../../design-system/DesignText/DesignHeader'
import { useAppSelector } from '../../../../store/hooks'
import { color } from '../../../../theme/color'
import { selectRessources } from '../../stores/ressourceSlice'
import { ElementsCategory } from '../../stores/types/CategoryType'
import CacheManager from './CacheManager'
import ElementsList from './ElementsList'

export default function CategoryPanel({ category, style }: { category: ElementsCategory; style?: CSSProperties }) {
  // =================
  // Stores
  // =================
  const ressources = useAppSelector(selectRessources)

  // =================
  // States
  // =================

  // =================
  // Hooks
  // =================

  // =================
  // Methods
  // =================

  // =================
  // Render
  // =================
  return (
    <div
      style={{
        ...styles.main,
        ...style,
      }}
    >
      <div style={styles.elementSection}>
        <DesignHeader style={styles.header} color={color.white}>
          {'Category elements'}
        </DesignHeader>
        <ElementsList style={styles.cardContainer} category={category} />
      </div>
      <div style={styles.ressourceSection}>
        {ressources[`${category}`].length ? (
          <>
            <DesignHeader style={styles.header} color={color.white}>
              {'My ressources'}
            </DesignHeader>
            <ElementsList style={styles.cardContainer} category={category} isRessourceList />
          </>
        ) : null}
      </div>
      <CacheManager categories={[`${category}`]} />
    </div>
  )
}

const styles: {
  [key: string]: CSSProperties | undefined
} = {
  main: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    marginTop: 4,
  },
  elementSection: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    margin: 10,
  },
  ressourceSection: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    margin: 10,
  },
  header: {
    marginTop: 2,
  },
}
