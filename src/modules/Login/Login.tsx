import { CSSProperties, useState } from 'react'
import DesignBox from '../../design-system/DesignBox/DesignBox'
import DesignButton from '../../design-system/DesignButton/DesignButton'
import DesignInput from '../../design-system/DesignInput/DesignInput'
import DesignPasswordInput from '../../design-system/DesignInput/DesignPasswordInput'
import DesignHeader from '../../design-system/DesignText/DesignHeader'
import DesignText from '../../design-system/DesignText/DesignText'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { color } from '../../theme/color'
import { ILLUSTRATIONS } from '../../theme/illustrations'
import { hashString } from '../../utils/crypt'
import { resetAuth, selectAuth, setToken } from './stores/authSlice'

const CREDENTIALS = {
  username: 'creativ',
  password: 'mountain',
}

export default function Login() {
  // =================
  // Stores
  // =================
  const auth = useAppSelector(selectAuth)
  const dispatch = useAppDispatch()

  // =================
  // Navigation
  // =================

  // =================
  // States
  // =================
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  // =================
  // Hooks
  // =================

  // =================
  // Methods
  // =================
  const onUsernameChange = (username: string) => {
    setUsername(username)
  }

  const onPasswordChange = (password: string) => {
    setPassword(password)
  }

  const onLogin = () => {
    if (username !== CREDENTIALS.username || password !== CREDENTIALS.password) {
      return
    }

    // @TODO : Server must create and store a token
    const TOKEN = hashString(username + password)
    dispatch(setToken(TOKEN))
  }

  const onLogout = () => {
    dispatch(resetAuth())
  }

  // =================
  // Render
  // =================
  return (
    <DesignBox style={styles.page}>
      <div style={styles.cardContainer}>
        {auth.token ? (
          <>
            <div style={styles.textContainer}>
              <DesignText>{`Hello ${auth.user.username}`}</DesignText>
            </div>
            <div style={styles.login}>
              <DesignButton sx={styles.loginElement} label="Logout" onClick={onLogout} />
            </div>
          </>
        ) : (
          <>
            <div style={styles.textContainer}>
              <DesignHeader color={color.white}>{`Login`}</DesignHeader>
            </div>
            <div style={styles.login}>
              <DesignInput sx={styles.loginElement} placeholder="Username" text={username} onChange={onUsernameChange} />
              <DesignPasswordInput sx={styles.loginElement} placeholder="Password" text={password} onChange={onPasswordChange} />
              <DesignButton sx={styles.loginElement} label="Login" onClick={onLogin} />
            </div>
          </>
        )}
      </div>
    </DesignBox>
  )
}

const styles: {
  [key: string]: CSSProperties | undefined
} = {
  page: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: color.black,
    backgroundImage: `url(${ILLUSTRATIONS.people})`,
    backgroundSize: 'cover',
  },
  cardContainer: {
    marginTop: 50,
    background: color.black,
    padding: 50,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  login: {
    display: 'relative',
    alignItems: 'center',
    flexDirection: 'column',
  },
  textContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  loginElement: {
    width: '100%',
    margin: 1,
  },
}
