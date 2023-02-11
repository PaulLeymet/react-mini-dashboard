import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks'
import { selectElements } from '../../../stores/elementSlice'
import { addRessource, removeRessource, selectResources } from '../../../stores/resourceSlice'
import { PeopleType } from '../../../stores/types/PeopleType'
import Element from '../Element'

export default function People({ people, isRessource }: { people: PeopleType; isRessource?: boolean }) {
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
    if (isRessource) navigate('/ressource/people/' + resources.people.findIndex((e) => e.name === people.name))
    else navigate('/people/' + elements.people.elements.findIndex((e) => e.name === people.name))
  }

  const onAddRessource = () => {
    if (selected) {
      dispatch(
        removeRessource({
          category: 'people',
          ressource: people,
        }),
      )
    } else {
      dispatch(
        addRessource({
          category: 'people',
          ressource: people,
        }),
      )
    }
  }

  // =================
  // Render
  // =================
  return <Element selected={selected} isRessource={isRessource} id={people.name} onShow={onShowDetail} onAdd={onAddRessource} />
}
