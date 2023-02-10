import { CSSProperties } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks'
import { selectElements } from '../../../stores/elementSlice'
import { addRessource, removeRessource, selectRessources } from '../../../stores/ressourceSlice'
import { FilmType } from '../../../stores/types/FilmType'
import Element from '../Element'

export default function Film({ film, style, isRessource }: { film: FilmType; style?: CSSProperties; isRessource?: boolean }) {
  // =================
  // Stores
  // =================
  const dispatch = useAppDispatch()
  const ressources = useAppSelector(selectRessources)
  const elements = useAppSelector(selectElements)

  // =================
  // States
  // =================
  const selected = ressources.films.some((e) => e.title === film.title)

  // =================
  // Hooks
  // =================
  const navigate = useNavigate()

  // =================
  // Methods
  // =================
  const onShowDetail = () => {
    if (isRessource) navigate('/ressource/film/' + ressources.films.findIndex((e) => e.title === film.title))
    else navigate('/film/' + elements.films.elements.findIndex((e) => e.title === film.title))
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
