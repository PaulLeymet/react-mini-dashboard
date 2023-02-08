import { CSSProperties } from 'react'
import { useAppDispatch } from '../../../../../store/hooks'
import { displayInModal } from '../../../stores/modalSlice'
import { StarshipType } from '../../../stores/types/StarshipType'
import ListElement from '../ListElement'
import StarshipDetailled from './StarshipDetailled'

export default function Starship({ starship, style }: { starship: StarshipType; style?: CSSProperties }) {
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
    dispatch(displayInModal(<StarshipDetailled starship={starship} />))
  }

  const onAddRessource = () => {}

  // =================
  // Render
  // =================
  return <ListElement id={starship.name} onShow={onShowDetail} onAdd={onAddRessource} />
}
