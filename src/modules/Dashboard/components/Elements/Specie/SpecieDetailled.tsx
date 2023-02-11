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
import { selectResources, updateRessource } from '../../../stores/resourceSlice'
import { SpecieType } from '../../../stores/types/SpecieType'
import EditableDate from '../../dashboard-system/EditableDate'
import EditableText from '../../dashboard-system/EditableText'
import PageLink from '../../dashboard-system/PageLink'
import CacheManager from '../CacheManager'

export default function SpecieDetailled({ isRessource }: { isRessource?: boolean }) {
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
  const specie: SpecieType = index ? (isRessource ? resources.species[parseInt(index)] : elements.species.elements[parseInt(index)]) : null

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
          category: 'species',
          index: parseInt(index),
          ressource: { ...specie, ...{ name: text } },
        }),
      )
    }
  }

  const onLanguageUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'species',
          index: parseInt(index),
          ressource: { ...specie, ...{ language: text } },
        }),
      )
    }
  }

  const onClassificationUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'species',
          index: parseInt(index),
          ressource: { ...specie, ...{ classification: text } },
        }),
      )
    }
  }

  const onDesignationUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'species',
          index: parseInt(index),
          ressource: { ...specie, ...{ designation: text } },
        }),
      )
    }
  }

  const onHeightUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'species',
          index: parseInt(index),
          ressource: { ...specie, ...{ average_height: text } },
        }),
      )
    }
  }

  const onLifespanceUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'species',
          index: parseInt(index),
          ressource: { ...specie, ...{ average_lifespan: text } },
        }),
      )
    }
  }

  const onSkinColorsUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'species',
          index: parseInt(index),
          ressource: { ...specie, ...{ skin_colors: text } },
        }),
      )
    }
  }

  const onEyeColorsUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'species',
          index: parseInt(index),
          ressource: { ...specie, ...{ eye_colors: text } },
        }),
      )
    }
  }

  const onHairColorUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'species',
          index: parseInt(index),
          ressource: { ...specie, ...{ hair_colors: text } },
        }),
      )
    }
  }

  const onCreatedDateUpdate = (date: Date) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'species',
          index: parseInt(index),
          ressource: { ...specie, ...{ created: date.toISOString() } },
        }),
      )
    }
  }

  const onEditedDateUpdate = (date: Date) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'species',
          index: parseInt(index),
          ressource: { ...specie, ...{ edited: date.toISOString() } },
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
                    {isRessource ? `Ressource - Specie` : `Element - Specie`}
                  </DesignHeader>
                  <EditableText placeholder={'Title'} editable={isRessource} onUpdate={onNameUpdate} variant="h5">
                    {`${specie.name}`}
                  </EditableText>
                </Grid>
                <Grid style={{ ...styles.grid, ...{ justifyContent: 'start' } }} item xs={6}>
                  <DesignText bold>Classification</DesignText>
                  <EditableText placeholder={'Classification'} editable={isRessource} onUpdate={onClassificationUpdate}>
                    {`${specie.classification}`}
                  </EditableText>
                  <DesignText style={{ marginTop: 2 }} bold>
                    Designation
                  </DesignText>
                  <EditableText placeholder={'Designation'} editable={isRessource} onUpdate={onDesignationUpdate}>
                    {`${specie.designation}`}
                  </EditableText>

                  <DesignText style={{ marginTop: 2 }} bold>
                    Average height
                  </DesignText>
                  <EditableText placeholder={'Average height'} editable={isRessource} onUpdate={onHeightUpdate}>
                    {`${specie.average_height}`}
                  </EditableText>

                  <DesignText style={{ marginTop: 2 }} bold>
                    Average lifespan
                  </DesignText>
                  <EditableText placeholder={'Average lifespan'} editable={isRessource} onUpdate={onLifespanceUpdate}>
                    {`${specie.average_lifespan}`}
                  </EditableText>
                </Grid>
                <Grid style={{ ...styles.grid, ...{ justifyContent: 'start' } }} item xs={6}>
                  <DesignText bold>Created in</DesignText>
                  <EditableDate placeholder={'Creation'} editable={isRessource} date={new Date(specie.created)} onUpdate={onCreatedDateUpdate} />
                  <DesignText style={{ marginTop: 2 }} bold>
                    Edited in
                  </DesignText>
                  <EditableDate placeholder={'Edition'} editable={isRessource} date={new Date(specie.edited)} onUpdate={onEditedDateUpdate} />
                  <DesignText style={{ marginTop: 2 }} bold>
                    Language
                  </DesignText>
                  <EditableText placeholder={'Language'} editable={isRessource} onUpdate={onLanguageUpdate}>
                    {`${specie.language}`}
                  </EditableText>
                  <DesignText style={{ marginTop: 2 }} bold>
                    Homeworld
                  </DesignText>
                  <PageLink style={styles.link} category="planets" url={specie.homeworld} />
                </Grid>
                <Grid item xs={12} container>
                  <Grid style={styles.grid} item xs={4}>
                    <DesignText bold>Skin colors</DesignText>
                    <EditableText placeholder={'Skin colors'} editable={isRessource} onUpdate={onSkinColorsUpdate}>
                      {`${specie.skin_colors}`}
                    </EditableText>
                  </Grid>
                  <Grid style={styles.grid} item xs={4}>
                    <DesignText bold>Eye colors</DesignText>
                    <EditableText placeholder={'Eye colors'} editable={isRessource} onUpdate={onEyeColorsUpdate}>
                      {`${specie.eye_colors}`}
                    </EditableText>
                  </Grid>
                  <Grid style={styles.grid} item xs={4}>
                    <DesignText bold>Hairs colors</DesignText>
                    <EditableText placeholder={'Hairs colors'} editable={isRessource} onUpdate={onHairColorUpdate}>
                      {`${specie.hair_colors}`}
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
                            {specie.films?.map((url) => (
                              <PageLink key={url} style={styles.link} category="films" url={url} />
                            ))}
                          </div>
                        ),
                      },
                      {
                        label: 'Characters',
                        content: (
                          <div style={styles.linkContainer}>
                            {specie.people?.map((url) => (
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
