import { CSSProperties } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks'
import { displayInModal } from '../../../stores/modalSlice'
import { addRessource, removeRessource, selectRessources } from '../../../stores/ressourceSlice'
import { StarshipType } from '../../../stores/types/StarshipType'
import Element from '../Element'
import StarshipDetailled from './StarshipDetailled'

export default function Starship({ starship, style, isRessource }: { starship: StarshipType; style?: CSSProperties; isRessource?: boolean }) {
  // =================
  // Stores
  // =================
  const dispatch = useAppDispatch()
  const ressources = useAppSelector(selectRessources)

  // =================
  // States
  // =================
  const selected = ressources.starships.some((e) => e.name === starship.name)

  // =================
  // Hooks
  // =================

  // =================
  // Methods
  // =================
  const onShowDetail = () => {
    dispatch(displayInModal(<StarshipDetailled starship={starship} />))
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
