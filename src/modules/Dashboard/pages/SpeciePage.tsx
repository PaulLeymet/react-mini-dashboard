import { Grid } from '@mui/material'
import { CSSProperties } from 'react'
import { useParams } from 'react-router-dom'
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
import { SpecieType } from '../stores/types/SpecieType'

export default function SpeciePage({ isResource }: { isResource?: boolean }) {
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
  const specie: SpecieType = index ? (isResource ? resources.species[parseInt(index)] : elements.species.elements[parseInt(index)]) : null

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
          category: 'species',
          index: parseInt(index),
          resource: { ...specie, ...{ name: text } },
        }),
      )
    }
  }

  const onLanguageUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateResource({
          category: 'species',
          index: parseInt(index),
          resource: { ...specie, ...{ language: text } },
        }),
      )
    }
  }

  const onClassificationUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateResource({
          category: 'species',
          index: parseInt(index),
          resource: { ...specie, ...{ classification: text } },
        }),
      )
    }
  }

  const onDesignationUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateResource({
          category: 'species',
          index: parseInt(index),
          resource: { ...specie, ...{ designation: text } },
        }),
      )
    }
  }

  const onHeightUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateResource({
          category: 'species',
          index: parseInt(index),
          resource: { ...specie, ...{ average_height: text } },
        }),
      )
    }
  }

  const onLifespanceUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateResource({
          category: 'species',
          index: parseInt(index),
          resource: { ...specie, ...{ average_lifespan: text } },
        }),
      )
    }
  }

  const onSkinColorsUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateResource({
          category: 'species',
          index: parseInt(index),
          resource: { ...specie, ...{ skin_colors: text } },
        }),
      )
    }
  }

  const onEyeColorsUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateResource({
          category: 'species',
          index: parseInt(index),
          resource: { ...specie, ...{ eye_colors: text } },
        }),
      )
    }
  }

  const onHairColorUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateResource({
          category: 'species',
          index: parseInt(index),
          resource: { ...specie, ...{ hair_colors: text } },
        }),
      )
    }
  }

  const onCreatedDateUpdate = (date: Date) => {
    if (index) {
      dispatch(
        updateResource({
          category: 'species',
          index: parseInt(index),
          resource: { ...specie, ...{ created: date.toISOString() } },
        }),
      )
    }
  }

  const onEditedDateUpdate = (date: Date) => {
    if (index) {
      dispatch(
        updateResource({
          category: 'species',
          index: parseInt(index),
          resource: { ...specie, ...{ edited: date.toISOString() } },
        }),
      )
    }
  }

  // =================
  // Render
  // =================
  return (
    <div style={styles.main}>
      {!!specie ? (
        <div style={styles.content}>
          <Grid style={styles.gridContainer} container>
            <Grid style={styles.gridIllustration} item sm={4} xs={0}></Grid>
            <Grid style={styles.gridInformations} item sm={8} xs={12}>
              <Grid style={styles.gridContainer} container spacing={4}>
                {/* SECTION TITLE */}
                <Grid style={styles.grid} item xs={12}>
                  <DesignHeader color={color.primary} variant="h5">
                    {isResource ? `Resource - Specie` : `Element - Specie`}
                  </DesignHeader>
                  <DesignEditableText placeholder={'Title'} editable={isResource} onUpdate={onNameUpdate} variant="h5">
                    {`${specie.name}`}
                  </DesignEditableText>
                </Grid>
                <Grid style={{ ...styles.grid, ...{ justifyContent: 'start' } }} item xs={6}>
                  <DesignText bold>Classification</DesignText>
                  <DesignEditableText placeholder={'Classification'} editable={isResource} onUpdate={onClassificationUpdate}>
                    {`${specie.classification}`}
                  </DesignEditableText>
                  <DesignText style={{ marginTop: 2 }} bold>
                    Designation
                  </DesignText>
                  <DesignEditableText placeholder={'Designation'} editable={isResource} onUpdate={onDesignationUpdate}>
                    {`${specie.designation}`}
                  </DesignEditableText>

                  <DesignText style={{ marginTop: 2 }} bold>
                    Average height
                  </DesignText>
                  <DesignEditableText placeholder={'Average height'} editable={isResource} onUpdate={onHeightUpdate}>
                    {`${specie.average_height}`}
                  </DesignEditableText>

                  <DesignText style={{ marginTop: 2 }} bold>
                    Average lifespan
                  </DesignText>
                  <DesignEditableText placeholder={'Average lifespan'} editable={isResource} onUpdate={onLifespanceUpdate}>
                    {`${specie.average_lifespan}`}
                  </DesignEditableText>
                </Grid>
                <Grid style={{ ...styles.grid, ...{ justifyContent: 'start' } }} item xs={6}>
                  <DesignText bold>Created in</DesignText>
                  <DesignEditableDate placeholder={'Creation'} editable={isResource} date={new Date(specie.created)} onUpdate={onCreatedDateUpdate} />
                  <DesignText style={{ marginTop: 2 }} bold>
                    Edited in
                  </DesignText>
                  <DesignEditableDate placeholder={'Edition'} editable={isResource} date={new Date(specie.edited)} onUpdate={onEditedDateUpdate} />
                  <DesignText style={{ marginTop: 2 }} bold>
                    Language
                  </DesignText>
                  <DesignEditableText placeholder={'Language'} editable={isResource} onUpdate={onLanguageUpdate}>
                    {`${specie.language}`}
                  </DesignEditableText>
                  <DesignText style={{ marginTop: 2 }} bold>
                    Homeworld
                  </DesignText>
                  <DesignPageLink style={styles.link} category="planets" url={specie.homeworld} />
                </Grid>
                <Grid item xs={12} container>
                  <Grid style={styles.grid} item xs={4}>
                    <DesignText bold>Skin colors</DesignText>
                    <DesignEditableText placeholder={'Skin colors'} editable={isResource} onUpdate={onSkinColorsUpdate}>
                      {`${specie.skin_colors}`}
                    </DesignEditableText>
                  </Grid>
                  <Grid style={styles.grid} item xs={4}>
                    <DesignText bold>Eye colors</DesignText>
                    <DesignEditableText placeholder={'Eye colors'} editable={isResource} onUpdate={onEyeColorsUpdate}>
                      {`${specie.eye_colors}`}
                    </DesignEditableText>
                  </Grid>
                  <Grid style={styles.grid} item xs={4}>
                    <DesignText bold>Hairs colors</DesignText>
                    <DesignEditableText placeholder={'Hairs colors'} editable={isResource} onUpdate={onHairColorUpdate}>
                      {`${specie.hair_colors}`}
                    </DesignEditableText>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <LinksTabs
                    tabs={[
                      {
                        category: 'films',
                        label: 'Films',
                        urls: specie.films,
                      },
                      {
                        category: 'people',
                        label: 'Characters',
                        urls: specie.people,
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
    backgroundImage: `url(${ILLUSTRATIONS.species})`,
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
