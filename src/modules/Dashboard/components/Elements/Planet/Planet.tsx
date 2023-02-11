import { CSSProperties } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks'
import { selectElements } from '../../../stores/elementSlice'
import { addRessource, removeRessource, selectResources } from '../../../stores/resourceSlice'
import { PlanetType } from '../../../stores/types/PlanetType'
import Element from '../Element'

export default function Planet({ planet, style, isRessource }: { planet: PlanetType; style?: CSSProperties; isRessource?: boolean }) {
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
    if (isRessource) navigate('/ressource/planet/' + resources.planets.findIndex((e) => e.name === planet.name))
    else navigate('/planet/' + elements.planets.elements.findIndex((e) => e.name === planet.name))
  }

  const onAddRessource = () => {
    if (selected) {
      dispatch(
        removeRessource({
          category: 'planets',
          ressource: planet,
        }),
      )
    } else {
      dispatch(
        addRessource({
          category: 'planets',
          ressource: planet,
        }),
      )
    }
  }

  // =================
  // Render
  // =================
  return <Element selected={selected} isRessource={isRessource} id={planet.name} onShow={onShowDetail} onAdd={onAddRessource} />
}
