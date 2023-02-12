import { SxProps } from '@mui/material'
import TextField from '@mui/material/TextField'
import { Theme } from '@mui/system'
import { ChangeEvent } from 'react'
import { color } from '../../theme/color'

export default function DesignInput({
  placeholder,
  text,
  sx,
  onChange,
  onKeyDown,
  type,
}: {
  placeholder?: string
  text: string
  sx?: SxProps<Theme>
  onChange?: (text: string) => void
  onKeyDown?: () => void
  type?: React.HTMLInputTypeAttribute
}) {
  const styles: SxProps<Theme> = {
    padding: 0,
    margin: 0,
    input: {
      background: color.white,
      borderRadius: 1,
    },
  }

  const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (onChange) onChange(event.target.value)
  }

  return (
    <TextField
      color='info'
      sx={{
        ...styles,
        ...sx,
      }}
      margin={'dense'}
      value={text}
      placeholder={placeholder}
      variant='outlined'
      autoCapitalize={'none'}
      onChange={onChangeHandler}
      onKeyDown={onKeyDown}
      type={type}
    />
  )
}
