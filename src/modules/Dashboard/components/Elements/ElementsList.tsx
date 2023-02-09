import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Grid, List } from '@mui/material'
import { CSSProperties, useState } from 'react'
import DesignSpinner from '../../../../design-system/DesignSpinner/DesignSpinner'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { color } from '../../../../theme/color'
import { ILLUSTRATIONS } from '../../../../theme/illustrations'
import { getApi } from '../../../../utils/api'
import { selectElements, updateData } from '../../stores/elementSlice'
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
  const getElements = (): any => {
    switch (category) {
      case 'film':
        return isRessourceList ? ressources.films : dashboard.films
      case 'people':
        return isRessourceList ? ressources.people : dashboard.people
      case 'planets':
        return isRessourceList ? ressources.planets : dashboard.planets
      case 'species':
        return isRessourceList ? ressources.species : dashboard.species
      case 'starships':
        return isRessourceList ? ressources.starships : dashboard.starships
      case 'vehicles':
        return isRessourceList ? ressources.vehicles : dashboard.vehicles
      default:
        return null
    }
  }
  const elements = getElements()
  const elementsList = isRessourceList ? elements : elements.results
  const canBack = !isRessourceList && !!elements?.previous
  const canForward = !isRessourceList && !!elements?.next
  const [fetching, setFetching] = useState<'FORWARD' | 'BACKWARD' | 'NONE'>('NONE')

  // =================
  // Hooks
  // =================

  // =================
  // Methods
  // =================

  const onBack = async () => {
    if (elements?.previous) {
      setFetching('BACKWARD')
      const { data } = await getApi(elements.previous)
      dispatch(updateData({ category, data }))
      setFetching('NONE')
    }
  }

  const onForward = async () => {
    if (elements?.next) {
      setFetching('FORWARD')
      const { data } = await getApi(elements.next)
      dispatch(updateData({ category, data }))
      setFetching('NONE')
    }
  }

  // =================
  // Render
  // =================
  const renderElement = (data: any) => {
    switch (category) {
      case 'film':
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
        break
    }
  }

  const renderBackground = () => {
    switch (category) {
      case 'film':
        return ILLUSTRATIONS.films
      case 'people':
        return ILLUSTRATIONS.people
      case 'planets':
        return ILLUSTRATIONS.planets
      case 'species':
        return ILLUSTRATIONS.species
      case 'starships':
        return ILLUSTRATIONS.starships
      case 'vehicles':
        return ILLUSTRATIONS.vehicles
      default:
        break
    }
  }

  return (
    <div style={{ ...styles.component, ...style }}>
      <Grid
        style={{
          ...styles.content,
          ...{
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundImage: `url(${renderBackground()})`,
          },
        }}
        container
        spacing={2}
      >
        {isRessourceList ? null : (
          <Grid style={styles.gridItem} item xs={1}>
            {fetching === 'BACKWARD' ? (
              <DesignSpinner style={styles.spinner} size={30} />
            ) : (
              <ArrowBackIosIcon style={{ ...styles.chevron, ...(canBack ? null : styles.inactive) }} onClick={onBack} />
            )}
          </Grid>
        )}

        <Grid style={styles.gridItem} item xs={10}>
          <List sx={styles.list}>
            {elementsList?.map((element: any) => {
              return renderElement(element)
            })}
          </List>
        </Grid>

        {isRessourceList ? null : (
          <Grid style={styles.gridItem} item xs={1}>
            {fetching === 'FORWARD' ? (
              <DesignSpinner style={styles.spinner} size={30} />
            ) : (
              <ArrowForwardIosIcon style={{ ...styles.chevron, ...(canForward ? null : styles.inactive) }} onClick={onForward} />
            )}
          </Grid>
        )}
      </Grid>
    </div>
  )
}

const styles: {
  [key: string]: CSSProperties | undefined
} = {
  component: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  content: {
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    background: color.black,
    margin: 0,
  },
  gridItem: {
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: 0,
  },
  chevron: {
    cursor: 'pointer',
    width: 30,
    height: 30,
    color: color.white,
  },
  spinner: {
    width: 30,
    height: 30,
    color: color.white,
  },
  inactive: {
    opacity: 0.2,
    cursor: 'auto',
  },
}
