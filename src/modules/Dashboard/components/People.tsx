import { PeopleType } from '../stores/types/PeopleType'
import ListElement from './ListElement'

export default function People({ people }: { people: PeopleType }) {
  // =================
  // Stores
  // =================

  // =================
  // States
  // =================

  // =================
  // Hooks
  // =================

  // =================
  // Methods
  // =================

  // =================
  // Render
  // =================
  return <ListElement label={people.name} />
}
