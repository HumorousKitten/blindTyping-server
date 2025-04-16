import asyncHandler from 'express-async-handler'
import { prisma } from '../prisma.js'

//@desc Update result
//@route PUT /updateResult
//@access Private

export const updateResult = asyncHandler(async (req, res) => {
	const { id } = req.user
	const { level, sublevel, cpm, wpm, accuracy } = req.body

	const isResult = await prisma.results.findFirst({
		where: {
			user_id: id,
			level,
			sublevel
		}
	})

	if (isResult) {
		if (isResult.accuracy < accuracy) {
			const result = await prisma.results.updateMany({
				where: {user_id: id, level, sublevel},
				data: { cpm, wpm, accuracy }
			})
			return res.json({result: true})
		}
	} else {
		const result = await prisma.results.create({
			data: { user_id: id, level, sublevel, cpm, wpm, accuracy }
		})
		return res.json({result: true})
	}
})
