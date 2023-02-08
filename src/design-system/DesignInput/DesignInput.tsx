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
  type,
}: {
  placeholder?: string
  text: string
  sx?: SxProps<Theme>
  onChange: (text: string) => void
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
    onChange(event.target.value)
  }

  return (
    <TextField
      color="info"
      sx={{
        ...styles,
        ...sx,
      }}
      margin={'dense'}
      value={text}
      placeholder={placeholder}
      variant="outlined"
      onChange={onChangeHandler}
      type={type}
    />
  )
}
