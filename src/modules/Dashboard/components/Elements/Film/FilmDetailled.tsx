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
import { FilmType } from '../../../stores/types/FilmType'
import EditableDate from '../../dashboard-system/EditableDate'
import EditableText from '../../dashboard-system/EditableText'
import PageLink from '../../dashboard-system/PageLink'
import CacheManager from '../CacheManager'

export default function FilmDetailled({ isRessource }: { isRessource?: boolean }) {
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
  const film: FilmType = index ? (isRessource ? ressources.films[parseInt(index)] : elements.films.elements[parseInt(index)]) : null

  // =================
  // Hooks
  // =================

  // =================
  // Methods
  // =================
  const onTitleUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'films',
          index: parseInt(index),
          ressource: { ...film, ...{ title: text } },
        }),
      )
    }
  }

  const onDirectorUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'films',
          index: parseInt(index),
          ressource: { ...film, ...{ director: text } },
        }),
      )
    }
  }

  const onProducerUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'films',
          index: parseInt(index),
          ressource: { ...film, ...{ producer: text } },
        }),
      )
    }
  }

  const onCrawlUpdate = (text: string) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'films',
          index: parseInt(index),
          ressource: { ...film, ...{ opening_crawl: text } },
        }),
      )
    }
  }

  const onCreatedDateUpdate = (date: Date) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'films',
          index: parseInt(index),
          ressource: { ...film, ...{ created: date.toISOString() } },
        }),
      )
    }
  }

  const onReleasedDateUpdate = (date: Date) => {
    if (index) {
      dispatch(
        updateRessource({
          category: 'films',
          index: parseInt(index),
          ressource: { ...film, ...{ release_date: date.toISOString() } },
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
                    {isRessource ? `Ressource - Film` : `Element - Film`}
                  </DesignHeader>
                  <EditableText placeholder={'Title'} editable={isRessource} onUpdate={onTitleUpdate} variant="h5">
                    {isRessource ? `${film.title}` : `Episode ${film.episode_id} - ${film.title}`}
                  </EditableText>
                </Grid>
                <Grid style={styles.grid} item xs={6}>
                  <DesignText bold>Directed by</DesignText>
                  <EditableText placeholder={'Director'} editable={isRessource} onUpdate={onDirectorUpdate}>{`${film.director}`}</EditableText>
                  <DesignText style={{ marginTop: 2 }} bold>
                    Produced by
                  </DesignText>
                  <EditableText placeholder={'Producer'} editable={isRessource} onUpdate={onProducerUpdate}>{`${film.producer}`}</EditableText>
                </Grid>
                <Grid style={styles.grid} item xs={6}>
                  <DesignText bold>Created in</DesignText>
                  <EditableDate placeholder={'Creation'} editable={isRessource} date={new Date(film.created)} onUpdate={onCreatedDateUpdate} />
                  <DesignText style={{ marginTop: 2 }} bold>
                    Released in
                  </DesignText>
                  <EditableDate placeholder={'Release'} editable={isRessource} date={new Date(film.release_date)} onUpdate={onReleasedDateUpdate} />
                </Grid>
                <Grid item xs={12}>
                  <EditableText
                    style={{ display: 'flex', flexGrow: 1 }}
                    placeholder={'Opening crawl'}
                    editable={isRessource}
                    onUpdate={onCrawlUpdate}
                  >{`${film.opening_crawl}`}</EditableText>
                </Grid>
                <Grid item xs={12}>
                  <DesignTabs
                    tabs={[
                      {
                        label: 'People',
                        content: (
                          <div style={styles.linkContainer}>
                            {film.vehicles?.map((url) => (
                              <PageLink key={url} style={styles.link} category="people" url={url} />
                            ))}
                          </div>
                        ),
                      },
                      {
                        label: 'Planets',
                        content: (
                          <div style={styles.linkContainer}>
                            {film.vehicles?.map((url) => (
                              <PageLink key={url} style={styles.link} category="planets" url={url} />
                            ))}
                          </div>
                        ),
                      },
                      {
                        label: 'Species',
                        content: (
                          <div style={styles.linkContainer}>
                            {film.vehicles?.map((url) => (
                              <PageLink key={url} style={styles.link} category="species" url={url} />
                            ))}
                          </div>
                        ),
                      },
                      {
                        label: 'Starships',
                        content: (
                          <div style={styles.linkContainer}>
                            {film.vehicles?.map((url) => (
                              <PageLink key={url} style={styles.link} category="starships" url={url} />
                            ))}
                          </div>
                        ),
                      },
                      {
                        label: 'Vehicles',
                        content: (
                          <div style={styles.linkContainer}>
                            {film.vehicles?.map((url) => (
                              <PageLink key={url} style={styles.link} category="vehicles" url={url} />
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
