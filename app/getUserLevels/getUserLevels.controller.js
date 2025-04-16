import { prisma } from '../prisma.js'
import asyncHandler from 'express-async-handler'

//@desc Get user levels
//@route GET /userLevels/getUserLevels
//@access Private

export const getUserLevels = asyncHandler(async (req, res) => {
	const { id } = req.user

	const userLevels = await prisma.results.findMany({
		where: {
			user_id: id,
			accuracy:{
				gte: 90
			}
		},
		select: {level: true, sublevel: true, cpm: true, wpm: true, accuracy: true}
	})


	res.json(userLevels)
})
