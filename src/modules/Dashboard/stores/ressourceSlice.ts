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
export const ressourceSlice = createSlice({
  reducers: {
    addRessource: (state, action: PayloadAction<{ category: ElementsCategory; ressource: any }>) => {
      const payload = action.payload
      switch (payload.category) {
        case 'films':
          if (!state.films.some((e) => e.title === payload.ressource.title)) state.films.push(payload.ressource)
          break
        case 'people':
          if (!state.people.some((e) => e.name === payload.ressource.name)) state.people.push(payload.ressource)
          break
        case 'planets':
          if (!state.planets.some((e) => e.name === payload.ressource.name)) state.planets.push(payload.ressource)
          break
        case 'species':
          if (!state.species.some((e) => e.name === payload.ressource.name)) state.species.push(payload.ressource)
          break
        case 'starships':
          if (!state.starships.some((e) => e.name === payload.ressource.name)) state.starships.push(payload.ressource)
          break
        case 'vehicles':
          if (!state.vehicles.some((e) => e.name === payload.ressource.name)) state.vehicles.push(payload.ressource)
          break
        default:
          break
      }
    },
    removeRessource: (state, action: PayloadAction<{ category: ElementsCategory; ressource: any }>) => {
      const payload = action.payload
      switch (payload.category) {
        case 'films':
          state.films = state.films.filter((e) => e.title !== payload.ressource.title)
          break
        case 'people':
          state.people = state.people.filter((e) => e.name !== payload.ressource.name)
          break
        case 'planets':
          state.planets = state.planets.filter((e) => e.name !== payload.ressource.name)
          break
        case 'species':
          state.species = state.species.filter((e) => e.name !== payload.ressource.name)
          break
        case 'starships':
          state.starships = state.starships.filter((e) => e.name !== payload.ressource.name)
          break
        case 'vehicles':
          state.vehicles = state.vehicles.filter((e) => e.name !== payload.ressource.name)
          break
        default:
          break
      }
    },
  },
  name: 'ressourceSlice',
  initialState: initialState,
})

// =================
// Actions
// =================
export const { addRessource, removeRessource } = ressourceSlice.actions

// =================
// Selectors
// =================
export const selectRessources = (state: RootState) => state.ressources

export default ressourceSlice.reducer
