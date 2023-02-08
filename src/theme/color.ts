const palette = {
  black: '#000000',
  white: '#FFFFFF',
  lightBlue: '#1DB3F4',
  darkBlue: '#161B30',
  darkestBlue: '#0E1221',
  red: '#FF2B4E',
}

/**
 * Roles for colors.  Prefer using these over the palette.  It makes it easier
 * to change things.
 *
 * The only roles we need to place in here are the ones that span through the app.
 *
 * If you have a specific use-case, like a spinner color.  It makes more sense to
 * put that in the <Spinner /> component.
 */
export const color = {
  /**
   * The palette is available to use, but prefer using the name.
   */
  palette,
  /**
   * White
   */
  white: palette.white,
  /**
   * Black
   */
  black: palette.black,
  /**
   * Red
   */
  red: palette.red,
  /**
   * Primary color
   */
  primary: palette.lightBlue,
  /**
   * Secondary color
   */
  secondary: palette.darkestBlue,
  /**
   * Tertiary color
   */
  tertiary: palette.darkBlue,
}
