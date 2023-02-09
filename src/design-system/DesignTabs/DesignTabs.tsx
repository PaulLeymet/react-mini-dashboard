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
      width: '100%',
      height: '100%',
      flexDirection: 'column',
      display: 'flex',
    },
    tabSelector: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
    },
    tab: {
      width: `${100 / 6}%`,
    },
    tabPanel: {
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      padding: 0,
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
        {tabs.map((tab, index) => (
          <TabPanel style={styles.tabPanel} key={`${index}`} value={`${index}`}>
            {tab.content}
          </TabPanel>
        ))}
      </div>
    </TabContext>
  )
}
