import { CSSProperties } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { selectElements } from '../stores/elementSlice'
import { addResource, removeResource, selectResources } from '../stores/resourceSlice'
import { FilmType } from '../stores/types/FilmType'
import Element from './Element'

export default function Film({ film, style, isResource }: { film: FilmType; style?: CSSProperties; isResource?: boolean }) {
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
    if (isResource) navigate('/resource/film/' + resources.films.findIndex((e) => e.title === film.title))
    else navigate('/film/' + elements.films.elements.findIndex((e) => e.title === film.title))
  }

  const onAddResource = () => {
    if (selected) {
      dispatch(
        removeResource({
          category: 'films',
          resource: film,
        }),
      )
    } else {
      dispatch(
        addResource({
          category: 'films',
          resource: film,
        }),
      )
    }
  }

  // =================
  // Render
  // =================
  return <Element selected={selected} isResource={isResource} id={film.title} onShow={onShowDetail} onAdd={onAddResource} />
}
