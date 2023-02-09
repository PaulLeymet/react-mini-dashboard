import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Grid, List } from '@mui/material'
import { CSSProperties, useState } from 'react'
import DesignSpinner from '../../../../design-system/DesignSpinner/DesignSpinner'
import DesignHeader from '../../../../design-system/DesignText/DesignHeader'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { color } from '../../../../theme/color'
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

  return (
    <Grid style={styles.main} container spacing={4}>
      <Grid style={styles.leftContainer} item xs={4}>
        {isRessourceList ? null : fetching === 'BACKWARD' ? (
          <DesignSpinner style={styles.spinner} size={30} />
        ) : (
          <ArrowBackIosIcon style={{ ...styles.chevron, ...(canBack ? null : styles.inactive) }} onClick={onBack} />
        )}
      </Grid>

      <Grid style={styles.middleContainer} item xs={4}>
        <DesignHeader color={color.white} style={styles.header}>
          {isRessourceList ? 'Ressources' : 'Elements'}
        </DesignHeader>
        <List sx={{ ...styles.list, ...style }}>
          {elementsList?.map((element: any) => {
            return renderElement(element)
          })}
        </List>
      </Grid>

      <Grid style={styles.rightContainer} item xs={4}>
        {isRessourceList ? null : fetching === 'FORWARD' ? (
          <DesignSpinner style={styles.spinner} size={30} />
        ) : (
          <ArrowForwardIosIcon style={{ ...styles.chevron, ...(canForward ? null : styles.inactive) }} onClick={onForward} />
        )}
      </Grid>
    </Grid>
  )
}

const styles: {
  [key: string]: CSSProperties | undefined
} = {
  main: {
    display: 'flex',
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
  },
  leftContainer: {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 0,
    padding: 0,
  },
  middleContainer: {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: 0,
    background: color.white + '50',
    borderRadius: 10,
    border: `2px solid ${color.white + '80'}`,
    padding: '10px 15px',
    backdropFilter: 'blur(3px)',
    minWidth: 170,
  },
  rightContainer: {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 0,
    padding: 0,
  },
  list: {
    display: 'flex',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 5,
  },
  chevron: {
    cursor: 'pointer',
    width: 30,
    height: 30,
    color: color.white,
    margin: '10px',
  },
  spinner: {
    width: 30,
    height: 30,
    color: color.white,
    margin: '10px',
  },
  inactive: {
    opacity: 0.2,
    cursor: 'auto',
  },
}
