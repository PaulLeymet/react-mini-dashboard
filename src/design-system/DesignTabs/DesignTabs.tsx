import { TabContext, TabPanel } from '@mui/lab'
import { Tab, Tabs } from '@mui/material'
import { CSSProperties, useState } from 'react'
import { color } from '../../theme/color'

export default function DesignTabs({
  tabs,
  initialIndex,
  style,
  onTabChange,
}: {
  tabs: { label: string; content: JSX.Element }[]
  initialIndex?: number
  style?: CSSProperties
  onTabChange?: (value: number) => void
}) {
  const [value, setValue] = useState(initialIndex || 0)

  console.log('initialIndex', initialIndex)

  const handleChange = (event: React.SyntheticEvent<Element, Event>, value: any) => {
    setValue(value)
    if (onTabChange) onTabChange(value)
  }

  const styles: {
    [key: string]: CSSProperties | undefined
  } = {
    elements: {
      flexDirection: 'column',
      display: 'flex',
      flexGrow: 1,
    },
    tabSelector: {
      display: 'relative',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 0,
      background: color.white + 'C0',
    },
    tab: {
      width: `${100 / tabs.length}%`,
      fontWeight: 'bold',
    },
    tabPanel: {
      display: 'flex',
      padding: 0,
      flexGrow: 1,
    },
    active: {
      color: color.primary,
    },
  }

  return (
    <TabContext value={`${value}`}>
      <div style={{ ...styles.elements, ...style }}>
        <Tabs
          style={styles.tabSelector}
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          {tabs.map((tab, index) => (
            <Tab style={{ ...styles.tab, ...(value === index ? styles.active : null) }} key={`${index}`} label={tab.label} />
          ))}
        </Tabs>
        {tabs.map((tab, index) =>
          value === index ? (
            <TabPanel style={styles.tabPanel} key={`${index}`} value={`${index}`}>
              {tab.content}
            </TabPanel>
          ) : null,
        )}
      </div>
    </TabContext>
  )
}
