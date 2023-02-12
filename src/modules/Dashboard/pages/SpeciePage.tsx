import { Grid } from '@mui/material'
import { CSSProperties } from 'react'
import { useParams } from 'react-router-dom'
import DesignBox from '../../../design-system/DesignBox/DesignBox'
import DesignEditableDate from '../../../design-system/DesignEditable/DesignEditableDate'
import DesignEditableText from '../../../design-system/DesignEditable/DesignEditableText'
import DesignPageLink from '../../../design-system/DesignEditable/DesignPageLink'
import DesignSpinner from '../../../design-system/DesignSpinner/DesignSpinner'
import DesignHeader from '../../../design-system/DesignText/DesignHeader'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { color } from '../../../theme/color'
import { ILLUSTRATIONS } from '../../../theme/illustrations'
import CacheManager from '../components/CacheManager'
import DetailPageSection from '../components/DetailPageSection'
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
    <DesignBox style={styles.main}>
      {!!specie ? (
        <DesignBox>
          <Grid style={styles.gridContainer} container>
            <Grid style={styles.gridIllustration} item sm={4} xs={0}></Grid>
            <Grid style={styles.gridInformations} item sm={8} xs={12}>
              <Grid style={styles.gridContainer} container spacing={4}>
                {/* SECTION TITLE */}
                <Grid style={styles.grid} item xs={12}>
                  <DesignHeader style={styles.header} textAlign='left' color={color.primary} variant='h5'>
                    {isResource ? `Resource - Specie` : `Element - Specie`}
                  </DesignHeader>
                  <DetailPageSection>
                    <DesignEditableText label='Name' placeholder={'Title'} editable={isResource} onUpdate={onNameUpdate}>
                      {`${specie.name}`}
                    </DesignEditableText>
                  </DetailPageSection>
                </Grid>
                <Grid style={{ ...styles.grid, ...{ justifyContent: 'start' } }} item xs={6}>
                  <DetailPageSection>
                    <DesignEditableText label='Classification' placeholder={'Classification'} editable={isResource} onUpdate={onClassificationUpdate}>
                      {`${specie.classification}`}
                    </DesignEditableText>
                    <DesignEditableText label='Designation' placeholder={'Designation'} editable={isResource} onUpdate={onDesignationUpdate}>
                      {`${specie.designation}`}
                    </DesignEditableText>
                    <DesignEditableText label='Average height' placeholder={'Average height'} editable={isResource} onUpdate={onHeightUpdate}>
                      {`${specie.average_height}`}
                    </DesignEditableText>
                    <DesignEditableText label='Average lifespan' placeholder={'Average lifespan'} editable={isResource} onUpdate={onLifespanceUpdate}>
                      {`${specie.average_lifespan}`}
                    </DesignEditableText>
                  </DetailPageSection>
                </Grid>
                <Grid style={{ ...styles.grid, ...{ justifyContent: 'start' } }} item xs={6}>
                  <DetailPageSection>
                    <DesignEditableDate
                      label='Created in'
                      placeholder={'Creation'}
                      editable={isResource}
                      date={new Date(specie.created)}
                      onUpdate={onCreatedDateUpdate}
                    />
                    <DesignEditableDate
                      label='Edited in'
                      placeholder={'Edition'}
                      editable={isResource}
                      date={new Date(specie.edited)}
                      onUpdate={onEditedDateUpdate}
                    />
                    <DesignEditableText label='Language' placeholder={'Language'} editable={isResource} onUpdate={onLanguageUpdate}>
                      {`${specie.language}`}
                    </DesignEditableText>
                    <DesignPageLink label='Homeworld' category='planets' url={specie.homeworld} />
                  </DetailPageSection>
                </Grid>
                <Grid item xs={12} container>
                  <DetailPageSection>
                    <Grid style={styles.grid} item xs={4}>
                      <DesignEditableText label='Skin colors' placeholder={'Skin colors'} editable={isResource} onUpdate={onSkinColorsUpdate}>
                        {`${specie.skin_colors}`}
                      </DesignEditableText>
                    </Grid>
                    <Grid style={styles.grid} item xs={4}>
                      <DesignEditableText label='Eye colors' placeholder={'Eye colors'} editable={isResource} onUpdate={onEyeColorsUpdate}>
                        {`${specie.eye_colors}`}
                      </DesignEditableText>
                    </Grid>
                    <Grid style={styles.grid} item xs={4}>
                      <DesignEditableText label='Hairs colors' placeholder={'Hairs colors'} editable={isResource} onUpdate={onHairColorUpdate}>
                        {`${specie.hair_colors}`}
                      </DesignEditableText>
                    </Grid>
                  </DetailPageSection>
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
