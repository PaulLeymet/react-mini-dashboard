import { CSSProperties } from 'react'
import DesignTabs from '../../design-system/DesignTabs/DesignTabs'
import { useMount } from '../../hooks/useMount'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
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
    </div>
  )
}

const styles: {
  [key: string]: CSSProperties | undefined
} = {
  page: {
    display: 'flex',
    flexGrow: 1,
  },
  tabs: {
    marginTop: 4,
  },
}
