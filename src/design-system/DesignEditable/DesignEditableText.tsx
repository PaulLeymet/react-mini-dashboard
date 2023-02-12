import { createTheme, TextField, ThemeProvider } from '@mui/material'
import { ChangeEvent, CSSProperties } from 'react'
import { color } from '../../theme/color'

export default function DesignEditableText({
  style,
  editable,
  onUpdate,
  placeholder,
  label,
  children,
  multiline,
  rows,
}: {
  style?: CSSProperties
  editable?: boolean
  onUpdate?: (text: string) => void
  label: string
  placeholder: string
  children: string
  multiline?: boolean
  rows?: number
}) {
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

  const theme = createTheme({
    palette: {
      action: {
        disabled: color.secondary,
      },
    },
  })
  console.log(children)
  // =================
  // Render
  // =================
  return (
    <ThemeProvider theme={theme}>
      <TextField
        style={{ ...styles.input, ...style }}
        sx={{
          '& .MuiInput-underline:before': { borderBottomColor: color.secondary },
          '& .MuiInput-underline:after': { borderBottomColor: color.secondary },
          '& .MuiInputBase-input.Mui-disabled': {
            WebkitTextFillColor: color.black,
          },
        }}
        inputProps={{ className: 'hide-scrollbar', min: 0, style: { textAlign: 'left' } }}
        multiline={multiline}
        maxRows={multiline ? rows : 5}
        InputProps={{ disableUnderline: !editable }}
        // InputLabelProps={{ style: { color: color.primary } }}
        disabled={!editable}
        label={label}
        variant={'standard'}
        placeholder={placeholder}
        value={children}
        onChange={onChangeHandler}
      />
    </ThemeProvider>
  )
}

const styles: {
  [key: string]: CSSProperties | undefined
} = {
  input: {
    margin: 10,
    color: color.black,
    display: 'flex',
    flexGrow: 1,
  },
}
