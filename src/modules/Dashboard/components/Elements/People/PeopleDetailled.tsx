import { Grid } from '@mui/material'
import { CSSProperties, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DesignSpinner from '../../../../../design-system/DesignSpinner/DesignSpinner'
import DesignHeader from '../../../../../design-system/DesignText/DesignHeader'
import DesignText from '../../../../../design-system/DesignText/DesignText'
import { useAppSelector } from '../../../../../store/hooks'
import { ILLUSTRATIONS } from '../../../../../theme/illustrations'
import { dateFormat } from '../../../../../utils/date'
import { selectElements } from '../../../stores/elementSlice'
import { PeopleType } from '../../../stores/types/PeopleType'
import PageLink from '../../dashboard-system/PageLink'

export default function PeopleDetailled({ isRessource }: { isRessource?: boolean }) {
  // =================
  // Stores
  // =================
  const elements = useAppSelector(selectElements)

  // =================
  // Navigation
  // =================
  const { index } = useParams()

  // =================
  // States
  // =================
  const [people, setPeople] = useState<PeopleType | undefined>(undefined)

  // =================
  // Hooks
  // =================
  useEffect(() => {
    if (index) fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])

  // =================
  // Methods
  // =================
  const fetchData = async () => {
    // First check locally if allready stored
    if (index) {
      const data = elements.people.elements[parseInt(index)]
      if (data) {
        setPeople(data)
        return
      }
    }
  }

  // =================
  // Render
  // =================
  return (
    <div style={styles.main}>
      {!!people ? (
        <div style={styles.content}>
          <Grid style={styles.gridSection} container spacing={4}>
            <Grid className="hide-scrollbar" style={styles.grid} item xs={3}>
              <DesignText bold>{`Created on`}</DesignText>
              <DesignText>{`${dateFormat(people.created, 'dd/MM/yyyy')}`}</DesignText>
            </Grid>
            <Grid className="hide-scrollbar" style={styles.grid} item xs={6}>
              <DesignHeader>{`${people.name}`}</DesignHeader>
            </Grid>
            <Grid className="hide-scrollbar" style={styles.grid} item xs={3}></Grid>
          </Grid>
          <Grid style={styles.gridSection} container spacing={4}>
            <Grid className="hide-scrollbar" style={styles.grid} item xs={12}></Grid>
          </Grid>
          <Grid style={styles.gridSection} container spacing={4}>
            <Grid className="hide-scrollbar" style={styles.grid} item xs={12 / 5}>
              <DesignText bold>{`Films`}</DesignText>
              {people.films?.map((url) => (
                <PageLink category="films" url={url} />
              ))}
            </Grid>
            <Grid className="hide-scrollbar" style={styles.grid} item xs={12 / 5}>
              <DesignText bold>{`Species`}</DesignText>
              {people.species?.map((url) => (
                <PageLink category="species" url={url} />
              ))}
            </Grid>
            <Grid className="hide-scrollbar" style={styles.grid} item xs={12 / 5}>
              <DesignText bold>{`Starships`}</DesignText>
              {people.starships?.map((url) => (
                <PageLink category="starships" url={url} />
              ))}
            </Grid>
            <Grid className="hide-scrollbar" style={styles.grid} item xs={12 / 5}>
              <DesignText bold>{`Vehicles`}</DesignText>
              {people.vehicles?.map((url) => (
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
    backgroundImage: `url(${ILLUSTRATIONS.people})`,
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
