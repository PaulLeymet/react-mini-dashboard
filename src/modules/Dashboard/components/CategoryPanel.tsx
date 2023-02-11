import { CSSProperties } from 'react'
import DesignBox from '../../../design-system/DesignBox/DesignBox'
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
    <DesignBox
      style={{
        ...styles.main,
        ...style,
      }}
    >
      <DesignBox style={styles.elementSection}>
        <DesignHeader style={styles.header} color={color.white}>
          {'Category elements'}
        </DesignHeader>
        <ElementsList style={styles.cardContainer} category={category} />
      </DesignBox>
      <DesignBox style={styles.resourceSection}>
        {resources[`${category}`].length ? (
          <>
            <DesignHeader style={styles.header} color={color.white}>
              {'My resources'}
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
    flex: 1,
  },
  resourceSection: {
    flexDirection: 'column',
    margin: 10,
    flex: 1,
  },
  header: {
    marginTop: 2,
  },
}
