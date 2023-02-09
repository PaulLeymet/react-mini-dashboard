import { CSSProperties } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks'
import { displayInModal } from '../../../stores/modalSlice'
import { addRessource, removeRessource, selectRessources } from '../../../stores/ressourceSlice'
import { PlanetType } from '../../../stores/types/PlanetType'
import Element from '../Element'

import PlanetDetailled from './PlanetDetailled'

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
    dispatch(displayInModal(<PlanetDetailled planet={planet} />))
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
  return <Element selected={selected} id={planet.name} onShow={onShowDetail} onAdd={onAddRessource} />
}
