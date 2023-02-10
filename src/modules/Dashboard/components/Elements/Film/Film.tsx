import { CSSProperties } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks'
import { displayInModal } from '../../../stores/modalSlice'
import { addRessource, removeRessource, selectRessources } from '../../../stores/ressourceSlice'
import { FilmType } from '../../../stores/types/FilmType'
import Element from '../Element'

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
    dispatch(
      displayInModal({
        id: film.title,
        category: 'films',
        url: film.url,
      }),
    )
  }

  const onAddRessource = () => {
    if (selected) {
      dispatch(
        removeRessource({
          category: 'films',
          ressource: film,
        }),
      )
    } else {
      dispatch(
        addRessource({
          category: 'films',
          ressource: film,
        }),
      )
    }
  }

  // =================
  // Render
  // =================
  return <Element selected={selected} isRessource={isRessource} id={film.title} onShow={onShowDetail} onAdd={onAddRessource} />
}
