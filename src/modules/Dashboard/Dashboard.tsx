import { CSSProperties } from 'react'
import DesignModal from '../../design-system/DesignModal/DesignModal'
import DesignTabs from '../../design-system/DesignTabs/DesignTabs'
import { useMount } from '../../hooks/useMount'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import axiosGet, { isError } from '../../utils/api'
import CategoryPanel from './components/Elements/CategoryPanel'
import FilmDetailled from './components/Elements/Film/FilmDetailled'
import PeopleDetailled from './components/Elements/People/PeopleDetailled'
import PlanetDetailled from './components/Elements/Planet/PlanetDetailled'
import SpecieDetailled from './components/Elements/Specie/SpecieDetailled'
import StarshipDetailled from './components/Elements/Starship/StarshipDetailled'
import VehicleDetailled from './components/Elements/Vehicle/VehicleDetailled'
import { storeCategoriesUrl } from './stores/elementSlice'
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
  useMount(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  })

  // =================
  // Methods
  // =================
  const fetchData = async () => {
    const endpoint = 'https://swapi.dev/api/'
    const { data, status } = await axiosGet(endpoint)
    if (isError(endpoint, status)) {
      return
    }

    dispatch(storeCategoriesUrl(data))
  }

  const renderDetail = (): JSX.Element => {
    switch (modal.category) {
      case 'films':
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
        style={styles.tabs}
        tabs={[
          {
            label: 'Films',
            content: <CategoryPanel category="films" />,
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
    display: 'flex',
    alignItems: 'self-start',
    justifyContent: 'self-start',
    flexDirection: 'column',
  },
  tabs: {
    marginTop: 4,
  },
}
