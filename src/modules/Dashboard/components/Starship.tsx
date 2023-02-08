import { CSSProperties } from 'react'
import { StarshipType } from '../stores/types/StarshipType'
import ListElement from './ListElement'

export default function Starship({ starship, style }: { starship: StarshipType; style?: CSSProperties }) {
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
  return <ListElement label={starship.name} />
}
