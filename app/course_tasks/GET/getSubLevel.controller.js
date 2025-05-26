import asyncHandler from 'express-async-handler'
import { prisma } from '../../prisma.js'

//@desc Get sublevel
//@route GET /course-content/sublevel?levelId&order
//@access Private

export const getSubLevel = asyncHandler( async (req, res) => {
	const {level_id, order} = req.query
	
	if(!level_id || !order) {
		res.status(404)
		throw new Error('Нет существующего под уровня')
	}

	const content = await prisma.course_sublevels.findFirst({
		where: {
			level_id: +level_id,
			order: +order
		},

		select: {
			content: true
		}
	})

	res.json(content)
})