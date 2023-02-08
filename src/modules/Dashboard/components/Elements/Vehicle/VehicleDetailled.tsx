import { CSSProperties } from 'react'
import { VehicleType } from '../../../stores/types/VehicleType'
import ListElement from '../ListElement'

export default function VehicleDetailled({ vehicle, style }: { vehicle: VehicleType; style?: CSSProperties }) {
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
  return <ListElement id={vehicle.name} />
}
