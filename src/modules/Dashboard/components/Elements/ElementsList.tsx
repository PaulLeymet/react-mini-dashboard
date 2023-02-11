import { CSSProperties } from 'react'
import DesignSlick from '../../../../design-system/DesignSlick/DesignSlick'
import DesignSpinner from '../../../../design-system/DesignSpinner/DesignSpinner'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { color } from '../../../../theme/color'
import { selectElements } from '../../stores/elementSlice'
import { selectRessources } from '../../stores/ressourceSlice'
import { ElementsCategory } from '../../stores/types/CategoryType'
import { FilmType } from '../../stores/types/FilmType'
import { PeopleType } from '../../stores/types/PeopleType'
import { PlanetType } from '../../stores/types/PlanetType'
import { SpecieType } from '../../stores/types/SpecieType'
import { StarshipType } from '../../stores/types/StarshipType'
import { VehicleType } from '../../stores/types/VehicleType'
import Film from './Film/Film'
import People from './People/People'
import Planet from './Planet/Planet'
import Specie from './Specie/Specie'
import Starship from './Starship/Starship'
import Vehicle from './Vehicle/Vehicle'

export default function ElementsList({
  category,
  style,
  isRessourceList,
}: {
  category: ElementsCategory
  style?: CSSProperties
  isRessourceList?: boolean
}) {
  // =================
  // Stores
  // =================
  const dashboard = useAppSelector(selectElements)
  const ressources = useAppSelector(selectRessources)
  const dispatch = useAppDispatch()

  // =================
  // States
  // =================
  const elements = isRessourceList ? ressources[`${category}`] : dashboard[`${category}`].elements

  // =================
  // Hooks
  // =================

  // =================
  // Methods
  // =================

  // =================
  // Render
  // =================
  const renderElement = (data: any, index: number) => {
    switch (category) {
      case 'films':
        return <Film key={data.title} film={data as FilmType} isRessource={isRessourceList} />
      case 'people':
        return <People key={data.name} people={data as PeopleType} isRessource={isRessourceList} />
      case 'planets':
        return <Planet key={data.name} planet={data as PlanetType} isRessource={isRessourceList} />
      case 'species':
        return <Specie key={data.name} specie={data as SpecieType} isRessource={isRessourceList} />
      case 'starships':
        return <Starship key={data.name} starship={data as StarshipType} isRessource={isRessourceList} />
      case 'vehicles':
        return <Vehicle key={data.name} vehicle={data as VehicleType} isRessource={isRessourceList} />
      default:
        return <></>
    }
  }

  return (
    <div style={styles.main}>
      {elements?.length ? (
        <DesignSlick data={elements} renderElement={renderElement} />
      ) : (
        <div style={styles.spinnerContainer}>
          <DesignSpinner size={60} color={color.white} />
        </div>
      )}
    </div>
  )
}

const styles: {
  [key: string]: CSSProperties | undefined
} = {
  main: {
    display: 'flex',
    flexGrow: 1,
    margin: 10,
    padding: 10,
    flexDirection: 'column',
  },
  spinnerContainer: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
}
