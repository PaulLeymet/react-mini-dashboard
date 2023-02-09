import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import { CSSProperties, useState } from 'react'
import DesignText from '../DesignText/DesignText'

export default function DesignAccordion({ content, style }: { content: { label: string; content: JSX.Element }[]; style?: CSSProperties }) {
  const [expanded, setExpanded] = useState<string | false>(false)

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  const styles: {
    [key: string]: CSSProperties | undefined
  } = {
    main: {},
    details: {
      display: 'flex',
      flex: 1,
    },
  }

  return (
    <div style={{ ...styles.main, ...style }}>
      {content.map((accordion, index) => (
        <Accordion expanded={expanded === `panel${index + 1}`} onChange={handleChange(`panel${index + 1}`)}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index + 1}bh-content`} id={`panel${index + 1}bh-header`}>
            <DesignText>{accordion.label}</DesignText>
          </AccordionSummary>
          <AccordionDetails style={styles.details}>{accordion.content}</AccordionDetails>
        </Accordion>
      ))}
    </div>
  )
}
