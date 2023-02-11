import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import axiosGet, { isError } from '../../../../utils/api'
import { CHUNK_SIZE, selectElements, storeCategoryElements, storeCategoryInfos } from '../../stores/elementSlice'
import { ElementsCategory } from '../../stores/types/CategoryType'

export default function CacheManager({ categories }: { categories: ElementsCategory[] }) {
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
  // Detect if a category needs to be cached
  useEffect(() => {
    if (categories.includes('films') && elements.films.url) {
      fetchData('films', elements.films.url)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elements.films.url])

  useEffect(() => {
    if (categories.includes('people') && elements.people.url) {
      fetchData('people', elements.people.url)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elements.people.url])

  useEffect(() => {
    if (categories.includes('planets') && elements.planets.url) {
      fetchData('planets', elements.planets.url)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elements.planets.url])

  useEffect(() => {
    if (categories.includes('species') && elements.species.url) {
      fetchData('species', elements.species.url)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elements.species.url])

  useEffect(() => {
    if (categories.includes('starships') && elements.starships.url) {
      fetchData('starships', elements.starships.url)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elements.starships.url])

  useEffect(() => {
    if (categories.includes('vehicles') && elements.vehicles.url) {
      fetchData('vehicles', elements.vehicles.url)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elements.vehicles.url])

  // For each category need to be cached : get data from api
  useEffect(() => {
    fetchChunk('films')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elements.films.elementRootUrl, elements.films.elements.length])

  useEffect(() => {
    fetchChunk('films')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elements.films.elementRootUrl, elements.films.elements.length])

  useEffect(() => {
    fetchChunk('people')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elements.people.elementRootUrl, elements.people.elements.length])

  useEffect(() => {
    fetchChunk('planets')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elements.planets.elementRootUrl, elements.planets.elements.length])

  useEffect(() => {
    fetchChunk('species')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elements.species.elementRootUrl, elements.species.elements.length])

  useEffect(() => {
    fetchChunk('starships')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elements.starships.elementRootUrl, elements.starships.elements.length])

  useEffect(() => {
    fetchChunk('vehicles')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elements.vehicles.elementRootUrl, elements.vehicles.elements.length])

  // =================
  // Methods
  // =================
  const fetchData = async (category: ElementsCategory, endpoint: string) => {
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
    if (elements[`${category}`].elements.length < data.count && data.count <= CHUNK_SIZE) {
      dispatch(
        storeCategoryElements({
          category: category,
          elements: data.results,
        }),
      )
    }
  }

  const fetchChunk = async (category: ElementsCategory) => {
    if (elements[`${category}`].elementRootUrl && elements[`${category}`].elements.length < elements[`${category}`].count) {
      const nextChunkIndex = Math.floor(elements[`${category}`].elements.length / CHUNK_SIZE) + 1
      const endpoint = `${elements[`${category}`].elementRootUrl}?page=${nextChunkIndex}`

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
  }

  // =================
  // Render
  // =================
  return <></>
}
