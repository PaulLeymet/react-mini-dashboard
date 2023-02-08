import { CSSProperties } from 'react'
import { SpecieType } from '../stores/types/SpecieType'
import ListElement from './ListElement'

export default function Specie({ specie, style }: { specie: SpecieType; style?: CSSProperties }) {
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
  return <ListElement label={specie.name} />
}
