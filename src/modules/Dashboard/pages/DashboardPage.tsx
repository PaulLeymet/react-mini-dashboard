import { CSSProperties } from 'react'
import DesignTabs from '../../../design-system/DesignTabs/DesignTabs'
import { useMount } from '../../../hooks/useMount'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { color } from '../../../theme/color'
import { ILLUSTRATIONS } from '../../../theme/illustrations'
import axiosGet, { isError } from '../../../utils/api'
import CategoryPanel from '../components/CategoryPanel'
import { selectCategory, selectElements, storeCategoriesUrl } from '../stores/elementSlice'
import { ElementsCategory } from '../stores/types/CategoryType'

const CATEGORIES_ORDER: ElementsCategory[] = ['films', 'people', 'planets', 'species', 'starships', 'vehicles']

export default function DashboardPage() {
  // =================
  // Stores
  // =================
  const dispatch = useAppDispatch()
  const elements = useAppSelector(selectElements)

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

  const renderBackgroundStyle = (): CSSProperties | null => {
    switch (elements.selectedCategory) {
      case 'films':
        return {
          backgroundColor: color.black,
          backgroundImage: `url(${ILLUSTRATIONS.films})`,
          backgroundSize: 'cover',
        }
      case 'people':
        return {
          backgroundColor: color.black,
          backgroundImage: `url(${ILLUSTRATIONS.people})`,
          backgroundSize: 'cover',
        }
      case 'planets':
        return {
          backgroundColor: color.black,
          backgroundImage: `url(${ILLUSTRATIONS.planets})`,
          backgroundSize: 'cover',
        }
      case 'species':
        return {
          backgroundColor: color.black,
          backgroundImage: `url(${ILLUSTRATIONS.species})`,
          backgroundSize: 'cover',
        }
      case 'starships':
        return {
          backgroundColor: color.black,
          backgroundImage: `url(${ILLUSTRATIONS.starships})`,
          backgroundSize: 'cover',
        }
      case 'vehicles':
        return {
          backgroundColor: color.black,
          backgroundImage: `url(${ILLUSTRATIONS.vehicles})`,
          backgroundSize: 'cover',
        }
      default:
        return null
    }
  }

  const onTabChange = (index: number) => {
    dispatch(selectCategory(CATEGORIES_ORDER[index]))
  }
  // =================
  // Render
  // =================
  return (
    <div style={{ ...styles.page, ...renderBackgroundStyle() }}>
      <DesignTabs
        selectorStyle={styles.selector}
        initialIndex={CATEGORIES_ORDER.findIndex((e) => e === elements.selectedCategory)}
        color={color.white}
        backgroundColor={color.black + '60'}
        onTabChange={onTabChange}
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
