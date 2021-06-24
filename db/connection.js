import mongoose from 'mongoose'

let MONGODB_URL =
  process.env.PROD_MONGODB ||
  'mongodb://127.0.0.1:27017/postsDevDatabase'

// Create indexes in mongoDB by default for fatere queries
mongoose.set('useCreateIndex', true)

//This is for model.findByIdAndUpdate method, makes { new: true } the default
mongoose.set('returnOriginal', false)

//Set up connection for mongoDB
mongoose
  .connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
  .catch((error) => console.error('Error connecting to MongoDB: ', error.message))

//Listen to mongoDB events
mongoose.connection.on('disconnected', () => console.log(`Disconnected from MongoDB!`))

//Listen to any error while connected to mongoDB
mongoose.connection.on('error', (error) => console.error(`MongoDB connection error: ${error}`))

export default mongoose.connection