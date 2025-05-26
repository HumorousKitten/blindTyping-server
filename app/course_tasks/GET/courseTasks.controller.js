import asyncHandler from 'express-async-handler'
import { prisma } from '../../prisma.js'

//@desc Get course modules
//@route GET /course/modules?course_id
//@access Private

export const getCourseModules = asyncHandler(async (req, res) => {
	const { course_id } = req.query

	if (!course_id) {
		res.status(404)
		throw new Error('не существующий id')
	}

	const main_title = await prisma.courses.findUnique({
		where: {id: +course_id},
		select: {
			title: true
		}
	})

	const modules = await prisma.course_level_blocks.findMany({
		where: { course_id: +course_id },

		select: {
			id: true,
			course_id: true,
			title: true,
			order: true,

			courseLevels: {
				select: {
					id: true,
					level_block_id: true,
					title: true,
					type: true,
					order: true,
					level_language: {
						select: {
							language: true
						}
					},

					courseSubLevels: {
						select: {
							id: true,
							level_id: true,
							order: true
						}
					}
				}
			}
		}
	})

	res.json({main_title: main_title.title, modules})
})
