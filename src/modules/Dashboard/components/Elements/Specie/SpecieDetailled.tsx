import { CSSProperties } from 'react'
import { SpecieType } from '../../../stores/types/SpecieType'
import ListElement from '../ListElement'

export default function SpecieDetailled({ specie, style }: { specie: SpecieType; style?: CSSProperties }) {
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
  return <ListElement id={specie.name} />
}
