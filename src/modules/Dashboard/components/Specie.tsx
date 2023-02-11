import { CSSProperties } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { selectElements } from '../stores/elementSlice'
import { addResource, removeResource, selectResources } from '../stores/resourceSlice'
import { SpecieType } from '../stores/types/SpecieType'
import Element from './Element'

export default function Specie({ specie, style, isResource }: { specie: SpecieType; style?: CSSProperties; isResource?: boolean }) {
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
    if (isResource) navigate('/resource/specie/' + resources.species.findIndex((e) => e.name === specie.name))
    else navigate('/specie/' + elements.species.elements.findIndex((e) => e.name === specie.name))
  }

  const onAddResource = () => {
    if (selected) {
      dispatch(
        removeResource({
          category: 'species',
          resource: specie,
        }),
      )
    } else {
      dispatch(
        addResource({
          category: 'species',
          resource: specie,
        }),
      )
    }
  }

  // =================
  // Render
  // =================
  return <Element selected={selected} isResource={isResource} id={specie.name} onShow={onShowDetail} onAdd={onAddResource} />
}
