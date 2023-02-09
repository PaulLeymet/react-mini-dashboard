import { CSSProperties } from 'react'
import { FilmType } from '../../../stores/types/FilmType'

export default function FilmDetailled({ film, style, isRessource }: { film: FilmType; style?: CSSProperties; isRessource?: boolean }) {
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
  console.log('TEST', film)

  // =================
  // Render
  // =================
  return <div style={styles.main}></div>
}

const styles: {
  [key: string]: CSSProperties | undefined
} = {
  main: {
    width: '100%',
    height: '100%',
    display: 'flex',
  },
}
