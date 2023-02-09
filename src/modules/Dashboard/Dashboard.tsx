import { CSSProperties, useEffect } from 'react'
import DesignVerticalTabs from '../../design-system/DesignVerticalTabs/DesignVerticalTabs'
import { useAppDispatch } from '../../store/hooks'
import { getApi } from '../../utils/api'
import CategoryPanel from './components/Elements/CategoryPanel'
import { AuthGenericType, updateData } from './stores/elementSlice'

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
      <DesignVerticalTabs
        tabs={[
          {
            label: 'Films',
            content: <CategoryPanel style={styles.categoryPanel} category="film" />,
          },
          {
            label: 'People',
            content: <CategoryPanel style={styles.categoryPanel} category="people" />,
          },
          {
            label: 'Planets',
            content: <CategoryPanel style={styles.categoryPanel} category="planets" />,
          },
          {
            label: 'Species',
            content: <CategoryPanel style={styles.categoryPanel} category="species" />,
          },
          {
            label: 'Starships',
            content: <CategoryPanel style={styles.categoryPanel} category="starships" />,
          },
          {
            label: 'Vehicles',
            content: <CategoryPanel style={styles.categoryPanel} category="vehicles" />,
          },
        ]}
      />
    </div>
  )
}

const styles: {
  [key: string]: CSSProperties | undefined
} = {
  page: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'self-start',
    justifyContent: 'self-start',
    flexDirection: 'column',
  },
  categoryPanel: {},
}
