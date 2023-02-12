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
}: {
  style?: CSSProperties
  editable?: boolean
  onUpdate?: (text: string) => void
  label: string
  placeholder: string
  children: string
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
        inputProps={{ min: 0, style: { textAlign: 'left' } }}
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
