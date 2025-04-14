import colors from 'colors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import express from 'express'
import {notFound, errorHandler} from './app/middleware/error.middleware.js'
import authRoutes from './app/auth/auth.routes.js'

dotenv.config()
const app = express()

const main = async () => {
	if(process.env.NODE_ENV === 'development') app.use(morgan('dev'))
	app.use(express.json())
	app.use(express.urlencoded({ extended: true }))
	app.use(cors())
	app.use(helmet())
	
	app.get('/', (req, res) => {
		res.send('Hello World')
	})

	app.use('/auth', authRoutes)

	app.use(notFound)
	app.use(errorHandler)

	const PORT = process.env.PORT || 5000

	app.listen(PORT, console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue.bold
	))
}

main()