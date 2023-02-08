import { CSSProperties } from 'react'
import { StarshipType } from '../../../stores/types/StarshipType'
import ListElement from '../ListElement'

export default function StarshipDetailled({ starship, style }: { starship: StarshipType; style?: CSSProperties }) {
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
  return <ListElement id={starship.name} />
}
