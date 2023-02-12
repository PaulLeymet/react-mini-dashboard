import { Grid } from '@mui/material'
import { CSSProperties } from 'react'
import { useParams } from 'react-router-dom'
import DesignEditableDate from '../../../design-system/DesignEditable/DesignEditableDate'
import DesignEditableText from '../../../design-system/DesignEditable/DesignEditableText'
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
        <div style={styles.content}>
          <Grid style={styles.gridContainer} container>
            <Grid style={styles.gridIllustration} item sm={4} xs={0}></Grid>
            <Grid style={styles.gridInformations} item sm={8} xs={12}>
              <Grid style={styles.gridContainer} container spacing={4}>
                {/* SECTION TITLE */}
                <Grid style={styles.grid} item xs={12}>
                  <DesignHeader color={color.primary} variant="h5">
                    {isResource ? `Resource - Film` : `Element - Film`}
                  </DesignHeader>
                  <DesignEditableText placeholder={'Title'} editable={isResource} onUpdate={onTitleUpdate} variant="h5">
                    {isResource ? `${film.title}` : `Episode ${film.episode_id} - ${film.title}`}
                  </DesignEditableText>
                </Grid>
                <Grid style={styles.grid} item xs={6}>
                  <DesignText bold>Directed by</DesignText>
                  <DesignEditableText
                    placeholder={'Director'}
                    editable={isResource}
                    onUpdate={onDirectorUpdate}
                  >{`${film.director}`}</DesignEditableText>
                  <DesignText style={{ marginTop: 2 }} bold>
                    Produced by
                  </DesignText>
                  <DesignEditableText
                    placeholder={'Producer'}
                    editable={isResource}
                    onUpdate={onProducerUpdate}
                  >{`${film.producer}`}</DesignEditableText>
                </Grid>
                <Grid style={styles.grid} item xs={6}>
                  <DesignText bold>Created in</DesignText>
                  <DesignEditableDate placeholder={'Creation'} editable={isResource} date={new Date(film.created)} onUpdate={onCreatedDateUpdate} />
                  <DesignText style={{ marginTop: 2 }} bold>
                    Released in
                  </DesignText>
                  <DesignEditableDate
                    placeholder={'Release'}
                    editable={isResource}
                    date={new Date(film.release_date)}
                    onUpdate={onReleasedDateUpdate}
                  />
                </Grid>
                <Grid item xs={12}>
                  <DesignEditableText
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
    alignItems: 'center',
    justifyContent: 'center',
  },
}
