import { List } from '@mui/material'
import { CSSProperties } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { selectRessources } from '../../stores/ressourceSlice'
import { ElementsCategory } from '../../stores/types/CategoryType'
import { FilmType } from '../../stores/types/FilmType'
import { PeopleType } from '../../stores/types/PeopleType'
import { PlanetType } from '../../stores/types/PlanetType'
import { SpecieType } from '../../stores/types/SpecieType'
import { StarshipType } from '../../stores/types/StarshipType'
import { VehicleType } from '../../stores/types/VehicleType'
import Film from '../Elements/Film/Film'
import People from '../Elements/People/People'
import Planet from '../Elements/Planet/Planet'
import Specie from '../Elements/Specie/Specie'
import Starship from '../Elements/Starship/Starship'
import Vehicle from '../Elements/Vehicle/Vehicle'

export default function RessourcesList({ category, style }: { category: ElementsCategory; style?: CSSProperties }) {
  // =================
  // Stores
  // =================
  const ressources = useAppSelector(selectRessources)
  const dispatch = useAppDispatch()

  // =================
  // States
  // =================
  const getElements = (): any[] => {
    switch (category) {
      case 'film':
        return ressources.films
      case 'people':
        return ressources.people
      case 'planets':
        return ressources.planets
      case 'species':
        return ressources.species
      case 'starships':
        return ressources.starships
      case 'vehicles':
        return ressources.vehicles
      default:
        return []
    }
  }
  const data = getElements()

  // =================
  // Hooks
  // =================

  // =================
  // Methods
  // =================

  // =================
  // Render
  // =================
  const renderElement = (data: any) => {
    switch (category) {
      case 'film':
        return <Film key={data.title} film={data as FilmType} />
      case 'people':
        return <People key={data.name} people={data as PeopleType} />
      case 'planets':
        return <Planet key={data.name} planet={data as PlanetType} />
      case 'species':
        return <Specie key={data.name} specie={data as SpecieType} />
      case 'starships':
        return <Starship key={data.name} starship={data as StarshipType} />
      case 'vehicles':
        return <Vehicle key={data.name} vehicle={data as VehicleType} />
      default:
        break
    }
  }

  return (
    <div style={{ ...styles.component, ...style }}>
      <div style={styles.content}>
        <List sx={styles.list} subheader={<li />}>
          {data?.map((element: any) => {
            return renderElement(element)
          })}
        </List>
      </div>
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
    margin: 30,
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: 0,
  },
}
