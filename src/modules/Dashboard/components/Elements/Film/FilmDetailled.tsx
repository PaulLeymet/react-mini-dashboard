import { CSSProperties } from 'react'
import { FilmType } from '../../../stores/types/FilmType'
import ListElement from '../ListElement'

export default function FilmDetailled({ film, style }: { film: FilmType; style?: CSSProperties }) {
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
  return <ListElement id={film.title} />
}
