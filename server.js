import express from 'express'
import logger from 'morgan'

const PORT = process.env.PORT || 3000

import db from './db/connection/js'
import Post from './models/post.js'

const app = express()

app.use(express.json())
app.use(logger('dev'))

db.on('connected', () => {
  console.log('Connected to MongoDB')
  app.listen(PORT, () =>
    console.log(`Express server application is running on port ${PORT}`)
  )
})

app.get('/', (req, res) => {
  try {
    const posts = await Post.find()
    res.json(posts)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.get