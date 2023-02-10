import { Grid } from '@mui/material'
import { CSSProperties, useState } from 'react'
import DesignSpinner from '../../../../../design-system/DesignSpinner/DesignSpinner'
import DesignHeader from '../../../../../design-system/DesignText/DesignHeader'
import DesignText from '../../../../../design-system/DesignText/DesignText'
import { useMount } from '../../../../../hooks/useMount'
import { useAppSelector } from '../../../../../store/hooks'
import { color } from '../../../../../theme/color'
import { ILLUSTRATIONS } from '../../../../../theme/illustrations'
import { getApi } from '../../../../../utils/api'
import { dateFormat } from '../../../../../utils/date'
import { selectRessources } from '../../../stores/ressourceSlice'
import { FilmType } from '../../../stores/types/FilmType'

export default function FilmDetailled({ id, url, style, isRessource }: { id?: string; url?: string; style?: CSSProperties; isRessource?: boolean }) {
  // =================
  // Stores
  // =================

  // =================
  // States
  // =================
  const [fetching, setFetching] = useState(true)
  const ressources = useAppSelector(selectRessources)
  const [film, setFilm] = useState<FilmType | undefined>(undefined)

  // =================
  // Hooks
  // =================
  useMount(() => {
    fetchData()
  })

  // =================
  // Methods
  // =================
  const fetchData = async () => {
    // First check locally if allready stored
    if (false) {
      const data = ressources.films.find((e) => e.title === id)
      if (data) {
        setFilm(data)
        setFetching(false)
        return
      }
    }
    // If not fetch from url if provided
    if (url) {
      const response = await getApi(url)
      if (response?.status === 200) {
        const data = response.data
        if (data) {
          setFilm(data)
          setFetching(false)
          return
        }
      }
    }
  }

  // =================
  // Render
  // =================
  return (
    <div style={styles.main}>
      <div style={styles.background} />
      {!!film ? (
        <div style={styles.content}>
          <Grid style={styles.gridSection} container spacing={4}>
            <Grid className="hide-scrollbar" style={styles.grid} item xs={3}>
              <DesignText color={color.white} bold>{`Created on`}</DesignText>
              <DesignText color={color.white}>{`${dateFormat(film.created, 'dd/MM/yyyy')}`}</DesignText>
              <DesignText style={{ marginTop: 2 }} color={color.white} bold>{`Released on`}</DesignText>
              <DesignText color={color.white}>{`${dateFormat(film.release_date.replace('-', ':'), 'dd/MM/yyyy')}`}</DesignText>
            </Grid>
            <Grid className="hide-scrollbar" style={styles.grid} item xs={6}>
              <DesignHeader color={color.white}>{`${film.title}`}</DesignHeader>
              <DesignText color={color.white}>{`Episode ${film.episode_id}`}</DesignText>
            </Grid>
            <Grid className="hide-scrollbar" style={styles.grid} item xs={3}>
              <DesignText color={color.white} bold>{`Directed by`}</DesignText>
              <DesignText color={color.white}>{`${film.director}`}</DesignText>
              <DesignText style={{ marginTop: 2 }} color={color.white} bold>{`Produced by`}</DesignText>
              <DesignText color={color.white}>{`${film.producer}`}</DesignText>
            </Grid>
          </Grid>
          <Grid style={styles.gridSection} container spacing={4}>
            <Grid className="hide-scrollbar" style={styles.grid} item xs={12}>
              <DesignText color={color.white}>{`${film.opening_crawl}`}</DesignText>
            </Grid>
          </Grid>
          <Grid style={styles.gridSection} container spacing={4}>
            <Grid className="hide-scrollbar" style={styles.grid} item xs={12 / 5}>
              <DesignText color={color.white} bold>{`People`}</DesignText>
              {film.characters?.map((people) => (
                <DesignText color={color.white}>{people}</DesignText>
              ))}
            </Grid>
            <Grid className="hide-scrollbar" style={styles.grid} item xs={12 / 5}>
              <DesignText color={color.white} bold>{`Plantes`}</DesignText>
            </Grid>
            <Grid className="hide-scrollbar" style={styles.grid} item xs={12 / 5}>
              <DesignText color={color.white} bold>{`Species`}</DesignText>
            </Grid>
            <Grid className="hide-scrollbar" style={styles.grid} item xs={12 / 5}>
              <DesignText color={color.white} bold>{`Starships`}</DesignText>
            </Grid>
            <Grid className="hide-scrollbar" style={styles.grid} item xs={12 / 5}>
              <DesignText color={color.white} bold>{`Vehicles`}</DesignText>
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
    alignItems: 'center',
    backgroundImage: `url(${ILLUSTRATIONS.films})`,
    backgroundSize: 'cover',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: color.black,
    opacity: 0.7,
  },
  content: {
    margin: 20,

    display: 'flex',
    flexDirection: 'column',
    backdropFilter: 'blur(2px)',
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
