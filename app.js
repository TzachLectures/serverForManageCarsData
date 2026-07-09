import express from "express"
import router from "./router.js"
import cors from "cors"
const app = express()

app.use(cors({
  origin: ["http://127.0.0.1:5500","http://localhost:5500"],
}))

app.use((req, res, next) => {
  console.log("new request received at " + new Date().toLocaleString())
  next()
})


app.use(express.static("public"))

app.use(express.json())

app.use(router)



app.listen(3000, () => {
  console.log("Server is running on port 3000")
})
