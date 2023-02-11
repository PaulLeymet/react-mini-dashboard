import { CSSProperties } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { selectElements } from '../stores/elementSlice'
import { addRessource, removeRessource, selectResources } from '../stores/resourceSlice'
import { VehicleType } from '../stores/types/VehicleType'
import Element from './Element'

export default function Vehicle({ vehicle, style, isRessource }: { vehicle: VehicleType; style?: CSSProperties; isRessource?: boolean }) {
  // =================
  // Stores
  // =================
  const dispatch = useAppDispatch()
  const resources = useAppSelector(selectResources)
  const elements = useAppSelector(selectElements)

  // =================
  // States
  // =================
  const selected = resources.vehicles.some((e) => e.name === vehicle.name)

  // =================
  // Hooks
  // =================
  const navigate = useNavigate()

  // =================
  // Methods
  // =================
  const onShowDetail = () => {
    if (isRessource) navigate('/ressource/vehicle/' + resources.vehicles.findIndex((e) => e.name === vehicle.name))
    else navigate('/vehicle/' + elements.vehicles.elements.findIndex((e) => e.name === vehicle.name))
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
