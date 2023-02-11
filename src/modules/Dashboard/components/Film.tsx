import { CSSProperties } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { selectElements } from '../stores/elementSlice'
import { addRessource, removeRessource, selectResources } from '../stores/resourceSlice'
import { FilmType } from '../stores/types/FilmType'
import Element from './Element'

export default function Film({ film, style, isRessource }: { film: FilmType; style?: CSSProperties; isRessource?: boolean }) {
  // =================
  // Stores
  // =================
  const dispatch = useAppDispatch()
  const resources = useAppSelector(selectResources)
  const elements = useAppSelector(selectElements)

  // =================
  // States
  // =================
  const selected = resources.films.some((e) => e.title === film.title)

  // =================
  // Hooks
  // =================
  const navigate = useNavigate()

  // =================
  // Methods
  // =================
  const onShowDetail = () => {
    if (isRessource) navigate('/ressource/film/' + resources.films.findIndex((e) => e.title === film.title))
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
