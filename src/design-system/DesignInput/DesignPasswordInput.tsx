import { Visibility, VisibilityOff } from '@mui/icons-material'
import { IconButton, InputAdornment, SxProps } from '@mui/material'
import TextField from '@mui/material/TextField'
import { Theme } from '@mui/system'
import { ChangeEvent, useState } from 'react'
import { color } from '../../theme/color'

export default function DesignPasswordInput({
  placeholder,
  text,
  sx,
  onChange,
  onEnter,
}: {
  placeholder?: string
  text: string
  sx?: SxProps<Theme>
  onChange: (text: string) => void
  onEnter?: () => void
}) {
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword(!showPassword)
  const handleMouseDownPassword = () => setShowPassword(!showPassword)
  const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    onChange(event.target.value)
  }

  const onKeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && onEnter) onEnter()
  }

  const styles: SxProps<Theme> = {
    background: color.white,
    borderRadius: 1,
    padding: 0,
    margin: 0,
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
      onKeyDown={onKeyDownHandler}
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <IconButton aria-label='toggle password visibility' onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  )
}
