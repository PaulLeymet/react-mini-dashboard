import { Grid } from '@mui/material'
import { CSSProperties } from 'react'
import { useParams } from 'react-router-dom'
import { DesignBox, DesignEditableDate, DesignEditableText, DesignHeader, DesignSpinner } from '../../../design-system'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { color } from '../../../theme/color'
import { ILLUSTRATIONS } from '../../../theme/illustrations'
import CacheManager from '../components/CacheManager'
import DetailPageSection from '../components/DetailPageSection'
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
    <DesignBox style={styles.main}>
      {!!planet ? (
        <DesignBox>
          <Grid style={styles.gridContainer} container>
            <Grid style={styles.gridIllustration} item sm={4} xs={0}></Grid>
            <Grid style={styles.gridInformations} item sm={8} xs={12}>
              <Grid style={styles.gridContainer} container spacing={4}>
                {/* SECTION TITLE */}
                <Grid style={styles.grid} item xs={12}>
                  <DesignHeader style={styles.header} textAlign='left' color={color.primary} variant='h5'>
                    {isResource ? `Resource - Planet` : `Element - Planet`}
                  </DesignHeader>
                  <DetailPageSection>
                    <DesignEditableText label='Name' placeholder={'Title'} editable={isResource} onUpdate={onNameUpdate}>
                      {`${planet.name}`}
                    </DesignEditableText>
                  </DetailPageSection>
                </Grid>
                <Grid style={styles.grid} item xs={6}>
                  <DetailPageSection>
                    <DesignEditableText label='Climate' placeholder={'Climate'} editable={isResource} onUpdate={onClimateUpdate}>
                      {`${planet.climate}`}
                    </DesignEditableText>
                    <DesignEditableText label='Population' placeholder={'Population'} editable={isResource} onUpdate={onPopulationUpdate}>
                      {`${planet.population}`}
                    </DesignEditableText>
                  </DetailPageSection>
                </Grid>
                <Grid style={styles.grid} item xs={6}>
                  <DetailPageSection>
                    <DesignEditableDate
                      label='Created in'
                      placeholder={'Creation'}
                      editable={isResource}
                      date={new Date(planet.created)}
                      onUpdate={onCreatedDateUpdate}
                    />
                    <DesignEditableDate
                      label=' Edited in'
                      placeholder={'Edition'}
                      editable={isResource}
                      date={new Date(planet.edited)}
                      onUpdate={onEditedDateUpdate}
                    />
                  </DetailPageSection>
                </Grid>
                <Grid item xs={12} container>
                  <Grid style={styles.grid} item xs={4}>
                    <DetailPageSection>
                      <DesignEditableText label='Orbital period' placeholder={'Orbital period'} editable={isResource} onUpdate={onOrbitalUpdate}>
                        {`${planet.orbital_period}`}
                      </DesignEditableText>
                      <DesignEditableText label='Rotation period' placeholder={'Rotation period'} editable={isResource} onUpdate={onRotationUpdate}>
                        {`${planet.rotation_period}`}
                      </DesignEditableText>
                    </DetailPageSection>
                  </Grid>

                  <Grid style={styles.grid} item xs={4}>
                    <DetailPageSection>
                      <DesignEditableText label='Diameter' placeholder={'Diameter'} editable={isResource} onUpdate={onDiameterUpdate}>
                        {`${planet.diameter}`}
                      </DesignEditableText>
                      <DesignEditableText label='Gravity' placeholder={'Gravity'} editable={isResource} onUpdate={onGravityUpdate}>
                        {`${planet.gravity}`}
                      </DesignEditableText>
                    </DetailPageSection>
                  </Grid>
                  <Grid style={styles.grid} item xs={4}>
                    <DetailPageSection>
                      <DesignEditableText label='Terrain' placeholder={'Terrain'} editable={isResource} onUpdate={onTerrainUpdate}>
                        {`${planet.terrain}`}
                      </DesignEditableText>
                      <DesignEditableText label='Surface water' placeholder={'Surface water'} editable={isResource} onUpdate={onSurfaceWaterUpdate}>
                        {`${planet.surface_water}`}
                      </DesignEditableText>
                    </DetailPageSection>
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
        </DesignBox>
      ) : (
        <div style={styles.spinnerContent}>
          <DesignSpinner />
        </div>
      )}
    </DesignBox>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridIllustration: {
    display: 'flex',
    flexGrow: 1,
    backgroundImage: `url(${ILLUSTRATIONS.films})`,
    backgroundSize: 'cover',
    opacity: 0.8,
  },
  gridInformations: {
    display: 'relative',
    flexGrow: 1,
    padding: 20,
    flexDirection: 'column',
  },
  grid: {
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    marginBottom: 2,
  },
}
