import { CSSProperties } from 'react'
import DesignHeader from '../../../design-system/DesignText/DesignHeader'
import { useAppSelector } from '../../../store/hooks'
import { color } from '../../../theme/color'
import { selectResources } from '../stores/resourceSlice'
import { ElementsCategory } from '../stores/types/CategoryType'
import CacheManager from './CacheManager'
import ElementsList from './ElementsList'

export default function CategoryPanel({ category, style }: { category: ElementsCategory; style?: CSSProperties }) {
  // =================
  // Stores
  // =================
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
      <div style={styles.resourceSection}>
        {resources[`${category}`].length ? (
          <>
            <DesignHeader style={styles.header} color={color.white}>
              {'My resources'}
            </DesignHeader>
            <ElementsList style={styles.cardContainer} category={category} isResourceList />
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
  resourceSection: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    margin: 10,
  },
  header: {
    marginTop: 2,
  },
}
