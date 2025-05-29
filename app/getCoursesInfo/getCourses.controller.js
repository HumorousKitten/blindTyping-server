import asyncHandler from 'express-async-handler'
import { prisma } from '../prisma.js'
import { checkUserRole } from '../services/checkUserRole.js'

//@desc Get all courses
//@route GET /courses?page
//@access Private

export const getCourses = asyncHandler(async (req, res) => {
	const {id} = req.user
	const page = Math.max(1, parseInt(req.query.page, 10) || 1)
	const {user_role} = await checkUserRole(id)

	const FIRST_PAGE_LIMIT = user_role !== 'teacher' ? 5 : 6
	const NEXT_PAGES_LIMIT = 6

	const skip = !(page - 1)
		? 0
		: FIRST_PAGE_LIMIT + (page - 2) * NEXT_PAGES_LIMIT
	const take = !(page - 1) ? FIRST_PAGE_LIMIT : NEXT_PAGES_LIMIT

	const whereCondition = user_role === 'teacher' ? {authorId: id} : user_role === 'admin' ? {} : {reviewStatus: {status: 'approved'}}

	const total = await prisma.courses.count({
		where: whereCondition
	})

	const remaining = Math.max(0, total - FIRST_PAGE_LIMIT)
	const otherPages = Math.ceil(remaining / NEXT_PAGES_LIMIT)
	const pages = 1 + otherPages

	const courses = await prisma.courses.findMany({
		skip,
		take,

		where: whereCondition,
		select: {
			id: true,
			title: true,
			shortDesc: true,
			previewImage: true,
			avgDuration: true,
			price: true,
			slug: true,
			favorite: true,
			fromWhom: true,
      stats: {
        select: {
          course_id: true,
          ratingAvg: true,
          enrollmentsCount: true
        }
      },
			reviewStatus: {
				select: {
					status: true
				}
			}
		}
	})

	res.json({
		data: courses,
		total,
		pages
	})
})
