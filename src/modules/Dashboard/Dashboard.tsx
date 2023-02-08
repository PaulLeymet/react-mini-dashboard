import { CSSProperties, useEffect } from 'react'
import DesignHeader from '../../design-system/DesignText/DesignHeader'
import DesignVerticalTabs from '../../design-system/DesignVerticalTabs/DesignVerticalTabs'
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
      <div style={styles.elementsSection}>
        <DesignHeader sx={styles.header}>Elements</DesignHeader>
        <DesignVerticalTabs
          tabs={[
            {
              label: 'Films',
              content: <DashboardList style={styles.cardContainer} category="film" />,
            },
            {
              label: 'People',
              content: <DashboardList style={styles.cardContainer} category="people" />,
            },
            {
              label: 'Planets',
              content: <DashboardList style={styles.cardContainer} category="planets" />,
            },
            {
              label: 'Species',
              content: <DashboardList style={styles.cardContainer} category="species" />,
            },
            {
              label: 'Starships',
              content: <DashboardList style={styles.cardContainer} category="starships" />,
            },
            {
              label: 'Vehicles',
              content: <DashboardList style={styles.cardContainer} category="vehicles" />,
            },
          ]}
        />
      </div>

      <div style={styles.ressourcesSection}>
        <DesignHeader sx={styles.header}>Ressources</DesignHeader>
        <DesignVerticalTabs
          tabs={[
            {
              label: 'Films',
              content: <DashboardList style={styles.cardContainer} category="film" />,
            },
            {
              label: 'People',
              content: <DashboardList style={styles.cardContainer} category="people" />,
            },
            {
              label: 'Planets',
              content: <DashboardList style={styles.cardContainer} category="planets" />,
            },
            {
              label: 'Species',
              content: <DashboardList style={styles.cardContainer} category="species" />,
            },
            {
              label: 'Starships',
              content: <DashboardList style={styles.cardContainer} category="starships" />,
            },
            {
              label: 'Vehicles',
              content: <DashboardList style={styles.cardContainer} category="vehicles" />,
            },
          ]}
        />
      </div>
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
  cardContainer: {
    background: color.secondary,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: '100%',
  },
  elementsSection: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    width: '100%',
  },
  ressourcesSection: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    width: '100%',
  },
  header: {
    margin: 2,
  },
}
