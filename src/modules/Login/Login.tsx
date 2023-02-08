import { CSSProperties } from 'react'
import DesignText from '../../design-system/DesignText/DesignText'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { selectApp } from '../../store/slices/app/appSlice'

export default function Login() {
  // =================
  // Stores
  // =================
  const app = useAppSelector(selectApp)
  const dispatch = useAppDispatch()

  // =================
  // Hooks
  // =================

  // =================
  // Methods
  // =================

  // =================
  // Render
  // =================
  return <div style={styles.component}>{<DesignText>{`LOGIN`}</DesignText>}</div>
}

const styles: {
  [key: string]: CSSProperties | undefined
} = {
  component: {},
}
