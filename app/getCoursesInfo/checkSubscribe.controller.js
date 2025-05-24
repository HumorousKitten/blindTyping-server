import asyncHandler from 'express-async-handler'
import { prisma } from '../prisma.js'

//@desc Get subscribe course
//@route GET /courses/subscribe?course_id
//@access Private

export const checkSubscribe = asyncHandler(async (req, res) => {
	const { course_id } = req.query
	const {id} = req.user

	if (course_id === null) {
		res.status(404)
		throw new Error('не существующий id')
	}

	const hasSubscribe = await prisma.user_courses.findFirst({
		where: {
			user_id: id,
			course_id: +course_id
		}
	})

	if(!Object.keys(hasSubscribe).length) res.json(false)
	else {
		res.json(true)
	}
})
