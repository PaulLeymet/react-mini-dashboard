import { CSSProperties } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { selectElements } from '../stores/elementSlice'
import { addResource, removeResource, selectResources } from '../stores/resourceSlice'
import { PlanetType } from '../stores/types/PlanetType'
import Element from './Element'

export default function Planet({ planet, style, isResource }: { planet: PlanetType; style?: CSSProperties; isResource?: boolean }) {
  // =================
  // Stores
  // =================
  const dispatch = useAppDispatch()
  const resources = useAppSelector(selectResources)
  const elements = useAppSelector(selectElements)

  // =================
  // States
  // =================
  const selected = resources.planets.some((e) => e.name === planet.name)

  // =================
  // Hooks
  // =================
  const navigate = useNavigate()

  // =================
  // Methods
  // =================
  const onShowDetail = () => {
    if (isResource) navigate('/resource/planet/' + resources.planets.findIndex((e) => e.name === planet.name))
    else navigate('/planet/' + elements.planets.elements.findIndex((e) => e.name === planet.name))
  }

  const onAddResource = () => {
    if (selected) {
      dispatch(
        removeResource({
          category: 'planets',
          resource: planet,
        }),
      )
    } else {
      dispatch(
        addResource({
          category: 'planets',
          resource: planet,
        }),
      )
    }
  }

  // =================
  // Render
  // =================
  return <Element selected={selected} isResource={isResource} id={planet.name} onShow={onShowDetail} onAdd={onAddResource} />
}
