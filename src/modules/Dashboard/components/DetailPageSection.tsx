import { CSSProperties } from 'react'
import DesignBox from '../../../design-system/DesignBox/DesignBox'
import { color } from '../../../theme/color'

export default function DetailPageSection({ style, children }: { style?: CSSProperties; children: JSX.Element | JSX.Element[] | null }) {
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
  return <DesignBox style={{ ...styles.section, ...style }} children={children} />
}

const styles: {
  [key: string]: CSSProperties | undefined
} = {
  section: {
    flexDirection: 'column',
    border: `1px solid ${color.secondary}`,
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 10,
    padding: 5,
  },
}
