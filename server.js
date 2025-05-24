import colors from 'colors'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import authRoutes from './app/auth/auth.routes.js'
import userBestResultRoutes from './app/bestResult/userBestResult.routes.js'
import levelRoutes from './app/getLevel/getLevel.routes.js'
import userRoutes from './app/getUser/getUser.routes.js'
import userLevelRoutes from './app/getUserLevels/getUserLevel.routes.js'
import { errorHandler, notFound } from './app/middleware/error.middleware.js'
import updateResultRoutes from './app/updateResult/updateResult.routes.js'
import updateUserRoleRoutes from './app/updateUserRole/updateUserRole.routes.js'
import coursesRoutes from './app/getCoursesInfo/getCourses.routes.js'
import courseLevelRoutes from './app/levelsPage/getLevelsInfo/getCourseLevels.routes.js'
import courseSubscribeRoutes from './app/subscribeCourse/subscribeCourse.routes.js'
import courseTasksModule from './app/course_tasks/courseTasks.routes.js'
import levelInfoRoutes from './app/levelInfo/levelInfo.routes.js'

dotenv.config()
const app = express()

const main = async () => {
	if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))
	app.use(express.json())
	app.use(express.urlencoded({ extended: true }))
	app.use(cors())
	app.use(helmet())

	// app.get('/', (req, res) => {
	// 	res.send('Hello World')
	// })

	app.use('/auth', authRoutes)
	app.use('/', updateResultRoutes)
	app.use('/users', updateUserRoleRoutes)
	app.use('/courses', coursesRoutes)
	app.use('/course_levels', courseLevelRoutes)
	app.use('/course', courseSubscribeRoutes)
	app.use('/course', courseTasksModule)
	app.use('/course', levelInfoRoutes)
	app.use(notFound)
	app.use(errorHandler)

	const PORT = process.env.PORT || 5000

	app.listen(
		PORT,
		console.log(
			`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue.bold
		)
	)
}

main()
