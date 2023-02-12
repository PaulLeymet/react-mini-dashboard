import { Grid } from '@mui/material'
import { CSSProperties } from 'react'
import { useParams } from 'react-router-dom'
import DesignEditableDate from '../../../design-system/DesignEditable/DesignEditableDate'
import DesignEditableText from '../../../design-system/DesignEditable/DesignEditableText'
import DesignSpinner from '../../../design-system/DesignSpinner/DesignSpinner'
import DesignHeader from '../../../design-system/DesignText/DesignHeader'
import DesignText from '../../../design-system/DesignText/DesignText'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { color } from '../../../theme/color'
import { ILLUSTRATIONS } from '../../../theme/illustrations'
import CacheManager from '../components/CacheManager'
import LinksTabs from '../components/LinksTabs'
import { selectElements } from '../stores/elementSlice'
import { selectResources, updateResource } from '../stores/resourceSlice'
import { PlanetType } from '../stores/types/PlanetType'

export default function PlanetPage({ isResource }: { isResource?: boolean }) {
  // =================
  // Stores
  // =================
  const dispatch = useAppDispatch()
  const elements = useAppSelector(selectElements)
  const resources = useAppSelector(selectResources)

  // =================
  // Navigation
  // =================
  const { index } = useParams()

  // =================
  // States
  // =================
  const planet: PlanetType = index ? (isResource ? resources.planets[parseInt(index)] : elements.planets.elements[parseInt(index)]) : null

  // =================
  // Hooks
  // =================

  // =================
  // Methods
  // =================
  const onNameUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateResource({
          category: 'planets',
          index: parseInt(index),
          resource: { ...planet, ...{ name: text } },
        }),
      )
    }
  }

  const onDirectorUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateResource({
          category: 'planets',
          index: parseInt(index),
          resource: { ...planet, ...{ director: text } },
        }),
      )
    }
  }

  const onDiameterUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateResource({
          category: 'planets',
          index: parseInt(index),
          resource: { ...planet, ...{ diameter: text } },
        }),
      )
    }
  }

  const onGravityUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateResource({
          category: 'planets',
          index: parseInt(index),
          resource: { ...planet, ...{ gravity: text } },
        }),
      )
    }
  }

  const onTerrainUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateResource({
          category: 'planets',
          index: parseInt(index),
          resource: { ...planet, ...{ terrain: text } },
        }),
      )
    }
  }

  const onSurfaceWaterUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateResource({
          category: 'planets',
          index: parseInt(index),
          resource: { ...planet, ...{ surface_water: text } },
        }),
      )
    }
  }

  const onOrbitalUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateResource({
          category: 'planets',
          index: parseInt(index),
          resource: { ...planet, ...{ orbital_period: text } },
        }),
      )
    }
  }

  const onRotationUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateResource({
          category: 'planets',
          index: parseInt(index),
          resource: { ...planet, ...{ rotation_period: text } },
        }),
      )
    }
  }

  const onClimateUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateResource({
          category: 'planets',
          index: parseInt(index),
          resource: { ...planet, ...{ climate: text } },
        }),
      )
    }
  }

  const onPopulationUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateResource({
          category: 'planets',
          index: parseInt(index),
          resource: { ...planet, ...{ population: text } },
        }),
      )
    }
  }

  const onCreatedDateUpdate = (date: Date) => {
    if (index) {
      dispatch(
        updateResource({
          category: 'planets',
          index: parseInt(index),
          resource: { ...planet, ...{ created: date.toISOString() } },
        }),
      )
    }
  }

  const onEditedDateUpdate = (date: Date) => {
    if (index) {
      dispatch(
        updateResource({
          category: 'planets',
          index: parseInt(index),
          resource: { ...planet, ...{ edited: date.toISOString() } },
        }),
      )
    }
  }

  // =================
  // Render
  // =================
  return (
    <div style={styles.main}>
      {!!planet ? (
        <div style={styles.content}>
          <Grid style={styles.gridContainer} container>
            <Grid style={styles.gridIllustration} item sm={4} xs={0}></Grid>
            <Grid style={styles.gridInformations} item sm={8} xs={12}>
              <Grid style={styles.gridContainer} container spacing={4}>
                {/* SECTION TITLE */}
                <Grid style={styles.grid} item xs={12}>
                  <DesignHeader color={color.primary} variant="h5">
                    {isResource ? `Resource - Planet` : `Element - Planet`}
                  </DesignHeader>
                  <DesignEditableText placeholder={'Title'} editable={isResource} onUpdate={onNameUpdate} variant="h5">
                    {`${planet.name}`}
                  </DesignEditableText>
                </Grid>
                <Grid style={styles.grid} item xs={6}>
                  <DesignText bold>Climate</DesignText>
                  <DesignEditableText placeholder={'Climate'} editable={isResource} onUpdate={onClimateUpdate}>
                    {`${planet.climate}`}
                  </DesignEditableText>
                  <DesignText style={{ marginTop: 2 }} bold>
                    Population
                  </DesignText>
                  <DesignEditableText placeholder={'Population'} editable={isResource} onUpdate={onPopulationUpdate}>
                    {`${planet.population}`}
                  </DesignEditableText>
                </Grid>
                <Grid style={styles.grid} item xs={6}>
                  <DesignText bold>Created in</DesignText>
                  <DesignEditableDate placeholder={'Creation'} editable={isResource} date={new Date(planet.created)} onUpdate={onCreatedDateUpdate} />
                  <DesignText style={{ marginTop: 2 }} bold>
                    Edited in
                  </DesignText>
                  <DesignEditableDate placeholder={'Edition'} editable={isResource} date={new Date(planet.edited)} onUpdate={onEditedDateUpdate} />
                </Grid>
                <Grid item xs={12} container>
                  <Grid style={styles.grid} item xs={4}>
                    <DesignText bold>Orbital period</DesignText>
                    <DesignEditableText placeholder={'Orbital period'} editable={isResource} onUpdate={onOrbitalUpdate}>
                      {`${planet.orbital_period}`}
                    </DesignEditableText>
                    <DesignText style={{ marginTop: 2 }} bold>
                      Rotation period
                    </DesignText>
                    <DesignEditableText placeholder={'Rotation period'} editable={isResource} onUpdate={onRotationUpdate}>
                      {`${planet.rotation_period}`}
                    </DesignEditableText>
                  </Grid>

                  <Grid style={styles.grid} item xs={4}>
                    <DesignText bold>Diameter</DesignText>
                    <DesignEditableText placeholder={'Diameter'} editable={isResource} onUpdate={onDiameterUpdate}>
                      {`${planet.diameter}`}
                    </DesignEditableText>
                    <DesignText style={{ marginTop: 2 }} bold>
                      Gravity
                    </DesignText>
                    <DesignEditableText placeholder={'Gravity'} editable={isResource} onUpdate={onGravityUpdate}>
                      {`${planet.gravity}`}
                    </DesignEditableText>
                  </Grid>
                  <Grid style={styles.grid} item xs={4}>
                    <DesignText bold>Terrain</DesignText>
                    <DesignEditableText placeholder={'Terrain'} editable={isResource} onUpdate={onTerrainUpdate}>
                      {`${planet.terrain}`}
                    </DesignEditableText>
                    <DesignText style={{ marginTop: 2 }} bold>
                      Surface water
                    </DesignText>
                    <DesignEditableText placeholder={'Surface water'} editable={isResource} onUpdate={onSurfaceWaterUpdate}>
                      {`${planet.surface_water}`}
                    </DesignEditableText>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <LinksTabs
                    tabs={[
                      {
                        category: 'films',
                        label: 'Films',
                        urls: planet.films,
                      },
                      {
                        category: 'people',
                        label: 'Residents',
                        urls: planet.residents,
                      },
                    ]}
                  />
                </Grid>

                {/* SECTION DATA */}
                <Grid style={styles.gridInformations} item xs={12}></Grid>
              </Grid>
            </Grid>
          </Grid>
          <CacheManager categories={['films', 'people']} />
        </div>
      ) : (
        <div style={styles.spinnerContent}>
          <DesignSpinner />
        </div>
      )}
    </div>
  )
}

const styles: {
  [key: string]: CSSProperties | undefined
} = {
  main: {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1,
  },
  spinnerContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  content: {
    display: 'flex',
    flexGrow: 1,
  },
  gridContainer: {
    display: 'flex',
    flexGrow: 1,
  },
  gridIllustration: {
    display: 'flex',
    flexGrow: 1,
    backgroundImage: `url(${ILLUSTRATIONS.planets})`,
    backgroundSize: 'cover',
    opacity: 0.8,
  },
  gridInformations: {
    display: 'relative',
    flexGrow: 1,
    padding: 20,
    flexDirection: 'column',
  },
  linkContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexGrow: 1,
    margin: 20,
  },
  link: {
    flexBasis: 'calc(20% - 20px)',
    margin: '10px',
  },
  grid: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}
