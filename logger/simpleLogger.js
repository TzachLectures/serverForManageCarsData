import chalk from "chalk"
const simpleLogger = (req, res, next) => {
const fullPath = req.url
  const startTime = new Date()
  next()

  res.on("finish", () => {
    const endTime = new Date()
    const duration = endTime - startTime

  const status = res.statusCode
  if (status >= 400) {
    console.log(chalk.red(`${new Date().toLocaleString()} | ${fullPath} | ${req.method} | ${status} | ${duration} ms`))
    } else {
    console.log(chalk.green(`${new Date().toLocaleString()} | ${fullPath} | ${req.method} | ${status} | ${duration} ms`))
    }})
}

export default simpleLogger