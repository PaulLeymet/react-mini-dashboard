var bcrypt = require('bcryptjs')

export const hashString = (password: string) => {
  var salt = bcrypt.genSaltSync(10)
  return bcrypt.hashSync(password, salt)
}
