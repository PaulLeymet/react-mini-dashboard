import { CSSProperties, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import axiosGet, { isError } from '../../../../utils/api'
import { CHUNK_SIZE, selectElements, storeCategoryElements, storeCategoryInfos } from '../../stores/elementSlice'
import { ElementsCategory } from '../../stores/types/CategoryType'
import ElementsList from './ElementsList'

export default function CategoryPanel({ category, style }: { category: ElementsCategory; style?: CSSProperties }) {
  // =================
  // Stores
  // =================
  const dispatch = useAppDispatch()
  const elements = useAppSelector(selectElements)
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

  // =================
  // Render
  // =================
  return (
    <div
      style={{
        ...styles.main,
        ...style,
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
    flexGrow: 1,
    flexDirection: 'column',
    marginTop: 4,
  },
  elementSection: {
    display: 'flex',
    flexGrow: 1,
  },
  ressourceSection: {
    display: 'flex',
    flexGrow: 1,
  },
  header: {},
}
