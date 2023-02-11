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
import { StarshipType } from '../../../stores/types/StarshipType'
import EditableDate from '../../dashboard-system/EditableDate'
import EditableText from '../../dashboard-system/EditableText'
import PageLink from '../../dashboard-system/PageLink'
import CacheManager from '../CacheManager'

export default function StarshipDetailled({ isRessource }: { isRessource?: boolean }) {
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
  const starship: StarshipType = index ? (isRessource ? ressources.starships[parseInt(index)] : elements.starships.elements[parseInt(index)]) : null

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
          category: 'starships',
          index: parseInt(index),
          ressource: { ...starship, ...{ name: text } },
        }),
      )
    }
  }

  const onModelUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'starships',
          index: parseInt(index),
          ressource: { ...starship, ...{ model: text } },
        }),
      )
    }
  }

  const onStarshipClassUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'starships',
          index: parseInt(index),
          ressource: { ...starship, ...{ starship_class: text } },
        }),
      )
    }
  }

  const onManufacturerUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'starships',
          index: parseInt(index),
          ressource: { ...starship, ...{ manufacturer: text } },
        }),
      )
    }
  }

  const onMgltUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'starships',
          index: parseInt(index),
          ressource: { ...starship, ...{ MGLT: text } },
        }),
      )
    }
  }

  const onHyperdriveUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'starships',
          index: parseInt(index),
          ressource: { ...starship, ...{ hyperdrive_rating: text } },
        }),
      )
    }
  }

  const onCrewUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'starships',
          index: parseInt(index),
          ressource: { ...starship, ...{ crew: text } },
        }),
      )
    }
  }

  const onPassengersUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'starships',
          index: parseInt(index),
          ressource: { ...starship, ...{ passengers: text } },
        }),
      )
    }
  }

  const onCargoCapacityUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'starships',
          index: parseInt(index),
          ressource: { ...starship, ...{ cargo_capacity: text } },
        }),
      )
    }
  }

  const onMaxSpeedUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'starships',
          index: parseInt(index),
          ressource: { ...starship, ...{ max_atmosphering_speed: text } },
        }),
      )
    }
  }

  const onCostUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'starships',
          index: parseInt(index),
          ressource: { ...starship, ...{ cost_in_credits: text } },
        }),
      )
    }
  }

  const onConsumablesUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'starships',
          index: parseInt(index),
          ressource: { ...starship, ...{ consumables: text } },
        }),
      )
    }
  }

  const onCreatedDateUpdate = (date: Date) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'starships',
          index: parseInt(index),
          ressource: { ...starship, ...{ created: date.toISOString() } },
        }),
      )
    }
  }

  const onEditedDateUpdate = (date: Date) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'starships',
          index: parseInt(index),
          ressource: { ...starship, ...{ edited: date.toISOString() } },
        }),
      )
    }
  }

  console.log(starship)

  // =================
  // Render
  // =================
  return (
    <div style={styles.main}>
      {!!starship ? (
        <div style={styles.content}>
          <Grid style={styles.gridContainer} container>
            <Grid style={styles.gridIllustration} item sm={4} xs={0}></Grid>
            <Grid style={styles.gridInformations} item sm={8} xs={12}>
              <Grid style={styles.gridContainer} container spacing={4}>
                {/* SECTION TITLE */}
                <Grid style={styles.grid} item xs={12}>
                  <DesignHeader color={color.primary} variant="h5">
                    {isRessource ? `Ressource - Starship` : `Element - Starship`}
                  </DesignHeader>
                  <EditableText placeholder={'Title'} editable={isRessource} onUpdate={onNameUpdate} variant="h5">
                    {`${starship.name}`}
                  </EditableText>
                </Grid>
                <Grid style={{ ...styles.grid, ...{ justifyContent: 'start' } }} item xs={6}>
                  <DesignText bold>Model</DesignText>
                  <EditableText placeholder={'Model'} editable={isRessource} onUpdate={onModelUpdate}>
                    {`${starship.model}`}
                  </EditableText>
                  <DesignText style={{ marginTop: 2 }} bold>
                    Starship class
                  </DesignText>
                  <EditableText placeholder={'Starship class'} editable={isRessource} onUpdate={onStarshipClassUpdate}>
                    {`${starship.starship_class}`}
                  </EditableText>
                  <DesignText style={{ marginTop: 2 }} bold>
                    Manufacturer
                  </DesignText>
                  <EditableText placeholder={'Manufacturer'} editable={isRessource} onUpdate={onManufacturerUpdate}>
                    {`${starship.manufacturer}`}
                  </EditableText>
                </Grid>
                <Grid style={{ ...styles.grid, ...{ justifyContent: 'start' } }} item xs={6}>
                  <DesignText bold>Created in</DesignText>
                  <EditableDate placeholder={'Creation'} editable={isRessource} date={new Date(starship.created)} onUpdate={onCreatedDateUpdate} />
                  <DesignText style={{ marginTop: 2 }} bold>
                    Edited in
                  </DesignText>
                  <EditableDate placeholder={'Edition'} editable={isRessource} date={new Date(starship.edited)} onUpdate={onEditedDateUpdate} />
                </Grid>
                <Grid item xs={12} container>
                  <Grid style={styles.grid} item xs={3}>
                    <DesignText bold>Megalight per hour</DesignText>
                    <EditableText placeholder={'MGLT'} editable={isRessource} onUpdate={onMgltUpdate}>
                      {`${starship.MGLT}`}
                    </EditableText>
                    <DesignText style={{ marginTop: 2 }} bold>
                      Hyperdrive rating
                    </DesignText>
                    <EditableText placeholder={'Hyperdrive rating'} editable={isRessource} onUpdate={onHyperdriveUpdate}>
                      {`${starship.hyperdrive_rating}`}
                    </EditableText>
                  </Grid>

                  <Grid style={styles.grid} item xs={3}>
                    <DesignText bold>Crew</DesignText>
                    <EditableText placeholder={'Crew'} editable={isRessource} onUpdate={onCrewUpdate}>
                      {`${starship.crew}`}
                    </EditableText>
                    <DesignText style={{ marginTop: 2 }} bold>
                      Passengers
                    </DesignText>
                    <EditableText placeholder={'Passengers'} editable={isRessource} onUpdate={onPassengersUpdate}>
                      {`${starship.passengers}`}
                    </EditableText>
                  </Grid>

                  <Grid style={styles.grid} item xs={3}>
                    <DesignText bold>Cargo capacity</DesignText>
                    <EditableText placeholder={'Cargo capacity'} editable={isRessource} onUpdate={onCargoCapacityUpdate}>
                      {`${starship.cargo_capacity}`}
                    </EditableText>
                    <DesignText style={{ marginTop: 2 }} bold>
                      Max speed
                    </DesignText>
                    <EditableText placeholder={'Speed'} editable={isRessource} onUpdate={onMaxSpeedUpdate}>
                      {`${starship.max_atmosphering_speed}`}
                    </EditableText>
                  </Grid>

                  <Grid style={styles.grid} item xs={3}>
                    <DesignText bold>Cost</DesignText>
                    <EditableText placeholder={'Cost'} editable={isRessource} onUpdate={onCostUpdate}>
                      {`${starship.cost_in_credits}`}
                    </EditableText>
                    <DesignText style={{ marginTop: 2 }} bold>
                      Consumables
                    </DesignText>
                    <EditableText placeholder={'Consumables'} editable={isRessource} onUpdate={onConsumablesUpdate}>
                      {`${starship.consumables}`}
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
                            {starship.films?.map((url) => (
                              <PageLink key={url} style={styles.link} category="films" url={url} />
                            ))}
                          </div>
                        ),
                      },
                      {
                        label: 'Pilots',
                        content: (
                          <div style={styles.linkContainer}>
                            {starship.pilots?.map((url) => (
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
    backgroundImage: `url(${ILLUSTRATIONS.starships})`,
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
