import morgan from "morgan"
import chalk from "chalk"
const morganLogger = morgan(function (tokens, req, res) {
  const currentTime = new Date()
  const year = currentTime.getFullYear()
  const month = String(currentTime.getMonth() + 1).padStart(2, '0')
  const day = String(currentTime.getDate()).padStart(2, '0')
  const hours = String(currentTime.getHours()).padStart(2, '0')
  const minutes = String(currentTime.getMinutes()).padStart(2, '0')
  const seconds = String(currentTime.getSeconds()).padStart(2, '0')
  const formattedTime = `[${year}/${month}/${day} ${hours}:${minutes}:${seconds}]`

  const result = [
    formattedTime,
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    "-",
    tokens['response-time'](req, res), 'ms'
  ].join(' ')

  if(tokens.status(req, res) >= 400) {
    return chalk.red(result)
  } else {
    return chalk.green(result)
  }

})

export default morganLogger