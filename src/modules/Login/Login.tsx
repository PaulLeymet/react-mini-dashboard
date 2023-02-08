import { CSSProperties, useState } from 'react'
import DesignButton from '../../design-system/DesignButton/DesignButton'
import DesignInput from '../../design-system/DesignInput/DesignInput'
import DesignPasswordInput from '../../design-system/DesignInput/DesignPasswordInput'
import DesignText from '../../design-system/DesignText/DesignText'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { color } from '../../theme/color'
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
    <div style={styles.page}>
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
              <DesignText>{`Welcome to the mini react dashboard`}</DesignText>
            </div>
            <div style={styles.login}>
              <DesignInput sx={styles.loginElement} placeholder="Username" text={username} onChange={onUsernameChange} />
              <DesignPasswordInput sx={styles.loginElement} placeholder="Password" text={password} onChange={onPasswordChange} />
              <DesignButton sx={styles.loginElement} label="Login" onClick={onLogin} />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

const styles: {
  [key: string]: CSSProperties | undefined
} = {
  page: {
    width: '100%',
    height: 400,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    background: color.secondary,
    padding: 50,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  login: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  textContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginElement: {
    margin: 1,
  },
}
