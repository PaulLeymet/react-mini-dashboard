import { TextField } from '@mui/material'
import { ChangeEvent, CSSProperties } from 'react'
import DesignText, { DesignTextProps } from '../../../../design-system/DesignText/DesignText'

export default function EditableText({ editable, onUpdate, ...props }: { editable?: boolean; onUpdate?: (text: string) => void } & DesignTextProps) {
  // =================
  // Stores
  // =================

  // =================
  // Navigation
  // =================

  // =================
  // States
  // =================

  // =================
  // Hooks
  // =================

  // =================
  // Methods
  // =================
  const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (onUpdate) onUpdate(event.target.value)
  }

  // =================
  // Render
  // =================
  return editable ? (
    <TextField style={styles.input} variant="standard" value={props.children} onChange={onChangeHandler} />
  ) : (
    <DesignText {...props} />
  )
}

const styles: {
  [key: string]: CSSProperties | undefined
} = {
  input: {
    display: 'flex',
    flexGrow: 1,
  },
}
