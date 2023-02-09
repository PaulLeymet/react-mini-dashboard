import { useAppDispatch, useAppSelector } from '../../../../../store/hooks'
import { displayInModal } from '../../../stores/modalSlice'
import { addRessource, removeRessource, selectRessources } from '../../../stores/ressourceSlice'
import { PeopleType } from '../../../stores/types/PeopleType'
import Element from '../Element'

export default function People({ people, isRessource }: { people: PeopleType; isRessource?: boolean }) {
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
    dispatch(
      displayInModal({
        id: people.name,
        category: 'people',
        url: people.url,
      }),
    )
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
