import { CSSProperties } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { selectElements } from '../stores/elementSlice'
import { addResource, removeResource, selectResources } from '../stores/resourceSlice'
import { VehicleType } from '../stores/types/VehicleType'
import Element from './Element'

export default function Vehicle({ vehicle, style, isResource }: { vehicle: VehicleType; style?: CSSProperties; isResource?: boolean }) {
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
    if (isResource) navigate('/resource/vehicle/' + resources.vehicles.findIndex((e) => e.name === vehicle.name))
    else navigate('/vehicle/' + elements.vehicles.elements.findIndex((e) => e.name === vehicle.name))
  }

  const onAddResource = () => {
    if (selected) {
      dispatch(
        removeResource({
          category: 'vehicles',
          resource: vehicle,
        }),
      )
    } else {
      dispatch(
        addResource({
          category: 'vehicles',
          resource: vehicle,
        }),
      )
    }
  }

  // =================
  // Render
  // =================
  return <Element selected={selected} isResource={isResource} id={vehicle.name} onShow={onShowDetail} onAdd={onAddResource} />
}
