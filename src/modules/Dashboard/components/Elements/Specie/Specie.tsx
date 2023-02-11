import { CSSProperties } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks'
import { selectElements } from '../../../stores/elementSlice'
import { addRessource, removeRessource, selectResources } from '../../../stores/resourceSlice'
import { SpecieType } from '../../../stores/types/SpecieType'
import Element from '../Element'

export default function Specie({ specie, style, isRessource }: { specie: SpecieType; style?: CSSProperties; isRessource?: boolean }) {
  // =================
  // Stores
  // =================
  const dispatch = useAppDispatch()
  const resources = useAppSelector(selectResources)
  const elements = useAppSelector(selectElements)

  // =================
  // States
  // =================
  const selected = resources.species.some((e) => e.name === specie.name)

  // =================
  // Hooks
  // =================
  const navigate = useNavigate()

  // =================
  // Methods
  // =================
  const onShowDetail = () => {
    if (isRessource) navigate('/ressource/specie/' + resources.species.findIndex((e) => e.name === specie.name))
    else navigate('/specie/' + elements.species.elements.findIndex((e) => e.name === specie.name))
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
