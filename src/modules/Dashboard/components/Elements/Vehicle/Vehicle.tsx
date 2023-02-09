import { CSSProperties } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks'
import { displayInModal } from '../../../stores/modalSlice'
import { addRessource, removeRessource, selectRessources } from '../../../stores/ressourceSlice'
import { VehicleType } from '../../../stores/types/VehicleType'
import Element from '../Element'
import VehicleDetailled from './VehicleDetailled'

export default function Vehicle({ vehicle, style, isRessource }: { vehicle: VehicleType; style?: CSSProperties; isRessource?: boolean }) {
  // =================
  // Stores
  // =================
  const dispatch = useAppDispatch()
  const ressources = useAppSelector(selectRessources)

  // =================
  // States
  // =================
  const selected = ressources.vehicles.some((e) => e.name === vehicle.name)

  // =================
  // Hooks
  // =================

  // =================
  // Methods
  // =================
  const onShowDetail = () => {
    dispatch(displayInModal(<VehicleDetailled vehicle={vehicle} />))
  }

  const onAddRessource = () => {
    if (selected) {
      dispatch(
        removeRessource({
          category: 'vehicles',
          ressource: vehicle,
        }),
      )
    } else {
      dispatch(
        addRessource({
          category: 'vehicles',
          ressource: vehicle,
        }),
      )
    }
  }

  // =================
  // Render
  // =================
  return <Element selected={selected} isRessource={isRessource} id={vehicle.name} onShow={onShowDetail} onAdd={onAddRessource} />
}
