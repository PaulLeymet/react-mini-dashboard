import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { List } from '@mui/material'
import { CSSProperties } from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { getApi } from '../../../utils/api'
import { AuthGenericType, DashboardCategory, selectDashboard, updateData } from '../stores/dashboardSlice'
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

export default function DashboardList({ category, style }: { category: DashboardCategory; style?: CSSProperties }) {
  // =================
  // Stores
  // =================
  const dashboard = useAppSelector(selectDashboard)
  const dispatch = useAppDispatch()

  // =================
  // States
  // =================
  const getElements = (): AuthGenericType | null => {
    switch (category) {
      case 'film':
        return dashboard.films
      case 'people':
        return dashboard.people
      case 'planets':
        return dashboard.planets
      case 'species':
        return dashboard.species
      case 'starships':
        return dashboard.starships
      case 'vehicles':
        return dashboard.vehicles
      default:
        return null
    }
  }
  const peopleData = getElements()
  const canBack = !!peopleData?.previous
  const canForward = !!peopleData?.next

  // =================
  // Hooks
  // =================

  // =================
  // Methods
  // =================

  const onBack = async () => {
    if (peopleData?.previous) {
      const { data } = await getApi(peopleData.previous)
      dispatch(updateData({ category, data }))
    }
  }

  const onForward = async () => {
    if (peopleData?.next) {
      const { data } = await getApi(peopleData.next)
      dispatch(updateData({ category, data }))
    }
  }

  // =================
  // Render
  // =================
  const renderElement = (data: any) => {
    switch (category) {
      case 'film':
        return <Film key={data.name} film={data as FilmType} />
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
      <ArrowBackIosIcon style={{ ...styles.chevron, ...(canBack ? null : styles.inactive) }} onClick={onBack} />
      <List sx={styles.component} subheader={<li />}>
        {peopleData?.results?.map((element: any) => {
          return renderElement(element)
        })}
      </List>
      <ArrowForwardIosIcon style={{ ...styles.chevron, ...(canForward ? null : styles.inactive) }} onClick={onForward} />
    </div>
  )
}

const styles: {
  [key: string]: CSSProperties | undefined
} = {
  component: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  chevron: {
    cursor: 'pointer',
  },
  inactive: {
    opacity: 0.2,
    cursor: 'auto',
  },
}
