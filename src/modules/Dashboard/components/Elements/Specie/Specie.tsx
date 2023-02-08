import { CSSProperties } from 'react'
import { useAppDispatch } from '../../../../../store/hooks'
import { displayInModal } from '../../../stores/modalSlice'
import { SpecieType } from '../../../stores/types/SpecieType'
import ListElement from '../ListElement'
import SpecieDetailled from './SpecieDetailled'

export default function Specie({ specie, style }: { specie: SpecieType; style?: CSSProperties }) {
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
    dispatch(displayInModal(<SpecieDetailled specie={specie} />))
  }

  const onAddRessource = () => {}

  // =================
  // Render
  // =================
  return <ListElement id={specie.name} onShow={onShowDetail} onAdd={onAddRessource} />
}
