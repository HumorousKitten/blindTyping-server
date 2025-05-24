import asyncHandler from 'express-async-handler'
import { prisma } from '../prisma.js'

//@desc Get course details
//@route GET /courses/course_details?course_id
//@access Private

export const getCourseDetails = asyncHandler(async (req, res) => {
	const { course_id } = req.query
	const {id} = req.user

	if (!course_id) {
		res.status(404)
		throw new Error('не существующий id')
	}

	let courseDetails = await prisma.courses.findUnique({
		where: {
			id: +course_id
		},
		select: {
			title: true,
			avgDuration: true,
			price: true,
			favorite: true,
			details: {
				select: {
					will_learn: true,
					about_course: true,
					for_whom: true,
					preview_image: true
				}
			},
			stats: {
				select: {
					ratingAvg: true,
					enrollmentsCount: true
				}
			},
			course: {
				where: {
					user_id: id,
					course_id: +course_id
				}
			}
		}
	})

	if (!courseDetails) {
		res.status(404)
		throw new Error('Курс не найден')
	}

	res.json(courseDetails)
})
