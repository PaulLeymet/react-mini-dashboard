import { Grid } from '@mui/material'
import { CSSProperties } from 'react'
import { useParams } from 'react-router-dom'
import DesignBox from '../../../design-system/DesignBox/DesignBox'
import DesignEditableDate from '../../../design-system/DesignEditable/DesignEditableDate'
import DesignEditableText from '../../../design-system/DesignEditable/DesignEditableText'
import DesignSpinner from '../../../design-system/DesignSpinner/DesignSpinner'
import DesignHeader from '../../../design-system/DesignText/DesignHeader'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { color } from '../../../theme/color'
import { ILLUSTRATIONS } from '../../../theme/illustrations'
import CacheManager from '../components/CacheManager'
import LinksTabs from '../components/LinksTabs'
import { selectElements } from '../stores/elementSlice'
import { selectResources, updateResource } from '../stores/resourceSlice'
import { StarshipType } from '../stores/types/StarshipType'

export default function StarshipPage({ isResource }: { isResource?: boolean }) {
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
  const starship: StarshipType = index ? (isResource ? resources.starships[parseInt(index)] : elements.starships.elements[parseInt(index)]) : null

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
          category: 'starships',
          index: parseInt(index),
          resource: { ...starship, ...{ name: text } },
        }),
      )
    }
  }

  const onModelUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateResource({
          category: 'starships',
          index: parseInt(index),
          resource: { ...starship, ...{ model: text } },
        }),
      )
    }
  }

  const onStarshipClassUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateResource({
          category: 'starships',
          index: parseInt(index),
          resource: { ...starship, ...{ starship_class: text } },
        }),
      )
    }
  }

  const onManufacturerUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateResource({
          category: 'starships',
          index: parseInt(index),
          resource: { ...starship, ...{ manufacturer: text } },
        }),
      )
    }
  }

  const onMgltUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateResource({
          category: 'starships',
          index: parseInt(index),
          resource: { ...starship, ...{ MGLT: text } },
        }),
      )
    }
  }

  const onHyperdriveUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateResource({
          category: 'starships',
          index: parseInt(index),
          resource: { ...starship, ...{ hyperdrive_rating: text } },
        }),
      )
    }
  }

  const onCrewUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateResource({
          category: 'starships',
          index: parseInt(index),
          resource: { ...starship, ...{ crew: text } },
        }),
      )
    }
  }

  const onPassengersUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateResource({
          category: 'starships',
          index: parseInt(index),
          resource: { ...starship, ...{ passengers: text } },
        }),
      )
    }
  }

  const onCargoCapacityUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateResource({
          category: 'starships',
          index: parseInt(index),
          resource: { ...starship, ...{ cargo_capacity: text } },
        }),
      )
    }
  }

  const onMaxSpeedUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateResource({
          category: 'starships',
          index: parseInt(index),
          resource: { ...starship, ...{ max_atmosphering_speed: text } },
        }),
      )
    }
  }

  const onCostUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateResource({
          category: 'starships',
          index: parseInt(index),
          resource: { ...starship, ...{ cost_in_credits: text } },
        }),
      )
    }
  }

  const onConsumablesUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateResource({
          category: 'starships',
          index: parseInt(index),
          resource: { ...starship, ...{ consumables: text } },
        }),
      )
    }
  }

  const onCreatedDateUpdate = (date: Date) => {
    if (index) {
      dispatch(
        updateResource({
          category: 'starships',
          index: parseInt(index),
          resource: { ...starship, ...{ created: date.toISOString() } },
        }),
      )
    }
  }

  const onEditedDateUpdate = (date: Date) => {
    if (index) {
      dispatch(
        updateResource({
          category: 'starships',
          index: parseInt(index),
          resource: { ...starship, ...{ edited: date.toISOString() } },
        }),
      )
    }
  }

  // =================
  // Render
  // =================
  return (
    <DesignBox style={styles.main}>
      {!!starship ? (
        <DesignBox>
          <Grid style={styles.gridContainer} container>
            <Grid style={styles.gridIllustration} item sm={4} xs={0}></Grid>
            <Grid style={styles.gridInformations} item sm={8} xs={12}>
              <Grid style={styles.gridContainer} container spacing={4}>
                {/* SECTION TITLE */}
                <Grid style={styles.grid} item xs={12}>
                  <DesignHeader textAlign="left" color={color.primary} variant="h5">
                    {isResource ? `Resource - Starship` : `Element - Starship`}
                  </DesignHeader>
                  <DesignEditableText label="Name" placeholder={'Title'} editable={isResource} onUpdate={onNameUpdate}>
                    {`${starship.name}`}
                  </DesignEditableText>
                </Grid>
                <Grid style={{ ...styles.grid, ...{ justifyContent: 'start' } }} item xs={6}>
                  <DesignEditableText label="Model" placeholder={'Model'} editable={isResource} onUpdate={onModelUpdate}>
                    {`${starship.model}`}
                  </DesignEditableText>
                  <DesignEditableText label="Starship class" placeholder={'Starship class'} editable={isResource} onUpdate={onStarshipClassUpdate}>
                    {`${starship.starship_class}`}
                  </DesignEditableText>
                  <DesignEditableText label="Manufacturer" placeholder={'Manufacturer'} editable={isResource} onUpdate={onManufacturerUpdate}>
                    {`${starship.manufacturer}`}
                  </DesignEditableText>
                </Grid>
                <Grid style={{ ...styles.grid, ...{ justifyContent: 'start' } }} item xs={6}>
                  <DesignEditableDate
                    label="Created in"
                    placeholder={'Creation'}
                    editable={isResource}
                    date={new Date(starship.created)}
                    onUpdate={onCreatedDateUpdate}
                  />
                  <DesignEditableDate
                    label="Edited in"
                    placeholder={'Edition'}
                    editable={isResource}
                    date={new Date(starship.edited)}
                    onUpdate={onEditedDateUpdate}
                  />
                </Grid>
                <Grid item xs={12} container>
                  <Grid style={styles.grid} item xs={3}>
                    <DesignEditableText label="Megalight per hour" placeholder={'MGLT'} editable={isResource} onUpdate={onMgltUpdate}>
                      {`${starship.MGLT}`}
                    </DesignEditableText>
                    <DesignEditableText
                      label="Hyperdrive rating"
                      placeholder={'Hyperdrive rating'}
                      editable={isResource}
                      onUpdate={onHyperdriveUpdate}
                    >
                      {`${starship.hyperdrive_rating}`}
                    </DesignEditableText>
                  </Grid>
                  <Grid style={styles.grid} item xs={3}>
                    <DesignEditableText label="Crew" placeholder={'Crew'} editable={isResource} onUpdate={onCrewUpdate}>
                      {`${starship.crew}`}
                    </DesignEditableText>
                    <DesignEditableText label="Passengers" placeholder={'Passengers'} editable={isResource} onUpdate={onPassengersUpdate}>
                      {`${starship.passengers}`}
                    </DesignEditableText>
                  </Grid>
                  <Grid style={styles.grid} item xs={3}>
                    <DesignEditableText label="Cargo capacity" placeholder={'Cargo capacity'} editable={isResource} onUpdate={onCargoCapacityUpdate}>
                      {`${starship.cargo_capacity}`}
                    </DesignEditableText>
                    <DesignEditableText label="Max speed" placeholder={'Speed'} editable={isResource} onUpdate={onMaxSpeedUpdate}>
                      {`${starship.max_atmosphering_speed}`}
                    </DesignEditableText>
                  </Grid>
                  <Grid style={styles.grid} item xs={3}>
                    <DesignEditableText label="Cost" placeholder={'Cost'} editable={isResource} onUpdate={onCostUpdate}>
                      {`${starship.cost_in_credits}`}
                    </DesignEditableText>
                    <DesignEditableText label="Consumables" placeholder={'Consumables'} editable={isResource} onUpdate={onConsumablesUpdate}>
                      {`${starship.consumables}`}
                    </DesignEditableText>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <LinksTabs
                    tabs={[
                      {
                        category: 'films',
                        label: 'Films',
                        urls: starship.films,
                      },
                      {
                        category: 'people',
                        label: 'Pilots',
                        urls: starship.pilots,
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
}
