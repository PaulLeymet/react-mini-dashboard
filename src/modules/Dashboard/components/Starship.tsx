import { CSSProperties } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { selectElements } from '../stores/elementSlice'
import { addResource, removeResource, selectResources } from '../stores/resourceSlice'
import { StarshipType } from '../stores/types/StarshipType'
import Element from './Element'

export default function Starship({ starship, style, isResource }: { starship: StarshipType; style?: CSSProperties; isResource?: boolean }) {
  // =================
  // Stores
  // =================
  const dispatch = useAppDispatch()
  const resources = useAppSelector(selectResources)
  const elements = useAppSelector(selectElements)

  // =================
  // States
  // =================
  const selected = resources.species.some((e) => e.name === starship.name)

  // =================
  // Hooks
  // =================
  const navigate = useNavigate()

  // =================
  // Methods
  // =================
  const onShowDetail = () => {
    if (isResource) navigate('/resources/starships/' + resources.starships.findIndex((e) => e.name === starship.name))
    else navigate('/starships/' + elements.starships.elements.findIndex((e) => e.name === starship.name))
  }

  const onAddResource = () => {
    if (selected) {
      dispatch(
        removeResource({
          category: 'starships',
          resource: starship,
        }),
      )
    } else {
      dispatch(
        addResource({
          category: 'starships',
          resource: starship,
        }),
      )
    }
  }

  // =================
  // Render
  // =================
  return <Element selected={selected} isResource={isResource} id={starship.name} onShow={onShowDetail} onAdd={onAddResource} />
}
