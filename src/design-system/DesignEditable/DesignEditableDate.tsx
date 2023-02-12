import { TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { CSSProperties } from 'react'
import { color } from '../../theme/color'
import { dateFormat } from '../../utils/date'

export default function DesignEditableDate({
  date,
  editable,
  onUpdate,
  label,
  placeholder,
}: {
  date: Date
  editable?: boolean
  onUpdate?: (date: Date) => void
  placeholder?: string
  label: string
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
  const onChangeHandler = (date: Date | null, keyboardInputValue?: string | undefined) => {
    if (onUpdate && date) onUpdate(date)
  }

  // =================
  // Render
  // =================
  return (
    <DatePicker
      value={date}
      onChange={onChangeHandler}
      label={label}
      disabled={!editable}
      disableOpenPicker={!editable}
      InputProps={{
        disableUnderline: true,
      }}
      renderInput={(params) => (
        <TextField
          style={styles.input}
          sx={{
            svg: { color: color.primary + 'A0' },
            '& .MuiInput-underline:before': { borderBottomColor: color.secondary },
            '& .MuiInput-underline:after': { borderBottomColor: color.secondary },
            '& .MuiInputBase-input.Mui-disabled': {
              WebkitTextFillColor: color.black,
            },
          }}
          inputProps={{ min: 0, style: { textAlign: 'center' } }}
          //InputLabelProps={{ style: { color: color.primary } }}
          disabled={!editable}
          variant="standard"
          placeholder={placeholder}
          value={`${dateFormat(date, 'dd/MM/yyyy')}`}
          {...params}
        />
      )}
    />
  )
}

const styles: {
  [key: string]: CSSProperties | undefined
} = {
  input: {
    margin: 10,
  },
}
