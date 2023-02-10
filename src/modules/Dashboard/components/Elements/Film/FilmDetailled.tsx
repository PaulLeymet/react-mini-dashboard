import { Grid } from '@mui/material'
import { CSSProperties } from 'react'
import { useParams } from 'react-router-dom'
import DesignSpinner from '../../../../../design-system/DesignSpinner/DesignSpinner'
import DesignText from '../../../../../design-system/DesignText/DesignText'
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks'
import { ILLUSTRATIONS } from '../../../../../theme/illustrations'
import { dateFormat } from '../../../../../utils/date'
import { selectElements } from '../../../stores/elementSlice'
import { selectRessources, updateRessource } from '../../../stores/ressourceSlice'
import { FilmType } from '../../../stores/types/FilmType'
import EditableText from '../../dashboard-system/EditableText'
import PageLink from '../../dashboard-system/PageLink'

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
    console.log('TEST', text)
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

  // =================
  // Render
  // =================
  return (
    <div style={styles.main}>
      {!!film ? (
        <div style={styles.content}>
          <Grid style={styles.gridSection} container spacing={4}>
            <Grid className="hide-scrollbar" style={styles.grid} item xs={3}>
              <DesignText bold>{`Created on`}</DesignText>
              <EditableText>{`${dateFormat(film.created, 'dd/MM/yyyy')}`}</EditableText>
              <DesignText style={{ marginTop: 2 }} bold>{`Released on`}</DesignText>
              <EditableText>{`${dateFormat(film.release_date.replace('-', ':'), 'dd/MM/yyyy')}`}</EditableText>
            </Grid>
            <Grid className="hide-scrollbar" style={styles.grid} item xs={6}>
              <EditableText onUpdate={onTitleUpdate} editable={isRessource}>{`${film.title}`}</EditableText>
              <EditableText>{`Episode ${film.episode_id}`}</EditableText>
            </Grid>
            <Grid className="hide-scrollbar" style={styles.grid} item xs={3}>
              <DesignText bold>{`Directed by`}</DesignText>
              <EditableText>{`${film.director}`}</EditableText>
              <DesignText style={{ marginTop: 2 }} bold>{`Produced by`}</DesignText>
              <EditableText>{`${film.producer}`}</EditableText>
            </Grid>
          </Grid>
          <Grid style={styles.gridSection} container spacing={4}>
            <Grid className="hide-scrollbar" style={styles.grid} item xs={12}>
              <EditableText>{`${film.opening_crawl}`}</EditableText>
            </Grid>
          </Grid>
          <Grid style={styles.gridSection} container spacing={4}>
            <Grid className="hide-scrollbar" style={styles.grid} item xs={12 / 5}>
              <DesignText bold>{`People`}</DesignText>
              {film.characters?.map((url) => (
                <PageLink category="people" url={url} />
              ))}
            </Grid>
            <Grid className="hide-scrollbar" style={styles.grid} item xs={12 / 5}>
              <DesignText bold>{`Planets`}</DesignText>
              {film.planets?.map((url) => (
                <PageLink category="planets" url={url} />
              ))}
            </Grid>
            <Grid className="hide-scrollbar" style={styles.grid} item xs={12 / 5}>
              <DesignText bold>{`Species`}</DesignText>
              {film.species?.map((url) => (
                <PageLink category="species" url={url} />
              ))}
            </Grid>
            <Grid className="hide-scrollbar" style={styles.grid} item xs={12 / 5}>
              <DesignText bold>{`Starships`}</DesignText>
              {film.starships?.map((url) => (
                <PageLink category="starships" url={url} />
              ))}
            </Grid>
            <Grid className="hide-scrollbar" style={styles.grid} item xs={12 / 5}>
              <DesignText bold>{`Vehicles`}</DesignText>
              {film.vehicles?.map((url) => (
                <PageLink category="vehicles" url={url} />
              ))}
            </Grid>
          </Grid>
          {true ? null : <></>}
        </div>
      ) : (
        <DesignSpinner />
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
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url(${ILLUSTRATIONS.films})`,
    backgroundSize: 'cover',
    opacity: 0.1,
  },
  content: {
    margin: 20,
    display: 'flex',
    flexDirection: 'column',
  },
  accordionContent: {},
  gridSection: {
    display: 'flex',
    height: `${100 / 3}%`,
    margin: 0,
    padding: 0,
  },
  grid: {
    display: 'flex',
    margin: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 30,
    overflow: 'scroll',
  },
}
