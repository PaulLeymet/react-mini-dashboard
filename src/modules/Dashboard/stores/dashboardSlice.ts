import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../../store/store'
import { FilmType } from './types/FilmType'
import { PeopleType } from './types/PeopleType'
import { PlanetType } from './types/PlanetType'
import { SpecieType } from './types/SpecieType'
import { StarshipType } from './types/StarshipType'
import { VehicleType } from './types/VehicleType'

// =================
// Types
// =================
export type DashboardCategory = 'film' | 'people' | 'planets' | 'species' | 'starships' | 'vehicles'

export interface AuthGenericType {
  count: number
  next: string | null
  previous: string | null
  results: Array<any>
}

export interface AuthType {
  films: AuthGenericType & { results: Array<FilmType> }
  people: AuthGenericType & { results: Array<PeopleType> }
  planets: AuthGenericType & { results: Array<PlanetType> }
  species: AuthGenericType & { results: Array<SpecieType> }
  starships: AuthGenericType & { results: Array<StarshipType> }
  vehicles: AuthGenericType & { results: Array<VehicleType> }
}
// =================
// Initial state
// =================
const initialState: AuthType = {
  films: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
  people: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
  planets: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
  species: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
  starships: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
  vehicles: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
}

// =================
// Slice
// =================
export const dashboardSlice = createSlice({
  reducers: {
    updateData: (state, action: PayloadAction<{ category: DashboardCategory; data: AuthGenericType }>) => {
      switch (action.payload.category) {
        case 'film':
          state.films = action.payload.data
          break
        case 'people':
          state.people = action.payload.data
          break
        case 'planets':
          state.planets = action.payload.data
          break
        case 'species':
          state.species = action.payload.data
          break
        case 'starships':
          state.starships = action.payload.data
          break
        case 'vehicles':
          state.vehicles = action.payload.data
          break
        default:
          break
      }
    },
  },
  name: 'dashboardSlice',
  initialState: initialState,
})

// =================
// Actions
// =================
export const { updateData } = dashboardSlice.actions

// =================
// Selectors
// =================
export const selectDashboard = (state: RootState) => state.dashboard

export default dashboardSlice.reducer
