import { Grid } from '@mui/material'
import { CSSProperties } from 'react'
import { useParams } from 'react-router-dom'
import DesignEditableDate from '../../../design-system/DesignEditable/DesignEditableDate'
import DesignEditableText from '../../../design-system/DesignEditable/DesignEditableText'
import DesignPageLink from '../../../design-system/DesignEditable/DesignPageLink'
import DesignSpinner from '../../../design-system/DesignSpinner/DesignSpinner'
import DesignTabs from '../../../design-system/DesignTabs/DesignTabs'
import DesignHeader from '../../../design-system/DesignText/DesignHeader'
import DesignText from '../../../design-system/DesignText/DesignText'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { color } from '../../../theme/color'
import { ILLUSTRATIONS } from '../../../theme/illustrations'
import CacheManager from '../components/CacheManager'
import { selectElements } from '../stores/elementSlice'
import { selectResources, updateRessource } from '../stores/resourceSlice'
import { VehicleType } from '../stores/types/VehicleType'

export default function VehiclePage({ isRessource }: { isRessource?: boolean }) {
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
  const vehicle: VehicleType = index ? (isRessource ? resources.vehicles[parseInt(index)] : elements.vehicles.elements[parseInt(index)]) : null

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
          category: 'vehicles',
          index: parseInt(index),
          ressource: { ...vehicle, ...{ name: text } },
        }),
      )
    }
  }

  const onModelUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'vehicles',
          index: parseInt(index),
          ressource: { ...vehicle, ...{ model: text } },
        }),
      )
    }
  }

  const onVehicleClassUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'vehicles',
          index: parseInt(index),
          ressource: { ...vehicle, ...{ vehicle_class: text } },
        }),
      )
    }
  }

  const onManufacturerUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'vehicles',
          index: parseInt(index),
          ressource: { ...vehicle, ...{ manufacturer: text } },
        }),
      )
    }
  }

  const onMgltUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'vehicles',
          index: parseInt(index),
          ressource: { ...vehicle, ...{ MGLT: text } },
        }),
      )
    }
  }

  const onHyperdriveUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'vehicles',
          index: parseInt(index),
          ressource: { ...vehicle, ...{ hyperdrive_rating: text } },
        }),
      )
    }
  }

  const onCrewUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'vehicles',
          index: parseInt(index),
          ressource: { ...vehicle, ...{ crew: text } },
        }),
      )
    }
  }

  const onPassengersUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'vehicles',
          index: parseInt(index),
          ressource: { ...vehicle, ...{ passengers: text } },
        }),
      )
    }
  }

  const onCargoCapacityUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'vehicles',
          index: parseInt(index),
          ressource: { ...vehicle, ...{ cargo_capacity: text } },
        }),
      )
    }
  }

  const onMaxSpeedUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'vehicles',
          index: parseInt(index),
          ressource: { ...vehicle, ...{ max_atmosphering_speed: text } },
        }),
      )
    }
  }

  const onCostUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'vehicles',
          index: parseInt(index),
          ressource: { ...vehicle, ...{ cost_in_credits: text } },
        }),
      )
    }
  }

  const onConsumablesUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'vehicles',
          index: parseInt(index),
          ressource: { ...vehicle, ...{ consumables: text } },
        }),
      )
    }
  }

  const onCreatedDateUpdate = (date: Date) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'vehicles',
          index: parseInt(index),
          ressource: { ...vehicle, ...{ created: date.toISOString() } },
        }),
      )
    }
  }

  const onEditedDateUpdate = (date: Date) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'vehicles',
          index: parseInt(index),
          ressource: { ...vehicle, ...{ edited: date.toISOString() } },
        }),
      )
    }
  }

  // =================
  // Render
  // =================
  return (
    <div style={styles.main}>
      {!!vehicle ? (
        <div style={styles.content}>
          <Grid style={styles.gridContainer} container>
            <Grid style={styles.gridIllustration} item sm={4} xs={0}></Grid>
            <Grid style={styles.gridInformations} item sm={8} xs={12}>
              <Grid style={styles.gridContainer} container spacing={4}>
                {/* SECTION TITLE */}
                <Grid style={styles.grid} item xs={12}>
                  <DesignHeader color={color.primary} variant="h5">
                    {isRessource ? `Ressource - Vehicle` : `Element - Vehicle`}
                  </DesignHeader>
                  <DesignEditableText placeholder={'Title'} editable={isRessource} onUpdate={onNameUpdate} variant="h5">
                    {`${vehicle.name}`}
                  </DesignEditableText>
                </Grid>
                <Grid style={{ ...styles.grid, ...{ justifyContent: 'start' } }} item xs={6}>
                  <DesignText bold>Model</DesignText>
                  <DesignEditableText placeholder={'Model'} editable={isRessource} onUpdate={onModelUpdate}>
                    {`${vehicle.model}`}
                  </DesignEditableText>
                  <DesignText style={{ marginTop: 2 }} bold>
                    Vehicle class
                  </DesignText>
                  <DesignEditableText placeholder={'Vehicle class'} editable={isRessource} onUpdate={onVehicleClassUpdate}>
                    {`${vehicle.vehicle_class}`}
                  </DesignEditableText>
                  <DesignText style={{ marginTop: 2 }} bold>
                    Manufacturer
                  </DesignText>
                  <DesignEditableText placeholder={'Manufacturer'} editable={isRessource} onUpdate={onManufacturerUpdate}>
                    {`${vehicle.manufacturer}`}
                  </DesignEditableText>
                </Grid>
                <Grid style={{ ...styles.grid, ...{ justifyContent: 'start' } }} item xs={6}>
                  <DesignText bold>Created in</DesignText>
                  <DesignEditableDate
                    placeholder={'Creation'}
                    editable={isRessource}
                    date={new Date(vehicle.created)}
                    onUpdate={onCreatedDateUpdate}
                  />
                  <DesignText style={{ marginTop: 2 }} bold>
                    Edited in
                  </DesignText>
                  <DesignEditableDate placeholder={'Edition'} editable={isRessource} date={new Date(vehicle.edited)} onUpdate={onEditedDateUpdate} />
                </Grid>
                <Grid item xs={12} container>
                  <Grid style={styles.grid} item xs={4}>
                    <DesignText bold>Crew</DesignText>
                    <DesignEditableText placeholder={'Crew'} editable={isRessource} onUpdate={onCrewUpdate}>
                      {`${vehicle.crew}`}
                    </DesignEditableText>
                    <DesignText style={{ marginTop: 2 }} bold>
                      Passengers
                    </DesignText>
                    <DesignEditableText placeholder={'Passengers'} editable={isRessource} onUpdate={onPassengersUpdate}>
                      {`${vehicle.passengers}`}
                    </DesignEditableText>
                  </Grid>

                  <Grid style={styles.grid} item xs={4}>
                    <DesignText bold>Cargo capacity</DesignText>
                    <DesignEditableText placeholder={'Cargo capacity'} editable={isRessource} onUpdate={onCargoCapacityUpdate}>
                      {`${vehicle.cargo_capacity}`}
                    </DesignEditableText>
                    <DesignText style={{ marginTop: 2 }} bold>
                      Max speed
                    </DesignText>
                    <DesignEditableText placeholder={'Speed'} editable={isRessource} onUpdate={onMaxSpeedUpdate}>
                      {`${vehicle.max_atmosphering_speed}`}
                    </DesignEditableText>
                  </Grid>

                  <Grid style={styles.grid} item xs={4}>
                    <DesignText bold>Cost</DesignText>
                    <DesignEditableText placeholder={'Cost'} editable={isRessource} onUpdate={onCostUpdate}>
                      {`${vehicle.cost_in_credits}`}
                    </DesignEditableText>
                    <DesignText style={{ marginTop: 2 }} bold>
                      Consumables
                    </DesignText>
                    <DesignEditableText placeholder={'Consumables'} editable={isRessource} onUpdate={onConsumablesUpdate}>
                      {`${vehicle.consumables}`}
                    </DesignEditableText>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <DesignTabs
                    tabs={[
                      {
                        label: 'Films',
                        content: (
                          <div style={styles.linkContainer}>
                            {vehicle.films?.map((url) => (
                              <DesignPageLink key={url} style={styles.link} category="films" url={url} />
                            ))}
                          </div>
                        ),
                      },
                      {
                        label: 'Pilots',
                        content: (
                          <div style={styles.linkContainer}>
                            {vehicle.pilots?.map((url) => (
                              <DesignPageLink key={url} style={styles.link} category="people" url={url} />
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
    backgroundImage: `url(${ILLUSTRATIONS.vehicles})`,
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
