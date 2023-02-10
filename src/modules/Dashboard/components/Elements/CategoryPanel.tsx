import { CSSProperties, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { color } from '../../../../theme/color'
import { ILLUSTRATIONS } from '../../../../theme/illustrations'
import axiosGet, { isError } from '../../../../utils/api'
import { CHUNK_SIZE, selectElements, storeCategoryElements, storeCategoryInfos } from '../../stores/elementSlice'
import { ElementsCategory } from '../../stores/types/CategoryType'
import ElementsList from './ElementsList'

export default function CategoryPanel({ category, style }: { category: ElementsCategory; style?: CSSProperties }) {
  // =================
  // Stores
  // =================
  const elements = useAppSelector(selectElements)
  const dispatch = useAppDispatch()
  const categoryElements = elements[`${category}`]

  // =================
  // States
  // =================

  // =================
  // Hooks
  // =================
  useEffect(() => {
    // Fetch main category data
    if (categoryElements.url) {
      fetchData(categoryElements.url)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryElements.url])

  useEffect(() => {
    // Fetch next chunk of elements
    if (categoryElements.elementRootUrl && categoryElements.elements.length < categoryElements.count) {
      const nextChunkIndex = Math.floor(categoryElements.elements.length / CHUNK_SIZE) + 1
      fetchChunk(`${categoryElements.elementRootUrl}?page=${nextChunkIndex}`)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryElements.elementRootUrl, categoryElements.elements.length])

  // =================
  // Methods
  // =================
  const fetchData = async (endpoint: string) => {
    const { data, status } = await axiosGet(endpoint)
    if (isError(endpoint, status)) {
      return
    }

    dispatch(
      storeCategoryInfos({
        category: category,
        count: data.count,
        elementRootUrl: data.next?.split('?')[0],
      }),
    )

    // If all results are already there, no need to fetch more
    if (categoryElements.elements.length < data.count && data.count <= CHUNK_SIZE) {
      dispatch(
        storeCategoryElements({
          category: category,
          elements: data.results,
        }),
      )
    }
  }

  const fetchChunk = async (endpoint: string) => {
    const { data, status } = await axiosGet(endpoint)
    if (isError(endpoint, status)) {
      return
    }

    dispatch(
      storeCategoryElements({
        category: category,
        elements: data.results,
      }),
    )
  }

  const renderBackgroundStyle = (): CSSProperties | null => {
    switch (category) {
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

  // =================
  // Render
  // =================
  return (
    <div
      style={{
        ...styles.main,
        ...style,
        ...renderBackgroundStyle(),
      }}
    >
      <div style={styles.elementSection}>
        <ElementsList style={styles.cardContainer} category={category} />
      </div>
      <div style={styles.ressourceSection}>
        <ElementsList style={styles.cardContainer} category={category} isRessourceList />
      </div>
    </div>
  )
}

const styles: {
  [key: string]: CSSProperties | undefined
} = {
  main: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    marginTop: 4,
    height: '100%',
  },
  elementSection: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    marginTop: 10,
    marginBottom: 10,
  },
  ressourceSection: {
    display: 'flex',
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    marginTop: 10,
    marginBottom: 10,
  },
  header: {},
}
