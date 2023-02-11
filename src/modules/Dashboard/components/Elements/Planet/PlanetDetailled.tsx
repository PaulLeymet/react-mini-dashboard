import { Grid } from '@mui/material'
import { CSSProperties } from 'react'
import { useParams } from 'react-router-dom'
import DesignSpinner from '../../../../../design-system/DesignSpinner/DesignSpinner'
import DesignTabs from '../../../../../design-system/DesignTabs/DesignTabs'
import DesignHeader from '../../../../../design-system/DesignText/DesignHeader'
import DesignText from '../../../../../design-system/DesignText/DesignText'
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks'
import { color } from '../../../../../theme/color'
import { ILLUSTRATIONS } from '../../../../../theme/illustrations'
import { selectElements } from '../../../stores/elementSlice'
import { selectRessources, updateRessource } from '../../../stores/ressourceSlice'
import { PlanetType } from '../../../stores/types/PlanetType'
import EditableDate from '../../dashboard-system/EditableDate'
import EditableText from '../../dashboard-system/EditableText'
import PageLink from '../../dashboard-system/PageLink'
import CacheManager from '../CacheManager'

export default function PlanetDetailled({ isRessource }: { isRessource?: boolean }) {
  // =================
  // Stores
  // =================
  const dispatch = useAppDispatch()
  const elements = useAppSelector(selectElements)
  const ressources = useAppSelector(selectRessources)

  // =================
  // Navigation
  // =================
  const { index } = useParams()

  // =================
  // States
  // =================
  const planet: PlanetType = index ? (isRessource ? ressources.planets[parseInt(index)] : elements.planets.elements[parseInt(index)]) : null

  // =================
  // Hooks
  // =================

  // =================
  // Methods
  // =================
  const onNameUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'planets',
          index: parseInt(index),
          ressource: { ...planet, ...{ name: text } },
        }),
      )
    }
  }

  const onDirectorUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'planets',
          index: parseInt(index),
          ressource: { ...planet, ...{ director: text } },
        }),
      )
    }
  }

  const onDiameterUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'planets',
          index: parseInt(index),
          ressource: { ...planet, ...{ diameter: text } },
        }),
      )
    }
  }

  const onGravityUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'planets',
          index: parseInt(index),
          ressource: { ...planet, ...{ gravity: text } },
        }),
      )
    }
  }

  const onTerrainUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'planets',
          index: parseInt(index),
          ressource: { ...planet, ...{ terrain: text } },
        }),
      )
    }
  }

  const onSurfaceWaterUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'planets',
          index: parseInt(index),
          ressource: { ...planet, ...{ surface_water: text } },
        }),
      )
    }
  }

  const onOrbitalUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'planets',
          index: parseInt(index),
          ressource: { ...planet, ...{ orbital_period: text } },
        }),
      )
    }
  }

  const onRotationUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'planets',
          index: parseInt(index),
          ressource: { ...planet, ...{ rotation_period: text } },
        }),
      )
    }
  }

  const onClimateUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'planets',
          index: parseInt(index),
          ressource: { ...planet, ...{ climate: text } },
        }),
      )
    }
  }

  const onPopulationUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'planets',
          index: parseInt(index),
          ressource: { ...planet, ...{ population: text } },
        }),
      )
    }
  }

  const onCreatedDateUpdate = (date: Date) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'planets',
          index: parseInt(index),
          ressource: { ...planet, ...{ created: date.toISOString() } },
        }),
      )
    }
  }

  const onEditedDateUpdate = (date: Date) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'planets',
          index: parseInt(index),
          ressource: { ...planet, ...{ edited: date.toISOString() } },
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
                    {isRessource ? `Ressource - Planet` : `Element - Planet`}
                  </DesignHeader>
                  <EditableText placeholder={'Title'} editable={isRessource} onUpdate={onNameUpdate} variant="h5">
                    {`${planet.name}`}
                  </EditableText>
                </Grid>
                <Grid style={styles.grid} item xs={6}>
                  <DesignText bold>Climate</DesignText>
                  <EditableText placeholder={'Climate'} editable={isRessource} onUpdate={onClimateUpdate}>
                    {`${planet.climate}`}
                  </EditableText>
                  <DesignText style={{ marginTop: 2 }} bold>
                    Population
                  </DesignText>
                  <EditableText placeholder={'Population'} editable={isRessource} onUpdate={onPopulationUpdate}>
                    {`${planet.population}`}
                  </EditableText>
                </Grid>
                <Grid style={styles.grid} item xs={6}>
                  <DesignText bold>Created in</DesignText>
                  <EditableDate placeholder={'Creation'} editable={isRessource} date={new Date(planet.created)} onUpdate={onCreatedDateUpdate} />
                  <DesignText style={{ marginTop: 2 }} bold>
                    Edited in
                  </DesignText>
                  <EditableDate placeholder={'Edition'} editable={isRessource} date={new Date(planet.edited)} onUpdate={onEditedDateUpdate} />
                </Grid>
                <Grid item xs={12} container>
                  <Grid style={styles.grid} item xs={4}>
                    <DesignText bold>Orbital period</DesignText>
                    <EditableText placeholder={'Orbital period'} editable={isRessource} onUpdate={onOrbitalUpdate}>
                      {`${planet.orbital_period}`}
                    </EditableText>
                    <DesignText style={{ marginTop: 2 }} bold>
                      Rotation period
                    </DesignText>
                    <EditableText placeholder={'Rotation period'} editable={isRessource} onUpdate={onRotationUpdate}>
                      {`${planet.rotation_period}`}
                    </EditableText>
                  </Grid>

                  <Grid style={styles.grid} item xs={4}>
                    <DesignText bold>Diameter</DesignText>
                    <EditableText placeholder={'Diameter'} editable={isRessource} onUpdate={onDiameterUpdate}>
                      {`${planet.diameter}`}
                    </EditableText>
                    <DesignText style={{ marginTop: 2 }} bold>
                      Gravity
                    </DesignText>
                    <EditableText placeholder={'Gravity'} editable={isRessource} onUpdate={onGravityUpdate}>
                      {`${planet.gravity}`}
                    </EditableText>
                  </Grid>
                  <Grid style={styles.grid} item xs={4}>
                    <DesignText bold>Terrain</DesignText>
                    <EditableText placeholder={'Terrain'} editable={isRessource} onUpdate={onTerrainUpdate}>
                      {`${planet.terrain}`}
                    </EditableText>
                    <DesignText style={{ marginTop: 2 }} bold>
                      Surface water
                    </DesignText>
                    <EditableText placeholder={'Surface water'} editable={isRessource} onUpdate={onSurfaceWaterUpdate}>
                      {`${planet.surface_water}`}
                    </EditableText>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <DesignTabs
                    tabs={[
                      {
                        label: 'Films',
                        content: (
                          <div style={styles.linkContainer}>
                            {planet.films?.map((url) => (
                              <PageLink key={url} style={styles.link} category="films" url={url} />
                            ))}
                          </div>
                        ),
                      },
                      {
                        label: 'Residents',
                        content: (
                          <div style={styles.linkContainer}>
                            {planet.residents?.map((url) => (
                              <PageLink key={url} style={styles.link} category="people" url={url} />
                            ))}
                          </div>
                        ),
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
