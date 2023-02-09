import { CSSProperties } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks'
import { displayInModal } from '../../../stores/modalSlice'
import { addRessource, removeRessource, selectRessources } from '../../../stores/ressourceSlice'
import { PlanetType } from '../../../stores/types/PlanetType'
import Element from '../Element'

export default function Planet({ planet, style, isRessource }: { planet: PlanetType; style?: CSSProperties; isRessource?: boolean }) {
  // =================
  // Stores
  // =================
  const dispatch = useAppDispatch()
  const ressources = useAppSelector(selectRessources)

  // =================
  // States
  // =================
  const selected = ressources.planets.some((e) => e.name === planet.name)

  // =================
  // Hooks
  // =================

  // =================
  // Methods
  // =================
  const onShowDetail = () => {
    dispatch(
      displayInModal({
        id: planet.name,
        category: 'planets',
        url: planet.url,
      }),
    )
  }

  const onAddRessource = () => {
    if (selected) {
      dispatch(
        removeRessource({
          category: 'planets',
          ressource: planet,
        }),
      )
    } else {
      dispatch(
        addRessource({
          category: 'planets',
          ressource: planet,
        }),
      )
    }
  }

  // =================
  // Render
  // =================
  return <Element selected={selected} isRessource={isRessource} id={planet.name} onShow={onShowDetail} onAdd={onAddRessource} />
}
