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
import { PeopleType } from '../stores/types/PeopleType'

export default function PeoplePage({ isRessource }: { isRessource?: boolean }) {
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
  const people: PeopleType = index ? (isRessource ? resources.people[parseInt(index)] : elements.people.elements[parseInt(index)]) : null

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
          category: 'people',
          index: parseInt(index),
          ressource: { ...people, ...{ name: text } },
        }),
      )
    }
  }

  const onBirthYearUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'people',
          index: parseInt(index),
          ressource: { ...people, ...{ birth_year: text } },
        }),
      )
    }
  }

  const onGenderUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'people',
          index: parseInt(index),
          ressource: { ...people, ...{ gender: text } },
        }),
      )
    }
  }

  const onEyeColorUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'people',
          index: parseInt(index),
          ressource: { ...people, ...{ eye_color: text } },
        }),
      )
    }
  }

  const onHairColorUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'people',
          index: parseInt(index),
          ressource: { ...people, ...{ hair_color: text } },
        }),
      )
    }
  }

  const onHeightUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'people',
          index: parseInt(index),
          ressource: { ...people, ...{ height: text } },
        }),
      )
    }
  }

  const onMassUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'people',
          index: parseInt(index),
          ressource: { ...people, ...{ mass: text } },
        }),
      )
    }
  }

  const onCreatedDateUpdate = (date: Date) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'people',
          index: parseInt(index),
          ressource: { ...people, ...{ created: date.toISOString() } },
        }),
      )
    }
  }

  const onEditedDateUpdate = (date: Date) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'people',
          index: parseInt(index),
          ressource: { ...people, ...{ edited: date.toISOString() } },
        }),
      )
    }
  }

  // =================
  // Render
  // =================
  return (
    <div style={styles.main}>
      {!!people ? (
        <div style={styles.content}>
          <Grid style={styles.gridContainer} container>
            <Grid style={styles.gridIllustration} item sm={4} xs={0}></Grid>
            <Grid style={styles.gridInformations} item sm={8} xs={12}>
              <Grid style={styles.gridContainer} container spacing={4}>
                {/* SECTION TITLE */}
                <Grid style={styles.grid} item xs={12}>
                  <DesignHeader color={color.primary} variant="h5">
                    {isRessource ? `Ressource - People` : `Element - People`}
                  </DesignHeader>
                  <DesignEditableText placeholder={'Title'} editable={isRessource} onUpdate={onNameUpdate} variant="h5">
                    {`${people.name}`}
                  </DesignEditableText>
                </Grid>
                <Grid style={{ ...styles.grid, ...{ justifyContent: 'start' } }} item xs={6}>
                  <DesignText bold>Gender</DesignText>
                  <DesignEditableText placeholder={'Gender'} editable={isRessource} onUpdate={onGenderUpdate}>
                    {`${people.gender}`}
                  </DesignEditableText>
                  <DesignText style={{ marginTop: 2 }} bold>
                    Height
                  </DesignText>
                  <DesignEditableText placeholder={'Height'} editable={isRessource} onUpdate={onHeightUpdate}>
                    {`${people.height}`}
                  </DesignEditableText>
                  <DesignText style={{ marginTop: 2 }} bold>
                    Mass
                  </DesignText>
                  <DesignEditableText placeholder={'Mass'} editable={isRessource} onUpdate={onMassUpdate}>
                    {`${people.mass}`}
                  </DesignEditableText>
                  <DesignText style={{ marginTop: 2 }} bold>
                    Eye color
                  </DesignText>
                  <DesignEditableText placeholder={'Eye color'} editable={isRessource} onUpdate={onEyeColorUpdate}>
                    {`${people.eye_color}`}
                  </DesignEditableText>
                  <DesignText style={{ marginTop: 2 }} bold>
                    Hair color
                  </DesignText>
                  <DesignEditableText placeholder={'Hair color'} editable={isRessource} onUpdate={onHairColorUpdate}>
                    {`${people.hair_color}`}
                  </DesignEditableText>
                </Grid>
                <Grid style={{ ...styles.grid, ...{ justifyContent: 'start' } }} item xs={6}>
                  <DesignText bold>Created in</DesignText>
                  <DesignEditableDate
                    placeholder={'Creation'}
                    editable={isRessource}
                    date={new Date(people.created)}
                    onUpdate={onCreatedDateUpdate}
                  />
                  <DesignText style={{ marginTop: 2 }} bold>
                    Edited in
                  </DesignText>
                  <DesignEditableDate placeholder={'Edition'} editable={isRessource} date={new Date(people.edited)} onUpdate={onEditedDateUpdate} />

                  <DesignText style={{ marginTop: 2 }} bold>
                    Birth year
                  </DesignText>
                  <DesignEditableText placeholder={'Birth'} editable={isRessource} onUpdate={onBirthYearUpdate}>
                    {`${people.birth_year}`}
                  </DesignEditableText>
                  <DesignText style={{ marginTop: 2 }} bold>
                    Homeworld
                  </DesignText>
                  <DesignPageLink style={styles.link} category="planets" url={people.homeworld} />
                </Grid>

                <Grid item xs={12}>
                  <DesignTabs
                    tabs={[
                      {
                        label: 'Films',
                        content: (
                          <div style={styles.linkContainer}>
                            {people.films?.map((url) => (
                              <DesignPageLink key={url} style={styles.link} category="films" url={url} />
                            ))}
                          </div>
                        ),
                      },
                      {
                        label: 'Species',
                        content: (
                          <div style={styles.linkContainer}>
                            {people.species?.map((url) => (
                              <DesignPageLink key={url} style={styles.link} category="species" url={url} />
                            ))}
                          </div>
                        ),
                      },
                      {
                        label: 'Starships',
                        content: (
                          <div style={styles.linkContainer}>
                            {people.starships?.map((url) => (
                              <DesignPageLink key={url} style={styles.link} category="starships" url={url} />
                            ))}
                          </div>
                        ),
                      },
                      {
                        label: 'Vehicles',
                        content: (
                          <div style={styles.linkContainer}>
                            {people.vehicles?.map((url) => (
                              <DesignPageLink key={url} style={styles.link} category="vehicles" url={url} />
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
          <CacheManager categories={['films', 'planets', 'species', 'starships', 'vehicles']} />
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
    backgroundImage: `url(${ILLUSTRATIONS.people})`,
    backgroundSize: 'cover',
    opacity: 0.8,
    transform: 'scaleX(-1)',
    backgroundPositionX: -300,
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
