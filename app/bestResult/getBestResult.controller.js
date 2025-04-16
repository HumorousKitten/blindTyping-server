import { prisma } from '../prisma.js'
import asyncHandler from 'express-async-handler'

//@desc Get best result
//@route GET /userBestResult/getBestResult
//@access Private

export const getBestResult = asyncHandler(async (req, res) => {
	const { id } = req.user

	const bestResult = await prisma.results.findFirst({
		where: {
			user_id: id
		},
		orderBy: [
			{accuracy: 'desc'},
			{cpm: 'desc'},
			{wpm: 'desc'}
		],

		select: {
			level: true,
			sublevel: true,
			cpm: true,
			wpm: true,
			accuracy: true
		}
	})

	res.json(bestResult)
})
