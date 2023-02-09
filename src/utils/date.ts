import { format } from 'date-fns'
var fr = require('date-fns/locale/fr')

export const dateFormat = (date: Date | string | number | undefined, model: string): string => {
  if (date) {
    return format(new Date(date), model, { locale: fr })
  } else {
    return ''
  }
}
