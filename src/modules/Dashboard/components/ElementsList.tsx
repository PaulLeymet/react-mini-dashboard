import { CSSProperties } from 'react'
import DesignBox from '../../../design-system/DesignBox/DesignBox'
import DesignSlick from '../../../design-system/DesignSlick/DesignSlick'
import DesignSpinner from '../../../design-system/DesignSpinner/DesignSpinner'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { color } from '../../../theme/color'
import { selectElements } from '../stores/elementSlice'
import { selectResources } from '../stores/resourceSlice'
import { ElementsCategory } from '../stores/types/CategoryType'
import { FilmType } from '../stores/types/FilmType'
import { PeopleType } from '../stores/types/PeopleType'
import { PlanetType } from '../stores/types/PlanetType'
import { SpecieType } from '../stores/types/SpecieType'
import { StarshipType } from '../stores/types/StarshipType'
import { VehicleType } from '../stores/types/VehicleType'
import Film from './Film'
import People from './People'
import Planet from './Planet'
import Specie from './Specie'
import Starship from './Starship'
import Vehicle from './Vehicle'

export default function ElementsList({
  category,
  style,
  isResourceList,
}: {
  category: ElementsCategory
  style?: CSSProperties
  isResourceList?: boolean
}) {
  // =================
  // Stores
  // =================
  const dashboard = useAppSelector(selectElements)
  const resources = useAppSelector(selectResources)
  const dispatch = useAppDispatch()

  // =================
  // States
  // =================
  const elements = isResourceList ? resources[`${category}`] : dashboard[`${category}`].elements

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
        return <Film key={data.title} film={data as FilmType} isResource={isResourceList} />
      case 'people':
        return <People key={data.name} people={data as PeopleType} isResource={isResourceList} />
      case 'planets':
        return <Planet key={data.name} planet={data as PlanetType} isResource={isResourceList} />
      case 'species':
        return <Specie key={data.name} specie={data as SpecieType} isResource={isResourceList} />
      case 'starships':
        return <Starship key={data.name} starship={data as StarshipType} isResource={isResourceList} />
      case 'vehicles':
        return <Vehicle key={data.name} vehicle={data as VehicleType} isResource={isResourceList} />
      default:
        return <></>
    }
  }

  return (
    <DesignBox style={styles.main}>
      {elements?.length ? (
        <DesignSlick data={elements} renderElement={renderElement} />
      ) : (
        <DesignBox style={styles.spinnerContainer}>
          <DesignSpinner size={60} color={color.white} />
        </DesignBox>
      )}
    </DesignBox>
  )
}

const styles: {
  [key: string]: CSSProperties | undefined
} = {
  main: {
    margin: 10,
    padding: 10,
    flexDirection: 'column',
  },
  spinnerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
}
