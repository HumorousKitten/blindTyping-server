import asyncHandler from 'express-async-handler'
import { prisma } from '../prisma.js'

//@desc Get all courses
//@route GET /courses?page
//@access Private

export const getCourses = asyncHandler(async (req, res) => {
	const page = Math.max(1, parseInt(req.query.page, 10) || 1)
	const FIRST_PAGE_LIMIT = 5
	const NEXT_PAGES_LIMIT = 6

	const skip = !(page - 1)
		? 0
		: FIRST_PAGE_LIMIT + (page - 2) * NEXT_PAGES_LIMIT
	const take = !(page - 1) ? FIRST_PAGE_LIMIT : NEXT_PAGES_LIMIT

	const total = await prisma.courses.count({
		where: {
			reviewStatus: {
				status: 'approved'
			}
		}
	})

	const remaining = Math.max(0, total - FIRST_PAGE_LIMIT)
	const otherPages = Math.ceil(remaining / NEXT_PAGES_LIMIT)
	const pages = 1 + otherPages

	const courses = await prisma.courses.findMany({
		skip,
		take,

		where: {
			reviewStatus: {
				status: 'approved'
			}
		},
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
      }
		}
	})

	res.json({
		data: courses,
		total,
		pages
	})
})
