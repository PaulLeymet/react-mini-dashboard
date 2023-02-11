import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { selectElements } from '../stores/elementSlice'
import { addResource, removeResource, selectResources } from '../stores/resourceSlice'
import { PeopleType } from '../stores/types/PeopleType'
import Element from './Element'

export default function People({ people, isResource }: { people: PeopleType; isResource?: boolean }) {
  // =================
  // Stores
  // =================
  const dispatch = useAppDispatch()
  const resources = useAppSelector(selectResources)
  const elements = useAppSelector(selectElements)

  // =================
  // States
  // =================
  const selected = resources.people.some((e) => e.name === people.name)

  // =================
  // Hooks
  // =================
  const navigate = useNavigate()

  // =================
  // Methods
  // =================
  const onShowDetail = () => {
    if (isResource) navigate('/resource/people/' + resources.people.findIndex((e) => e.name === people.name))
    else navigate('/people/' + elements.people.elements.findIndex((e) => e.name === people.name))
  }

  const onAddResource = () => {
    if (selected) {
      dispatch(
        removeResource({
          category: 'people',
          resource: people,
        }),
      )
    } else {
      dispatch(
        addResource({
          category: 'people',
          resource: people,
        }),
      )
    }
  }

  // =================
  // Render
  // =================
  return <Element selected={selected} isResource={isResource} id={people.name} onShow={onShowDetail} onAdd={onAddResource} />
}
