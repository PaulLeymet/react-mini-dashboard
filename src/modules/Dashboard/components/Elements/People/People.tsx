import { useAppDispatch } from '../../../../../store/hooks'
import { displayInModal } from '../../../stores/modalSlice'
import { PeopleType } from '../../../stores/types/PeopleType'
import ListElement from '../ListElement'
import PeopleDetailled from './PeopleDetailled'

export default function People({ people }: { people: PeopleType }) {
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
    dispatch(displayInModal(<PeopleDetailled people={people} />))
  }

  const onAddRessource = () => {}

  // =================
  // Render
  // =================
  return <ListElement id={people.name} onShow={onShowDetail} onAdd={onAddRessource} />
}
