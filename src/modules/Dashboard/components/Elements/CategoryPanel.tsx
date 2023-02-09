import { CSSProperties } from 'react'
import DesignHeader from '../../../../design-system/DesignText/DesignHeader'
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

  // =================
  // Render
  // =================
  return (
    <div style={{ ...styles.main, ...style }}>
      <div style={styles.sectionLeft}>
        <DesignHeader style={styles.header}>Ressources</DesignHeader>
        <ElementsList style={styles.cardContainer} category={category} isRessourceList />
      </div>
      <div style={styles.sectionRight}>
        <DesignHeader style={styles.header}>Elements</DesignHeader>
        <ElementsList style={styles.cardContainer} category={category} />
      </div>
    </div>
  )
}

const styles: {
  [key: string]: CSSProperties | undefined
} = {
  main: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  sectionLeft: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  sectionRight: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
}
