import { TextField } from '@mui/material'
import { ChangeEvent, CSSProperties } from 'react'
import DesignText, { DesignTextProps } from '../../../../design-system/DesignText/DesignText'
import { color } from '../../../../theme/color'

export default function EditableText({
  style,
  editable,
  onUpdate,
  placeholder,
  ...props
}: { style?: CSSProperties; editable?: boolean; onUpdate?: (text: string) => void; placeholder?: string } & DesignTextProps) {
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
    <TextField
      style={{ ...styles.input, ...style }}
      sx={{
        '& .MuiInput-underline:before': { borderBottomColor: color.secondary },
        '& .MuiInput-underline:after': { borderBottomColor: color.secondary },
      }}
      inputProps={{ min: 0, style: { textAlign: 'center' } }}
      variant="standard"
      placeholder={placeholder}
      value={props.children}
      onChange={onChangeHandler}
    />
  ) : (
    <DesignText {...props} />
  )
}

const styles: {
  [key: string]: CSSProperties | undefined
} = {
  input: {},
}
