import { Grid } from '@mui/material'
import { CSSProperties } from 'react'
import { useParams } from 'react-router-dom'
import DesignBox from '../../../design-system/DesignBox/DesignBox'
import DesignEditableDate from '../../../design-system/DesignEditable/DesignEditableDate'
import DesignEditableText from '../../../design-system/DesignEditable/DesignEditableText'
import DesignPageLink from '../../../design-system/DesignEditable/DesignPageLink'
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
import { PeopleType } from '../stores/types/PeopleType'

export default function PeoplePage({ isResource }: { isResource?: boolean }) {
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
  const people: PeopleType = index ? (isResource ? resources.people[parseInt(index)] : elements.people.elements[parseInt(index)]) : null

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
          category: 'people',
          index: parseInt(index),
          resource: { ...people, ...{ name: text } },
        }),
      )
    }
  }

  const onBirthYearUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateResource({
          category: 'people',
          index: parseInt(index),
          resource: { ...people, ...{ birth_year: text } },
        }),
      )
    }
  }

  const onGenderUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateResource({
          category: 'people',
          index: parseInt(index),
          resource: { ...people, ...{ gender: text } },
        }),
      )
    }
  }

  const onEyeColorUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateResource({
          category: 'people',
          index: parseInt(index),
          resource: { ...people, ...{ eye_color: text } },
        }),
      )
    }
  }

  const onHairColorUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateResource({
          category: 'people',
          index: parseInt(index),
          resource: { ...people, ...{ hair_color: text } },
        }),
      )
    }
  }

  const onHeightUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateResource({
          category: 'people',
          index: parseInt(index),
          resource: { ...people, ...{ height: text } },
        }),
      )
    }
  }

  const onMassUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateResource({
          category: 'people',
          index: parseInt(index),
          resource: { ...people, ...{ mass: text } },
        }),
      )
    }
  }

  const onCreatedDateUpdate = (date: Date) => {
    if (index) {
      dispatch(
        updateResource({
          category: 'people',
          index: parseInt(index),
          resource: { ...people, ...{ created: date.toISOString() } },
        }),
      )
    }
  }

  const onEditedDateUpdate = (date: Date) => {
    if (index) {
      dispatch(
        updateResource({
          category: 'people',
          index: parseInt(index),
          resource: { ...people, ...{ edited: date.toISOString() } },
        }),
      )
    }
  }

  // =================
  // Render
  // =================
  return (
    <DesignBox style={styles.main}>
      {!!people ? (
        <DesignBox>
          <Grid style={styles.gridContainer} container>
            <Grid style={styles.gridIllustration} item sm={4} xs={0}></Grid>
            <Grid style={styles.gridInformations} item sm={8} xs={12}>
              <Grid style={styles.gridContainer} container spacing={4}>
                {/* SECTION TITLE */}
                <Grid style={styles.grid} item xs={12}>
                  <DesignHeader textAlign="left" color={color.primary} variant="h5">
                    {isResource ? `Resource - People` : `Element - People`}
                  </DesignHeader>
                  <DesignEditableText label="Name" placeholder={'Name'} editable={isResource} onUpdate={onNameUpdate}>
                    {`${people.name}`}
                  </DesignEditableText>
                </Grid>
                <Grid style={{ ...styles.grid, ...{ justifyContent: 'start' } }} item xs={6}>
                  <DesignEditableText label="Gender" placeholder={'Gender'} editable={isResource} onUpdate={onGenderUpdate}>
                    {`${people.gender}`}
                  </DesignEditableText>
                  <DesignEditableText label="Height" placeholder={'Height'} editable={isResource} onUpdate={onHeightUpdate}>
                    {`${people.height}`}
                  </DesignEditableText>
                  <DesignEditableText label="Mass" placeholder={'Mass'} editable={isResource} onUpdate={onMassUpdate}>
                    {`${people.mass}`}
                  </DesignEditableText>
                  <DesignEditableText label=" Eye color" placeholder={'Eye color'} editable={isResource} onUpdate={onEyeColorUpdate}>
                    {`${people.eye_color}`}
                  </DesignEditableText>
                  <DesignEditableText label=" Hair color" placeholder={'Hair color'} editable={isResource} onUpdate={onHairColorUpdate}>
                    {`${people.hair_color}`}
                  </DesignEditableText>
                </Grid>
                <Grid style={{ ...styles.grid, ...{ justifyContent: 'start' } }} item xs={6}>
                  <DesignEditableDate
                    label="Created in"
                    placeholder={'Creation'}
                    editable={isResource}
                    date={new Date(people.created)}
                    onUpdate={onCreatedDateUpdate}
                  />
                  <DesignEditableDate
                    label="Edited in"
                    placeholder={'Edition'}
                    editable={isResource}
                    date={new Date(people.edited)}
                    onUpdate={onEditedDateUpdate}
                  />
                  <DesignEditableText label="Birth year" placeholder={'Birth'} editable={isResource} onUpdate={onBirthYearUpdate}>
                    {`${people.birth_year}`}
                  </DesignEditableText>
                  <DesignText style={{ marginTop: 2 }} bold>
                    Homeworld
                  </DesignText>
                  <DesignPageLink style={styles.link} category="planets" url={people.homeworld} />
                </Grid>

                <Grid item xs={12}>
                  <LinksTabs
                    tabs={[
                      {
                        category: 'films',
                        label: 'Films',
                        urls: people.films,
                      },
                      {
                        category: 'species',
                        label: 'Species',
                        urls: people.species,
                      },
                      {
                        category: 'starships',
                        label: 'Starships',
                        urls: people.starships,
                      },
                      {
                        category: 'vehicles',
                        label: 'Vehicles',
                        urls: people.vehicles,
                      },
                    ]}
                  />
                </Grid>

                {/* SECTION DATA */}
                <Grid style={styles.gridInformations} item xs={12}></Grid>
              </Grid>
            </Grid>
          </Grid>
          <CacheManager categories={['films', 'planets', 'species', 'starships', 'vehicles']} />
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
