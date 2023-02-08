import { TabContext, TabPanel } from '@mui/lab'
import { Tab, Tabs } from '@mui/material'
import { CSSProperties, useState } from 'react'
import { color } from '../../theme/color'

export default function DesignVerticalTabs({ tabs, style }: { tabs: { label: string; content: JSX.Element }[]; style?: CSSProperties }) {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent<Element, Event>, value: any) => {
    setValue(value)
  }

  return (
    <TabContext value={`${value}`}>
      <div style={{ ...styles.elements, ...style }}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          {tabs.map((tab, index) => (
            <Tab key={`${index}`} label={tab.label} />
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

const styles: {
  [key: string]: CSSProperties | undefined
} = {
  elements: {
    width: '100%',
    flexDirection: 'row',
    display: 'flex',
  },
  cardContainer: {
    background: color.secondary,
    padding: 30,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 10,
  },
  tabPanel: {
    width: '100%',
    overflow: 'hidden',
  },
}
