import { CSSProperties } from 'react'
import { PlanetType } from '../../../stores/types/PlanetType'
import ListElement from '../ListElement'

export default function PlanetDetailled({ planet, style }: { planet: PlanetType; style?: CSSProperties }) {
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
  return <ListElement id={planet.name} />
}
