import { CSSProperties } from 'react'
import DesignPageLink from '../../../design-system/DesignEditable/DesignPageLink'
import DesignTabs from '../../../design-system/DesignTabs/DesignTabs'
import { ElementsCategory } from '../stores/types/CategoryType'

export default function LinksTabs({ tabs }: { tabs: { category: ElementsCategory; label: string; urls: string[] }[] }) {
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
    <DesignTabs
      tabs={tabs.map((tab) => {
        return {
          label: tab.label,
          content: (
            <div style={styles.linkContainer}>
              {tab.urls?.map((url) => (
                <DesignPageLink key={url} style={styles.link} category={tab.category} url={url} />
              ))}
            </div>
          ),
        }
      })}
    />
  )
}

const styles: {
  [key: string]: CSSProperties | undefined
} = {
  linkContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexGrow: 1,
    margin: 20,
  },
  link: {
    margin: '10px',
  },
}
