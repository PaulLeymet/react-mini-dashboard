import { motion } from 'framer-motion'
import { CSSProperties, useState } from 'react'
import { DesignBox, DesignButton, DesignHeader, DesignInput, DesignPasswordInput, DesignText } from '../../../design-system'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { color } from '../../../theme/color'
import { ILLUSTRATIONS } from '../../../theme/illustrations'
import { resetAuth, selectAuth, setToken } from '../stores/authSlice'

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
  const [error, setError] = useState<boolean>(false)

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
      setError(true)
      return
    }

    setError(false)

    // @TODO : Server must create and store a token
    const TOKEN = 'SERVER-PROVIDED-TOKEN'
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
              <DesignButton sx={styles.loginElement} label='Logout' onClick={onLogout} />
            </div>
          </>
        ) : (
          <>
            <div style={styles.textContainer}>
              <DesignHeader color={color.white}>{`Login`}</DesignHeader>
            </div>
            <div style={styles.login}>
              <DesignInput sx={styles.loginElement} placeholder='Username' text={username} onChange={onUsernameChange} onEnter={onLogin} />
              <DesignPasswordInput sx={styles.loginElement} placeholder='Password' text={password} onChange={onPasswordChange} onEnter={onLogin} />
              <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
                <DesignButton sx={styles.loginElement} label='Login' onClick={onLogin} />
              </motion.div>
              {error && (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                  <DesignText style={styles.error} color={color.red}>
                    {'Wrong credentials'}
                  </DesignText>
                </motion.div>
              )}
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
  error: {
    marginTop: 2,
    fontSize: 16,
    fontFamily: 'Starjedi',
  },
}
