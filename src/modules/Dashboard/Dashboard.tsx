import { CSSProperties, useState } from 'react'
import DesignTabs from '../../design-system/DesignTabs/DesignTabs'
import { useMount } from '../../hooks/useMount'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { color } from '../../theme/color'
import { ILLUSTRATIONS } from '../../theme/illustrations'
import axiosGet, { isError } from '../../utils/api'
import CategoryPanel from './components/elements/CategoryPanel'
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
  const [tabIndex, setTabIndex] = useState(0)

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

  const renderBackgroundStyle = (): CSSProperties | null => {
    switch (tabIndex) {
      case 0:
        return {
          backgroundColor: color.black,
          backgroundImage: `url(${ILLUSTRATIONS.films})`,
          backgroundSize: 'cover',
        }
      case 1:
        return {
          backgroundColor: color.black,
          backgroundImage: `url(${ILLUSTRATIONS.people})`,
          backgroundSize: 'cover',
        }
      case 2:
        return {
          backgroundColor: color.black,
          backgroundImage: `url(${ILLUSTRATIONS.planets})`,
          backgroundSize: 'cover',
        }
      case 3:
        return {
          backgroundColor: color.black,
          backgroundImage: `url(${ILLUSTRATIONS.species})`,
          backgroundSize: 'cover',
        }
      case 4:
        return {
          backgroundColor: color.black,
          backgroundImage: `url(${ILLUSTRATIONS.starships})`,
          backgroundSize: 'cover',
        }
      case 5:
        return {
          backgroundColor: color.black,
          backgroundImage: `url(${ILLUSTRATIONS.vehicles})`,
          backgroundSize: 'cover',
        }
      default:
        return null
    }
  }

  // =================
  // Render
  // =================
  return (
    <div style={{ ...styles.page, ...renderBackgroundStyle() }}>
      <DesignTabs
        style={styles.tabs}
        onTabChange={setTabIndex}
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
    </div>
  )
}

const styles: {
  [key: string]: CSSProperties | undefined
} = {
  page: {
    display: 'flex',
    flexGrow: 1,
    backgroundColor: color.black,
    backgroundImage: `url(${ILLUSTRATIONS.people})`,
    backgroundSize: 'cover',
  },
}
