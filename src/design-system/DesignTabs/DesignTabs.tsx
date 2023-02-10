import { TabContext, TabPanel } from '@mui/lab'
import { Tab, Tabs } from '@mui/material'
import { CSSProperties, useState } from 'react'

export default function DesignTabs({ tabs, style }: { tabs: { label: string; content: JSX.Element }[]; style?: CSSProperties }) {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent<Element, Event>, value: any) => {
    setValue(value)
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
    },
    tab: {
      width: `${100 / tabs.length}%`,
    },
    tabPanel: {
      display: 'flex',
      padding: 0,
      flexGrow: 1,
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
            <Tab style={styles.tab} key={`${index}`} label={tab.label} />
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
