import { CSSProperties, useEffect } from 'react'
import { useAppDispatch } from '../../store/hooks'
import { color } from '../../theme/color'
import { getApi } from '../../utils/api'
import DashboardList from './components/DashboardList'
import { AuthGenericType, updateData } from './stores/dashboardSlice'

export default function Dashboard() {
  // =================
  // Stores
  // =================
  const dispatch = useAppDispatch()

  // =================
  // States
  // =================

  // =================
  // Hooks
  // =================
  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // =================
  // Methods
  // =================
  const fetchData = async () => {
    const { status, data } = await getApi(`https://swapi.dev/api/`)

    if (status !== 200) {
      console.log('ERROR', status)
    } else {
      const promiseFilms = getApi(data.films)
      const promisePeople = getApi(data.people)
      const promisePlanets = getApi(data.planets)
      const promiseSpecies = getApi(data.species)
      const promiseStarships = getApi(data.starships)
      const promiseVehicles = getApi(data.vehicles)

      Promise.all([promiseFilms, promisePeople, promisePlanets, promiseSpecies, promiseStarships, promiseVehicles]).then((values) => {
        dispatch(updateData({ category: 'film', data: values[0].data as AuthGenericType }))
        dispatch(updateData({ category: 'people', data: values[1].data as AuthGenericType }))
        dispatch(updateData({ category: 'planets', data: values[2].data as AuthGenericType }))
        dispatch(updateData({ category: 'species', data: values[3].data as AuthGenericType }))
        dispatch(updateData({ category: 'starships', data: values[4].data as AuthGenericType }))
        dispatch(updateData({ category: 'vehicles', data: values[5].data as AuthGenericType }))
      })
    }
  }

  // =================
  // Render
  // =================
  return (
    <div style={styles.page}>
      <DashboardList style={styles.cardContainer} category="film" />
      <DashboardList style={styles.cardContainer} category="people" />
      <DashboardList style={styles.cardContainer} category="planets" />
      <DashboardList style={styles.cardContainer} category="species" />
      <DashboardList style={styles.cardContainer} category="starships" />
      <DashboardList style={styles.cardContainer} category="vehicles" />
    </div>
  )
}

const styles: {
  [key: string]: CSSProperties | undefined
} = {
  page: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  cardContainer: {
    background: color.secondary,
    padding: 30,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 10,
  },
}
