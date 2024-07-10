const express = require('express')
const cors = require('cors')
const { getPost, createPost } = require('./utils/consult')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).send('Like me')
})

app.get('/posts', async (req, res) => {
  try {
    const posts = await getPost()
    res.status(200).send(posts)
  } catch (error) {
    res.status(400).send(error)
  }
})

app.post('/posts', async (req, res) => {
  try {
    await createPost(req.body)
    res.status(201).send('Post creado con exito')
  } catch (error) {
    res.status(400).send(error)
  }
})

app.listen(port, () => console.log(`conectado al puerto ${port}`))
