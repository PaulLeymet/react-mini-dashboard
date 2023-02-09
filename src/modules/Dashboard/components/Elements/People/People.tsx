import { useAppDispatch, useAppSelector } from '../../../../../store/hooks'
import { displayInModal } from '../../../stores/modalSlice'
import { addRessource, removeRessource, selectRessources } from '../../../stores/ressourceSlice'
import { PeopleType } from '../../../stores/types/PeopleType'
import Element from '../Element'
import PeopleDetailled from './PeopleDetailled'

export default function People({ people }: { people: PeopleType }) {
  // =================
  // Stores
  // =================
  const dispatch = useAppDispatch()
  const ressources = useAppSelector(selectRessources)

  // =================
  // States
  // =================
  const selected = ressources.people.some((e) => e.name === people.name)

  // =================
  // Hooks
  // =================

  // =================
  // Methods
  // =================
  const onShowDetail = () => {
    dispatch(displayInModal(<PeopleDetailled people={people} />))
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
  return <Element selected={selected} id={people.name} onShow={onShowDetail} onAdd={onAddRessource} />
}
