import {prisma} from '../prisma.js'
import asyncHandler from 'express-async-handler'

//@desc post subscribe course
//@route POST /course/subscribe  (token, course_id)
//@access Private


export const subscribeCourse = asyncHandler(async (req, res) => {
	const {id} = req.user
	const {course_id} = req.body

	const user_course = await prisma.user_courses.create({
		data: {user_id: id, course_id}
	})

	res.json(true)
}) 