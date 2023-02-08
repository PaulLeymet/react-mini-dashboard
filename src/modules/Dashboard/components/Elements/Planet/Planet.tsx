import { CSSProperties } from 'react'
import { useAppDispatch } from '../../../../../store/hooks'
import { displayInModal } from '../../../stores/modalSlice'
import { PlanetType } from '../../../stores/types/PlanetType'
import ListElement from '../ListElement'

import PlanetDetailled from './PlanetDetailled'

export default function Planet({ planet, style }: { planet: PlanetType; style?: CSSProperties }) {
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
    dispatch(displayInModal(<PlanetDetailled planet={planet} />))
  }

  const onAddRessource = () => {}

  // =================
  // Render
  // =================
  return <ListElement id={planet.name} onShow={onShowDetail} onAdd={onAddRessource} />
}
