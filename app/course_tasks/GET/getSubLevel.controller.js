import asyncHandler from 'express-async-handler'
import { prisma } from '../../prisma.js'

//@desc Get sublevel
//@route GET /course-content/sublevel?id
//@access Private

export const getSubLevel = asyncHandler( async (req, res) => {
	const {id} = req.query
	
	if(!id) {
		res.status(404)
		throw new Error('Не существует такого id')
	}

	const content = await prisma.course_sublevels.findUnique({
		where: {
			id: +id
		},

		select: {
			content: true
		}
	})

	res.json(content)
})