import express from "express"
import router from "./router.js"
import cors from "cors"
import simpleLogger from "./logger/simpleLogger.js"
import morganLogger from "./logger/morganLogger.js"
import connectToDatabase from "./services/mongoDbService.js"
const app = express()

app.use(cors({
  origin: ["http://127.0.0.1:5500","http://localhost:5500"],
}))

app.use(morganLogger)


app.use(express.static("public"))

app.use(express.json())

app.use(router)



app.listen(3000, () => {
  console.log("Server is running on port 3000")
  connectToDatabase()
})
