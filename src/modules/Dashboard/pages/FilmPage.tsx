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
import { FilmType } from '../stores/types/FilmType'

export default function FilmPage({ isResource }: { isResource?: boolean }) {
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
  const film: FilmType = index ? (isResource ? resources.films[parseInt(index)] : elements.films.elements[parseInt(index)]) : null

  // =================
  // Hooks
  // =================

  // =================
  // Methods
  // =================
  const onTitleUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateResource({
          category: 'films',
          index: parseInt(index),
          resource: { ...film, ...{ title: text } },
        }),
      )
    }
  }

  const onDirectorUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateResource({
          category: 'films',
          index: parseInt(index),
          resource: { ...film, ...{ director: text } },
        }),
      )
    }
  }

  const onProducerUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateResource({
          category: 'films',
          index: parseInt(index),
          resource: { ...film, ...{ producer: text } },
        }),
      )
    }
  }

  const onCrawlUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateResource({
          category: 'films',
          index: parseInt(index),
          resource: { ...film, ...{ opening_crawl: text } },
        }),
      )
    }
  }

  const onCreatedDateUpdate = (date: Date) => {
    if (index) {
      dispatch(
        updateResource({
          category: 'films',
          index: parseInt(index),
          resource: { ...film, ...{ created: date.toISOString() } },
        }),
      )
    }
  }

  const onReleasedDateUpdate = (date: Date) => {
    if (index) {
      dispatch(
        updateResource({
          category: 'films',
          index: parseInt(index),
          resource: { ...film, ...{ release_date: date.toISOString() } },
        }),
      )
    }
  }

  // =================
  // Render
  // =================
  return (
    <div style={styles.main}>
      {!!film ? (
        <DesignBox>
          <Grid style={styles.gridContainer} container>
            <Grid style={styles.gridIllustration} item sm={4} xs={0}></Grid>
            <Grid style={styles.gridInformations} item sm={8} xs={12}>
              <Grid style={styles.gridContainer} container spacing={4}>
                {/* SECTION TITLE */}
                <Grid style={styles.grid} item xs={12}>
                  <DesignHeader textAlign="left" color={color.primary} variant="h5">
                    {isResource ? `Resource - Film` : `Element - Film`}
                  </DesignHeader>
                  <DesignEditableText label="Title" placeholder={'Title'} editable={isResource} onUpdate={onTitleUpdate}>
                    {isResource ? `${film.title}` : `Episode ${film.episode_id} - ${film.title}`}
                  </DesignEditableText>
                </Grid>
                <Grid style={styles.grid} item xs={6}>
                  <DesignEditableText
                    label="Directed by"
                    placeholder="Director"
                    editable={isResource}
                    onUpdate={onDirectorUpdate}
                  >{`${film.director}`}</DesignEditableText>

                  <DesignEditableText
                    label={'Produced by'}
                    placeholder={'Producer'}
                    editable={isResource}
                    onUpdate={onProducerUpdate}
                  >{`${film.producer}`}</DesignEditableText>
                </Grid>
                <Grid style={styles.grid} item xs={6}>
                  <DesignEditableDate
                    label="Created in"
                    placeholder={'Creation'}
                    editable={isResource}
                    date={new Date(film.created)}
                    onUpdate={onCreatedDateUpdate}
                  />
                  <DesignEditableDate
                    label="Released in"
                    placeholder={'Release'}
                    editable={isResource}
                    date={new Date(film.release_date)}
                    onUpdate={onReleasedDateUpdate}
                  />
                </Grid>
                <Grid item xs={12}>
                  <DesignEditableText
                    label="Opening crawl"
                    style={{ display: 'flex', flexGrow: 1 }}
                    placeholder={'Opening crawl'}
                    editable={isResource}
                    onUpdate={onCrawlUpdate}
                  >{`${film.opening_crawl}`}</DesignEditableText>
                </Grid>
                <Grid item xs={12}>
                  <LinksTabs
                    tabs={[
                      {
                        category: 'people',
                        label: 'People',
                        urls: film.characters,
                      },
                      {
                        category: 'planets',
                        label: 'Planets',
                        urls: film.planets,
                      },
                      {
                        category: 'species',
                        label: 'Species',
                        urls: film.species,
                      },
                      {
                        category: 'starships',
                        label: 'Starships',
                        urls: film.starships,
                      },
                      {
                        category: 'vehicles',
                        label: 'Vehicles',
                        urls: film.vehicles,
                      },
                    ]}
                  />
                </Grid>

                {/* SECTION DATA */}
                <Grid style={styles.gridInformations} item xs={12}></Grid>
              </Grid>
            </Grid>
          </Grid>
          <CacheManager categories={['people', 'planets', 'species', 'starships', 'vehicles']} />
        </DesignBox>
      ) : (
        <DesignBox style={styles.spinnerContent}>
          <DesignSpinner />
        </DesignBox>
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
