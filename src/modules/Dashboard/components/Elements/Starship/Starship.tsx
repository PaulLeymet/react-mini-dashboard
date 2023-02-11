import { CSSProperties } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks'
import { selectElements } from '../../../stores/elementSlice'
import { addRessource, removeRessource, selectResources } from '../../../stores/resourceSlice'
import { StarshipType } from '../../../stores/types/StarshipType'
import Element from '../Element'

export default function Starship({ starship, style, isRessource }: { starship: StarshipType; style?: CSSProperties; isRessource?: boolean }) {
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
    if (isRessource) navigate('/ressource/starship/' + resources.starships.findIndex((e) => e.name === starship.name))
    else navigate('/starship/' + elements.starships.elements.findIndex((e) => e.name === starship.name))
  }

  const onAddRessource = () => {
    if (selected) {
      dispatch(
        removeRessource({
          category: 'starships',
          ressource: starship,
        }),
      )
    } else {
      dispatch(
        addRessource({
          category: 'starships',
          ressource: starship,
        }),
      )
    }
  }

  // =================
  // Render
  // =================
  return <Element selected={selected} isRessource={isRessource} id={starship.name} onShow={onShowDetail} onAdd={onAddRessource} />
}
