import { CSSProperties } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks'
import { displayInModal } from '../../../stores/modalSlice'
import { addRessource, removeRessource, selectRessources } from '../../../stores/ressourceSlice'
import { SpecieType } from '../../../stores/types/SpecieType'
import Element from '../Element'

export default function Specie({ specie, style, isRessource }: { specie: SpecieType; style?: CSSProperties; isRessource?: boolean }) {
  // =================
  // Stores
  // =================
  const dispatch = useAppDispatch()
  const ressources = useAppSelector(selectRessources)

  // =================
  // States
  // =================
  const selected = ressources.species.some((e) => e.name === specie.name)

  // =================
  // Hooks
  // =================

  // =================
  // Methods
  // =================
  const onShowDetail = () => {
    dispatch(
      displayInModal({
        id: specie.name,
        category: 'species',
        url: specie.url,
      }),
    )
  }

  const onAddRessource = () => {
    if (selected) {
      dispatch(
        removeRessource({
          category: 'species',
          ressource: specie,
        }),
      )
    } else {
      dispatch(
        addRessource({
          category: 'species',
          ressource: specie,
        }),
      )
    }
  }

  // =================
  // Render
  // =================
  return <Element selected={selected} isRessource={isRessource} id={specie.name} onShow={onShowDetail} onAdd={onAddRessource} />
}
