import { CSSProperties } from 'react'
import DesignText from '../../design-system/DesignText/DesignText'
import { useMount } from '../../hooks/useMount'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { selectApp, setReady } from '../../store/slices/app/appSlice'

export default function Home() {
  // =================
  // Stores
  // =================
  const app = useAppSelector(selectApp)
  const dispatch = useAppDispatch()

  // =================
  // Hooks
  // =================
  useMount(() => {
    dispatch(setReady(true))
  })

  // =================
  // Methods
  // =================

  // =================
  // Render
  // =================
  return <div style={styles.component}>{app.ready ? <DesignText>{`Ready`}</DesignText> : null}</div>
}

const styles: {
  [key: string]: CSSProperties | undefined
} = {
  component: {},
}
