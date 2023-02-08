import { CSSProperties } from 'react'
import { useAppDispatch } from '../../../../../store/hooks'
import { displayInModal } from '../../../stores/modalSlice'
import { VehicleType } from '../../../stores/types/VehicleType'
import ListElement from '../ListElement'
import VehicleDetailled from './VehicleDetailled'

export default function Vehicle({ vehicle, style }: { vehicle: VehicleType; style?: CSSProperties }) {
  // =================
  // Stores
  // =================
  const dispatch = useAppDispatch()

  // =================
  // States
  // =================

  // =================
  // Hooks
  // =================

  // =================
  // Methods
  // =================
  const onShowDetail = () => {
    dispatch(displayInModal(<VehicleDetailled vehicle={vehicle} />))
  }

  const onAddRessource = () => {}

  // =================
  // Render
  // =================
  return <ListElement id={vehicle.name} onShow={onShowDetail} onAdd={onAddRessource} />
}
