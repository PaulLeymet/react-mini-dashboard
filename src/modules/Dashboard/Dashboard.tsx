import { CSSProperties, useEffect } from 'react'
import DesignModal from '../../design-system/DesignModal/DesignModal'
import DesignTabs from '../../design-system/DesignTabs/DesignTabs'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { getApi } from '../../utils/api'
import CategoryPanel from './components/Elements/CategoryPanel'
import FilmDetailled from './components/Elements/Film/FilmDetailled'
import PeopleDetailled from './components/Elements/People/PeopleDetailled'
import PlanetDetailled from './components/Elements/Planet/PlanetDetailled'
import SpecieDetailled from './components/Elements/Specie/SpecieDetailled'
import StarshipDetailled from './components/Elements/Starship/StarshipDetailled'
import VehicleDetailled from './components/Elements/Vehicle/VehicleDetailled'
import { AuthGenericType, updateData } from './stores/elementSlice'
import { selectModal } from './stores/modalSlice'

export default function Dashboard() {
  // =================
  // Stores
  // =================
  const dispatch = useAppDispatch()
  const modal = useAppSelector(selectModal)

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

  const renderDetail = (): JSX.Element => {
    switch (modal.category) {
      case 'film':
        return <FilmDetailled id={modal.id} url={modal.url} />
      case 'people':
        return <PeopleDetailled id={modal.id} url={modal.url} />
      case 'planets':
        return <PlanetDetailled id={modal.id} url={modal.url} />
      case 'species':
        return <SpecieDetailled id={modal.id} url={modal.url} />
      case 'starships':
        return <StarshipDetailled id={modal.id} url={modal.url} />
      case 'vehicles':
        return <VehicleDetailled id={modal.id} url={modal.url} />
      default:
        return <></>
    }
  }

  // =================
  // Render
  // =================
  return (
    <div style={styles.page}>
      <DesignTabs
        tabs={[
          {
            label: 'Films',
            content: <CategoryPanel category="film" />,
          },
          {
            label: 'People',
            content: <CategoryPanel category="people" />,
          },
          {
            label: 'Planets',
            content: <CategoryPanel category="planets" />,
          },
          {
            label: 'Species',
            content: <CategoryPanel category="species" />,
          },
          {
            label: 'Starships',
            content: <CategoryPanel category="starships" />,
          },
          {
            label: 'Vehicles',
            content: <CategoryPanel category="vehicles" />,
          },
        ]}
      />
      <DesignModal>{renderDetail()}</DesignModal>
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
}
