const express = require('express')
const cors = require('cors')
const app = express()

const userRouters = require("./routes/user")
const postRouters = require("./routes/post")

app.use(cors())
app.use(express.json()) // หากเกิด TypeError: Cannot read properties of undefined

app.get('/TEST', (req, res) => {
    console.log('Server Online')
    res.send('Hello form Server!!')
  })

app.use("/users", userRouters)
app.use("/posts", postRouters)

app.listen(7777, function () {
  console.log('Server is listening on port 7777')
})
