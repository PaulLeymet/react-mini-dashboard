import { CSSProperties } from 'react'
import { FilmType } from '../stores/types/FilmType'
import ListElement from './ListElement'

export default function Film({ film, style }: { film: FilmType; style?: CSSProperties }) {
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
  return <ListElement label={film.title} />
}
