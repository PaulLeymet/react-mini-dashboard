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
export interface AuthType {
  films: Array<FilmType>
  people: Array<PeopleType>
  planets: Array<PlanetType>
  species: Array<SpecieType>
  starships: Array<StarshipType>
  vehicles: Array<VehicleType>
}

// =================
// Initial state
// =================
const initialState: AuthType = {
  films: [],
  people: [],
  planets: [],
  species: [],
  starships: [],
  vehicles: [],
}

// =================
// Slice
// =================
export const resourceSlice = createSlice({
  reducers: {
    addResource: (state, action: PayloadAction<{ category: ElementsCategory; resource: any }>) => {
      const payload = action.payload
      switch (payload.category) {
        case 'films':
          if (!state.films.some((e) => e.title === payload.resource.title)) state.films.push(payload.resource)
          break
        case 'people':
          if (!state.people.some((e) => e.name === payload.resource.name)) state.people.push(payload.resource)
          break
        case 'planets':
          if (!state.planets.some((e) => e.name === payload.resource.name)) state.planets.push(payload.resource)
          break
        case 'species':
          if (!state.species.some((e) => e.name === payload.resource.name)) state.species.push(payload.resource)
          break
        case 'starships':
          if (!state.starships.some((e) => e.name === payload.resource.name)) state.starships.push(payload.resource)
          break
        case 'vehicles':
          if (!state.vehicles.some((e) => e.name === payload.resource.name)) state.vehicles.push(payload.resource)
          break
        default:
          break
      }
    },
    removeResource: (state, action: PayloadAction<{ category: ElementsCategory; resource: any }>) => {
      const payload = action.payload
      switch (payload.category) {
        case 'films':
          state.films = state.films.filter((e) => e.title !== payload.resource.title)
          break
        case 'people':
          state.people = state.people.filter((e) => e.name !== payload.resource.name)
          break
        case 'planets':
          state.planets = state.planets.filter((e) => e.name !== payload.resource.name)
          break
        case 'species':
          state.species = state.species.filter((e) => e.name !== payload.resource.name)
          break
        case 'starships':
          state.starships = state.starships.filter((e) => e.name !== payload.resource.name)
          break
        case 'vehicles':
          state.vehicles = state.vehicles.filter((e) => e.name !== payload.resource.name)
          break
        default:
          break
      }
    },
    updateResource: (state, action: PayloadAction<{ category: ElementsCategory; index: number; resource: any }>) => {
      const payload = action.payload
      state[`${payload.category}`][payload.index] = payload.resource
    },
  },
  name: 'resourceSlice',
  initialState: initialState,
})

// =================
// Actions
// =================
export const { addResource, removeResource, updateResource } = resourceSlice.actions

// =================
// Selectors
// =================
export const selectResources = (state: RootState) => state.resources

export default resourceSlice.reducer
