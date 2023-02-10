import { TabContext } from '@mui/lab'
import { Tab, Tabs } from '@mui/material'
import { CSSProperties, useState } from 'react'
import { color } from '../../theme/color'

export default function DesignLinkTabs({ tabs, style }: { tabs: { label: string; href: string }[]; style?: CSSProperties }) {
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
    },
    tab: {
      width: `${100 / 6}%`,
      color: color.white,
      borderColor: color.white,
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
        <Tabs style={styles.tabSelector} variant="scrollable" value={value} onChange={handleChange} aria-label="Vertical tabs">
          {tabs.map((tab, index) => (
            <Tab style={styles.tab} key={`${index}`} label={tab.label} href={tab.href} />
          ))}
        </Tabs>
      </div>
    </TabContext>
  )
}
