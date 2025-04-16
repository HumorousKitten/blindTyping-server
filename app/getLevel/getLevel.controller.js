import asyncHandler from 'express-async-handler'
import { prisma } from '../prisma.js'

//@desc Get level
//@route GET /levels/getLevel
//@access Private

export const getLevel = asyncHandler(async (req, res) => {
	const { level, sublevel } = req.query
	console.log(level, sublevel)

	if (!level || !sublevel) {
		res.status(400)
		throw new Error('Level and sublevel are required')
	}

	if (isNaN(+level) || isNaN(+sublevel)) {
		res.status(400)
		throw new Error('Level and sublevel must be numbers')
	}

	const lvl = await prisma.levels.findUnique({
		where: {
			level_sublevel: { level: +level, sublevel: +sublevel } 
		}
	})

	res.json(lvl)
})
