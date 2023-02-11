import { TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { CSSProperties } from 'react'
import { color } from '../../theme/color'
import { dateFormat } from '../../utils/date'
import DesignText, { DesignTextProps } from '../DesignText/DesignText'

export default function DesignEditableDate({
  date,
  editable,
  onUpdate,
  placeholder,
  ...props
}: { date: Date; editable?: boolean; onUpdate?: (date: Date) => void; placeholder?: string } & Omit<DesignTextProps, 'children'>) {
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
  return editable ? (
    <DatePicker
      value={date}
      onChange={onChangeHandler}
      renderInput={(params) => (
        <TextField
          style={styles.input}
          sx={{
            svg: { color: color.primary },
            '& .MuiInput-underline:before': { borderBottomColor: color.secondary },
            '& .MuiInput-underline:after': { borderBottomColor: color.secondary },
          }}
          inputProps={{ min: 0, style: { textAlign: 'center' } }}
          variant="standard"
          placeholder={placeholder}
          value={`${dateFormat(date, 'dd/MM/yyyy')}`}
          {...params}
        />
      )}
    />
  ) : (
    <DesignText {...props}>{`${dateFormat(date, 'dd/MM/yyyy')}`}</DesignText>
  )
}

const styles: {
  [key: string]: CSSProperties | undefined
} = {
  input: {},
}
