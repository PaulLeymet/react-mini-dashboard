import { CSSProperties } from 'react'
import { useAppDispatch } from '../../../../../store/hooks'
import { displayInModal } from '../../../stores/modalSlice'
import { FilmType } from '../../../stores/types/FilmType'
import ListElement from '../ListElement'
import FilmDetailled from './FilmDetailled'

export default function Film({ film, style }: { film: FilmType; style?: CSSProperties }) {
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
    dispatch(displayInModal(<FilmDetailled film={film} />))
  }

  const onAddRessource = () => {}

  // =================
  // Render
  // =================
  return <ListElement id={film.title} onShow={onShowDetail} onAdd={onAddRessource} />
}
