import { CSSProperties } from 'react'
import DesignHeader from '../../design-system/DesignText/DesignHeader'
import DesignText from '../../design-system/DesignText/DesignText'
import { color } from '../../theme/color'
import { ILLUSTRATIONS } from '../../theme/illustrations'

export default function FallbackPage() {
  // =================
  // Render
  // =================
  return (
    <div style={styles.page}>
      <DesignHeader variant="h2" color={color.white}>{`Wrong page`}</DesignHeader>
      <DesignText variant="h6" color={color.white}>{`You lost your way young Jedi !`}</DesignText>
    </div>
  )
}

const styles: {
  [key: string]: CSSProperties | undefined
} = {
  page: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: color.black,
    backgroundImage: `url(${ILLUSTRATIONS.people})`,
    backgroundSize: 'cover',
  },
}
