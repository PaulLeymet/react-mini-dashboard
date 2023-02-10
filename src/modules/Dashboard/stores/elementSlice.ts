import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../../store/store'
import { ElementsCategory } from './types/CategoryType'
import { FilmType } from './types/FilmType'
import { PeopleType } from './types/PeopleType'
import { PlanetType } from './types/PlanetType'
import { SpecieType } from './types/SpecieType'
import { StarshipType } from './types/StarshipType'
import { VehicleType } from './types/VehicleType'

// =================
// Types
// =================
export const CHUNK_SIZE = 10

export interface AuthGenericType {
  count: number
  elements: Array<any>
  url: string
  elementRootUrl: string
}

export interface AuthType {
  films: AuthGenericType & { elements: Array<FilmType> }
  people: AuthGenericType & { elements: Array<PeopleType> }
  planets: AuthGenericType & { elements: Array<PlanetType> }
  species: AuthGenericType & { elements: Array<SpecieType> }
  starships: AuthGenericType & { elements: Array<StarshipType> }
  vehicles: AuthGenericType & { elements: Array<VehicleType> }
}
// =================
// Initial state
// =================
const initialState: AuthType = {
  films: {
    count: 0,
    elements: [],
    url: '',
    elementRootUrl: '',
  },
  people: {
    count: 0,
    elements: [],
    url: '',
    elementRootUrl: '',
  },
  planets: {
    count: 0,
    elements: [],
    url: '',
    elementRootUrl: '',
  },
  species: {
    count: 0,
    elements: [],
    url: '',
    elementRootUrl: '',
  },
  starships: {
    count: 0,
    elements: [],
    url: '',
    elementRootUrl: '',
  },
  vehicles: {
    count: 0,
    elements: [],
    url: '',
    elementRootUrl: '',
  },
}

// =================
// Slice
// =================
export const elementSlice = createSlice({
  reducers: {
    storeCategoriesUrl: (
      state,
      action: PayloadAction<{ films: string; people: string; planets: string; species: string; starships: string; vehicles: string }>,
    ) => {
      const payload = action.payload
      state.films.url = payload.films
      state.people.url = payload.people
      state.planets.url = payload.planets
      state.species.url = payload.species
      state.starships.url = payload.starships
      state.vehicles.url = payload.vehicles
    },
    storeCategoryInfos: (state, action: PayloadAction<{ category: ElementsCategory; count: number; elementRootUrl: string }>) => {
      const payload = action.payload
      state[`${payload.category}`].count = payload.count
      state[`${payload.category}`].elementRootUrl = payload.elementRootUrl
    },
    storeCategoryElements: (state, action: PayloadAction<{ category: ElementsCategory; elements: Array<any> }>) => {
      const payload = action.payload
      state[`${payload.category}`].elements = state[`${payload.category}`].elements.concat(payload.elements)
    },
  },
  name: 'elementSlice',
  initialState: initialState,
})

// =================
// Actions
// =================
export const { storeCategoriesUrl, storeCategoryInfos, storeCategoryElements } = elementSlice.actions

// =================
// Selectors
// =================
export const selectElements = (state: RootState) => state.elements

export default elementSlice.reducer
