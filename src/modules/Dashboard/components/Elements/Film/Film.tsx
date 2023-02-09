import { CSSProperties } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks'
import { displayInModal } from '../../../stores/modalSlice'
import { addRessource, removeRessource, selectRessources } from '../../../stores/ressourceSlice'
import { FilmType } from '../../../stores/types/FilmType'
import Element from '../Element'
import FilmDetailled from './FilmDetailled'

export default function Film({ film, style, isRessource }: { film: FilmType; style?: CSSProperties; isRessource?: boolean }) {
  // =================
  // Stores
  // =================
  const dispatch = useAppDispatch()
  const ressources = useAppSelector(selectRessources)

  // =================
  // States
  // =================
  const selected = ressources.films.some((e) => e.title === film.title)

  // =================
  // Hooks
  // =================

  // =================
  // Methods
  // =================
  const onShowDetail = () => {
    dispatch(displayInModal(<FilmDetailled film={film} />))
  }

  const onAddRessource = () => {
    if (selected) {
      dispatch(
        removeRessource({
          category: 'film',
          ressource: film,
        }),
      )
    } else {
      dispatch(
        addRessource({
          category: 'film',
          ressource: film,
        }),
      )
    }
  }

  // =================
  // Render
  // =================
  return <Element selected={selected} id={film.title} onShow={onShowDetail} onAdd={onAddRessource} />
}
